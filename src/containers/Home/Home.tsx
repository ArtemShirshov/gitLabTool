import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Grid, Paper } from '@material-ui/core';
// @ts-ignore
import { Button, Link, Typography } from '@crpt-ui/core';

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
            </Grid>

            <Grid
              container
              spacing={2}
              alignItems="center"
              style={{ minHeight: 64 }}
            >
              <Grid item>
                <Link
                  href={`https://jira.crpt.ru/browse/${item.release}`}
                  target="_blank"
                >
                  {item.source_branch}
                </Link>
              </Grid>
              <Grid item>
                <TagsItemConnected mergeRequest={item} />
              </Grid>
            </Grid>

            <Separator mt={2} />
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
