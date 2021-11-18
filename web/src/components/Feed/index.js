import React from 'react';

import FeedContent from '../FeedContent';
import { FeedStyled,Loading } from './styles';

import { API } from '../../api';

const Feed = () => {
  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(`${API}/posts?_limit=1&_page=${currentPage}`);
        const json = await response.json();

        setPosts(prevPosts => [...prevPosts, ...json]);
        setLoading(false);  
      } catch(err) {
        setLoading(true);
      }
      
    } getPosts();
  }, [currentPage]);

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if(entries.some(entrie => entrie.isIntersecting)) {
        setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
      }
    });

    intersectionObserver.observe(document.getElementById('endScroll'));

    return () => {
      intersectionObserver.disconnect();
    }
  }, [])

  return (
    <FeedStyled>
      {loading && <Loading />}
      {!loading && posts.map(post => <FeedContent key={post.id} post={post} />)}
      <div id="endScroll"></div>
    </FeedStyled>
  )
}

export default Feed;
