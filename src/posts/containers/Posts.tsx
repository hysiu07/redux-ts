import { connect } from 'react-redux';
import PostsList from '../components/PostsList';
import { fetchData } from './redux';
type PostsContainerPropsType = {
	posts:
		| {
				userId: number;
				id: number;
				title: string;
				body: string;
		  }[]
		| [];
	setPosts: () => void;
};

function PostsContainer({ posts, setPosts }: PostsContainerPropsType) {

	return (
		<div className='container'>
			<h2>Posts</h2>
			<button onClick={setPosts}>Fetch Posts</button>
			<PostsList posts={posts} />
		</div>
	);
}

const mapStateToProps = (state: any) => {
	return {
		posts: state.posts.posts,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		setPosts: () => {
			dispatch(fetchData());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
