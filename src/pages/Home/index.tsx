import React from 'react';
import PageDefault from '../../components/PageDefault';
import FeedHeader from '../../components/FeedHeader';
import FeedMain from '../../components/FeedMain';

function Home() {
  return (
    <PageDefault>
      <FeedHeader />
      <FeedMain />
    </PageDefault>
  )
}

export default Home