import { createActions, handleActions } from 'redux-actions';

export const {
  startFetchTags,
  fetchTags,
  fetchMergeRequests,
  fetchSingleMergeRequests,
  updateMergeRequests,
  createNewTag,
  upAllVersions,
  upMinorVersion,
  openApproveModal,
  updateDescriptionMergeRequests,
}: any = createActions(
  {
    START_FETCH_TAGS: (p) => p,
    FETCH_TAGS: ({ search }) => ({
      request: {
        url: '/repository/tags',
        method: 'GET',
        params: {
          search,
          limit: 1,
        },
      },
    }),
    FETCH_MERGE_REQUESTS: () => ({
      request: {
        url: '/merge_requests',
        method: 'GET',
        params: {
          state: 'opened',
          labels: 'release',
        },
      },
    }),
    FETCH_SINGLE_MERGE_REQUESTS: ({ mergeRequestId }) => ({
      request: {
        url: `/merge_requests/${mergeRequestId}`,
        method: 'GET',
      },
    }),
    UPDATE_MERGE_REQUESTS: ({ mergeRequestId, description }) => ({
      request: {
        url: `/merge_requests/${mergeRequestId}`,
        method: 'PUT',
        data: {
          description,
        },
      },
    }),
    CREATE_NEW_TAG: ({ tagName, ref }) => ({
      request: {
        url: '/repository/tags',
        method: 'POST',
        data: {
          tag_name: tagName,
          ref,
        },
      },
    }),
    UP_ALL_VERSIONS: (p) => p,
    UP_MINOR_VERSION: (p) => p,
    OPEN_APPROVE_MODAL: (p) => p,
    UPDATE_DESCRIPTION_MERGE_REQUESTS: (p) => p,
  },
  {
    prefix: 'HOME',
  },
);

const initialState: any[] = [];

export const mergeRequests = handleActions(
  {
    [`${fetchMergeRequests}_SUCCESS`]: (_, { payload }: any) => {
      return payload.data.map((mergeRequest: any) => ({
        ...mergeRequest,
        release: mergeRequest.source_branch?.replace('release/', ''),
      }));
    },
  },
  initialState,
);

export const tags = handleActions(
  {
    [`${fetchTags}_SUCCESS`]: (state, { payload }: any): any => {
      const key =
        payload.config.reduxSourceAction.payload.request.params.search;
      const value = payload.data[0];

      return {
        ...state,
        [key]: value,
      };
    },
  },
  {},
);
