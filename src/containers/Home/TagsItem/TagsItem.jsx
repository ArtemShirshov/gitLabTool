/* eslint-disable react/prop-types */
import React, { useCallback, useMemo } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { MenuButton, Button } from '@crpt-ui/core';
import { connect } from 'react-redux';

import { getTagFromDescription, upMajorVersion } from 'utils/versions.utils';
import {
  getTags,
  getTagsLoading,
  updateDescriptionMergeRequests,
  upMinorVersion,
} from '../ducks';
import { openCreateTagDialog } from '../CreateTagDialog/ducks/CreateTagDialog.reducer';

const TagsItem = ({
  openCreateTagDialog,
  upMinorVersion,
  updateDescriptionMergeRequests,
  mergeRequest: { iid, description, release },
  tags,
  tagsLoading,
}) => {
  const lastTag = useMemo(() => {
    return tags[release]?.name;
  }, [tags, release]);

  const upMinor = useCallback(
    (tag, release, iid) => {
      upMinorVersion({ tag, release, iid });
    },
    [upMinorVersion],
  );

  const upMajor = useCallback((tag, release) => {
    console.log(upMajorVersion(tag), 'release: ', release);
  }, []);

  const onUpdateDescriptionMergeRequests = useCallback(
    (iid, newTag) => {
      updateDescriptionMergeRequests({ iid, newTag });
    },
    [updateDescriptionMergeRequests],
  );

  const onCopyTable = useCallback((lastTag) => {
    navigator.clipboard.writeText(
      `||component||new version||
      |frontend-markirovka|[${lastTag}|https://git.crptech.ru/frontend/mark/-/tags/${lastTag}]|`,
    );
  }, []);

  const onCopyReleaseNote = useCallback(
    (lastTag) => {
      navigator.clipboard.writeText(
        `Тег: ${lastTag} \nGitLab: https://git.crptech.ru/frontend/mark/-/tags/${lastTag} \nJira: https://jira.crpt.ru/browse/${release}`,
      );
    },
    [release],
  );

  const onOpenDialog = useCallback(() => {
    openCreateTagDialog({ release });
  }, [openCreateTagDialog, release]);

  const tagEqualMr = useMemo(() => {
    const tagFromDesc = getTagFromDescription(description);

    return lastTag === tagFromDesc ? null : <WarningRoundedIcon />;
  }, [description, lastTag]);

  const actions = useMemo(
    () => [
      {
        label: 'Скопировать таблицу версий для Jira',
        onClick: () => onCopyTable(lastTag),
      },
      {
        label: 'Скопировать Release Note',
        onClick: () => onCopyReleaseNote(lastTag),
      },
      {
        label: 'Обновить пулл реквест',
        onClick: () => onUpdateDescriptionMergeRequests(iid, lastTag),
        disabled: tagEqualMr === null,
      },
      {
        label: 'Повысить минорную версию',
        onClick: () => upMinor(lastTag, release, iid),
      },
      {
        label: 'Повысить мажорную версию',
        onClick: () => upMajor(lastTag, release),
      },
    ],
    [
      iid,
      lastTag,
      onCopyReleaseNote,
      onCopyTable,
      onUpdateDescriptionMergeRequests,
      release,
      tagEqualMr,
      upMajor,
      upMinor,
    ],
  );

  if (tags[release] === null) {
    return (
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <WarningRoundedIcon /> Нет тега
        </Grid>

        <Grid item>
          <Button onClick={onOpenDialog}>Создать тег</Button>
        </Grid>
      </Grid>
    );
  }

  if (tagsLoading) {
    return <CircularProgress size={20} />;
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>{lastTag}</Grid>

      <Grid item>{tagEqualMr}</Grid>

      <Grid item>
        <MenuButton items={actions} variant="outlined" />
      </Grid>
    </Grid>
  );
};

// @ts-ignore
const mapStateToProps = (state) => ({
  tags: getTags(state),
  tagsLoading: getTagsLoading(state),
});

const mapDispatchToProps = {
  openCreateTagDialog,
  upMinorVersion,
  updateDescriptionMergeRequests,
};

export const TagsItemConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagsItem);
