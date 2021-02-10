import {
  call,
  put,
  select,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import {
  getTagFromDescription,
  getUpMinorVersion,
  upMajorVersion,
} from 'utils/versions.utils';

import {
  createNewTag,
  fetchMergeRequests,
  fetchSingleMergeRequests,
  fetchTags,
  startFetchTags,
  upAllVersions,
  updateDescriptionMergeRequests,
  updateMergeRequests,
  upMinorVersion,
} from './Home.reducer';
import { getMergeRequests, getTags } from './Home.selectors';

function* upAllVersionsSaga() {
  const tags = yield select(getTags);
  const mergeRequestsList = yield select(getMergeRequests);

  for (let i = 0; i < mergeRequestsList.length; i++) {
    const currentRelease = mergeRequestsList[i];
    const currentReleaseName = currentRelease.release;
    const newTag = upMajorVersion(tags[currentReleaseName].name);
    const release = `release/${currentReleaseName}`;

    yield put(
      createNewTag({
        tagName: newTag,
        ref: release,
      }),
    );

    yield put(
      updateDescriptionMergeRequests({
        newTag,
        iid: currentRelease.iid,
        isUpdatingData: false,
      }),
    );
  }
}

function* fetchTagsSaga() {
  const MR = yield select(getMergeRequests);
  const activeRelease = MR.map((i: any) =>
    i.source_branch.replace('release/', ''),
  );

  for (let i = 0; i < activeRelease.length; i++) {
    yield put(fetchTags({ search: activeRelease[i] }));
  }
}

function* updateMergeRequestsSaga({
  payload: { iid, newTag, isUpdatingData = true },
}: any) {
  let newDesc;

  yield put(fetchSingleMergeRequests({ mergeRequestId: iid }));
  const data = yield take(`${fetchSingleMergeRequests}_SUCCESS`);

  const desc = data.payload.data.description;
  const tagFromDesc = getTagFromDescription(desc);

  if (tagFromDesc === null) {
    newDesc = `Tag: ${newTag}`;
  } else {
    newDesc = desc?.replace(tagFromDesc, newTag);
  }

  yield put(updateMergeRequests({ mergeRequestId: iid, description: newDesc }));

  if (isUpdatingData) {
    yield take(`${updateMergeRequests}_SUCCESS`);
    yield put(fetchMergeRequests());
  }
}

function* upMinorVersionSaga({ payload: { tag, release, iid } }: any) {
  const newTag = yield call(getUpMinorVersion, tag);

  yield put(
    createNewTag({
      tagName: newTag,
      ref: `release/${release}`,
    }),
  );

  yield put(
    updateDescriptionMergeRequests({
      newTag,
      iid,
    }),
  );
}

export default function* watchActions() {
  yield takeEvery(startFetchTags, fetchTagsSaga);
  yield takeEvery(upAllVersions, upAllVersionsSaga);
  yield takeEvery(upMinorVersion, upMinorVersionSaga);
  yield takeEvery(updateDescriptionMergeRequests, updateMergeRequestsSaga);
  yield takeEvery(`${fetchMergeRequests}_SUCCESS`, fetchTagsSaga);
  yield takeLatest(`${createNewTag}_SUCCESS`, fetchTagsSaga);
}
