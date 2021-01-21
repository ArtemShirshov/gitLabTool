/* eslint-disable react/prop-types */
import React, { useCallback, useMemo } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { MenuButton } from '@crpt-ui/core';
import { connect } from 'react-redux';

import { getTagFromDescription, upMajorVersion } from 'utils/versions.utils';
import {
  getTags,
  upMinorVersion,
  updateDescriptionMergeRequests,
} from '../ducks';

const TagsItem = ({
  upMinorVersion,
  updateDescriptionMergeRequests,
  mergeRequest: { iid, description, release },
  tags,
}) => {
  const lastTag = useMemo(() => {
    return tags[release]?.name;
  }, [tags, release]);

  const upMinor = useCallback((tag, release, iid) => {
    upMinorVersion({ tag, release, iid });
  }, []);

  const upMajor = useCallback((tag, release) => {
    console.log(upMajorVersion(tag), 'release: ', release);
  }, []);

  const onUpdateDescriptionMergeRequests = useCallback(
    (iid, newTag) => {
      updateDescriptionMergeRequests({ iid, newTag });
    },
    [updateDescriptionMergeRequests],
  );

  const tagEqualMr = useMemo(() => {
    const tagFromDesc = getTagFromDescription(description);

    return lastTag === tagFromDesc ? null : <WarningRoundedIcon />;
  }, [description, lastTag]);

  const actions = useMemo(
    () => [
      {
        label: 'Повысить минорную версию',
        onClick: () => upMinor(lastTag, release, iid),
      },
      {
        label: 'Обновить пулл реквест',
        onClick: () => onUpdateDescriptionMergeRequests(iid, lastTag),
      },
      {
        label: 'Повысить мажорную версию',
        onClick: () => upMajor(lastTag, release),
      },
    ],
    [],
  );

  if (!lastTag) {
    return <CircularProgress size={20} />;
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>{lastTag}</Grid>

      <Grid item>{tagEqualMr}</Grid>

      <Grid item>
        <MenuButton
          items={[
            {
              label: 'Повысить минорную версию',
              onClick: () => upMinor(lastTag, release, iid),
            },
            {
              label: 'Обновить пулл реквест',
              onClick: () => onUpdateDescriptionMergeRequests(iid, lastTag),
            },
            {
              label: 'Повысить мажорную версию',
              onClick: () => upMajor(lastTag, release),
            },
          ]}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

// @ts-ignore
const mapStateToProps = (state) => ({
  tags: getTags(state),
});

const mapDispatchToProps = {
  upMinorVersion,
  updateDescriptionMergeRequests,
};

export const TagsItemConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagsItem);
