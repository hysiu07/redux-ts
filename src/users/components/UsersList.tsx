import UsersListElement from './UserListElement';
type UsersListPropsType = {
	users: any[] | [];
};
function UsersList({ users }: UsersListPropsType) {
	return (
		<div>
			{users.length > 0 ? (
				users.map((user: any) => <UsersListElement key={user.id} user={user} />)
			) : (
				<p>No posts available</p>
			)}
		</div>
	);
}

export default UsersList;
