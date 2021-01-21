import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Grid, Paper } from '@material-ui/core';
// @ts-ignore
import { Button, Typography, Link } from '@crpt-ui/core';

import { Layout } from 'components/Layout/Layout';
import { Separator } from 'components/Separator/Separator';

import { TagsItemConnected } from './TagsItem/TagsItem';
import {
  fetchMergeRequests,
  getMergeRequests,
  getTags,
  upAllVersions,
} from './ducks';

const Home = ({
  fetchMergeRequests,
  upAllVersions,
  tags,
  mergeRequests,
}: any) => {
  useEffect(() => {
    fetchMergeRequests();
  }, [fetchMergeRequests]);

  const onUpAllVersions = useCallback(() => {
    upAllVersions();
  }, [upAllVersions]);

  const onCopyTable = useCallback(() => {
    navigator.clipboard.writeText(
      '||component||new version||\n' +
        '|frontend-markirovka|[elk-17.35.0-RLS-820|https://git.crptech.ru/frontend/mark/-/tags/elk-17.35.0-RLS-820]|',
    );
  }, []);

  return (
    <Layout>
      <Paper
        elevation={3}
        style={{
          overflow: 'hidden',
          position: 'relative',
          minHeight: 'calc(100vh - 100px)',
          padding: '16px 32px',
        }}
      >
        <Box my={3}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button onClick={onUpAllVersions} disabled={tags.length === 0}>
                Повысить все мажорные версии
              </Button>
            </Grid>

            <Grid item>
              <Button onClick={onCopyTable}>Табличка версий для Jira</Button>
            </Grid>
          </Grid>
        </Box>

        {mergeRequests.map((item: any) => (
          <Box key={`${item.source_branch}_${item.updated_at}`}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <Typography variant="h5">
                  <Link href={item.web_url} target="_blank">
                    {item.title}
                  </Link>
                </Typography>
              </Grid>
              <Grid item>{item.source_branch}</Grid>
              <Grid item>
                <TagsItemConnected mergeRequest={item} />
              </Grid>
              <Grid item xs={12}>
                <Separator />
              </Grid>
            </Grid>
          </Box>
        ))}
      </Paper>
    </Layout>
  );
};

// @ts-ignore
const mapStateToProps = (state) => ({
  tags: getTags(state),
  mergeRequests: getMergeRequests(state),
});
const mapDispatchToProps = {
  upAllVersions,
  fetchMergeRequests,
};

export const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home);
