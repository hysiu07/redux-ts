import PostListElement from './PostListElement';
type PostListElementPropsType = {
	posts: {
		userId: number;
		id: number;
		title: string;
		body: string;
	}[] | [];
};
function PostsList({ posts }: PostListElementPropsType) {
	return (
		<div>
			{posts.length > 0 ? (
				posts.map((post) => <PostListElement key={post.id} post={post} />)
			) : (
				<p>No posts available</p>
			)}
		</div>
	);
}

export default PostsList;
