// type UserListPropsType = {
// 	user?: {
// 		id?: number;
// 		name?: string
// 	}
// }

function UserListElement({ user }:any) {
	return (
		<h3>
			{user?.id} {user?.name}
		</h3>
	);
}

export default UserListElement;
