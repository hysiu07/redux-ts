import React from 'react';
type PostListElementPropsType = {
	post?: {
		userId: number;
		id: number;
		title: string;
		body: string;
	};
};
function PostListElement({ post }: PostListElementPropsType) {
	return (
		<h3>
			{post?.id}. {post?.title}
		</h3>
	);
}

export default PostListElement;
