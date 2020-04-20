import React, { useState, useEffect } from 'react';

// Function for Dangerously Set HTML.
const createMarkup = ( content ) => ( { __html: content } );

const Posts = () => {

  // Set initial state on posts.
  const [posts, setPosts] = useState();

  const fetchWordPressPost = () => {
    fetch( `https://demo.wp-api.org/wp-json/wp/v2/posts` )
      .then( response => response.json() )
      .then( posts => setPosts( posts ) )
      .catch( error => console.error( error ) );
  };

  // Log posts anytime posts state is updated.
  useEffect(() => (
    console.log( posts )
  ), [posts]);

  // Run fetch on page load only.
  useEffect(() => {
    fetchWordPressPost();
  }, []);

  const listPosts = () => (
    Object.entries( posts ).map( ( post, id ) => {
      const currentPost = post[1];
      return (
        <Post
          author={ currentPost.author }
          date={ currentPost.date }
          excerpt={ currentPost.excerpt.rendered }
          id={ currentPost.id }
          key={ id }
          link={ currentPost.link }
          title={ currentPost.title.rendered }
        />
      );
  } ) );

  return (
    <main>
      { posts ? listPosts() : 'loading posts...' }
    </main>
  );
}

// Individual Post View.
const Post = ( { author, date, excerpt, id, link, title } ) => {
  const [displayContent, setDisplayContent] = useState( false );

  // Control content toggle.
  const togglePostContent = () => {
    if ( displayContent === false ) {
      setDisplayContent( true )
    } else {
      setDisplayContent( false)
    }
  };

  // Post content to display.
  const postContent = displayContent ? <div dangerouslySetInnerHTML={ createMarkup( excerpt ) } /> : '';
  const buttonLabel = displayContent ? 'Collapse Content' : 'Expand Content';

  return (
    <article id={ `post-id-${ id }` }>
      <h2><a href={ link }>{ title }</a></h2>
      <span>{ author }</span><br />
      <span>{ date }</span><br />
      { postContent }
      <button onClick={ togglePostContent } aria-expanded={ displayContent }>{ buttonLabel }</button>
    </article>
  );
};

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
