import React from 'react';

// Function for Dangerously Set HTML.
const createMarkup = ( content ) => ( { __html: content } );

class Posts2 extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			posts: '',
		};
	}

	// Fetch posts on component mount.
	componentDidMount() {
		const fetchWordPressPost = () => {
			fetch( `https://demo.wp-api.org/wp-json/wp/v2/posts` )
				.then( response => response.json() )
				.then( posts => this.setState({ posts: posts }) )
				.catch( error => console.error( error ) );
		};

		fetchWordPressPost();
	}

	render() {
		const listPosts = () => (
			Object.entries( this.state.posts ).map( ( post, id ) => {
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

		return(
			<main>
				{ this.state.posts ? listPosts() : 'loading posts...' }
			</main>
		);
	}
}

class Post extends React.Component {
	constructor( props ) {
		super(props);
		this.state={
			displayContent: false,
		}
	}

	render() {
		// Control content toggle.
		const togglePostContent = () => {
			if ( this.state.displayContent === false ) {
				this.setState({ displayContent: true });
			} else {
				this.setState({ displayContent: false });
			}
		};

		const { author, date, excerpt, id, link, title } = this.props;

		// Post content to display.
		const postContent = this.state.displayContent ? <div dangerouslySetInnerHTML={ createMarkup( excerpt ) } /> : '';
		const buttonLabel = this.state.displayContent ? 'Collapse Content' : 'Expand Content';
		const dateTime = Date( date );

		return (
			<article id={ `post-id-${ id }` }>
				<h2><a href={ link }>{ title }</a></h2>
				<span>{ author }</span><br />
				<span>{ dateTime }</span><br />
				{ postContent }
				<button onClick={ togglePostContent } aria-expanded={ this.state.displayContent }>{ buttonLabel }</button>
			</article>
		);
	}
}


export default Posts2;