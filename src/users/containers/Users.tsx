import { connect } from 'react-redux';
import UsersList from '../components/UsersList';
import { fetchRequested } from './redux';
type UsersContainerPropsType = {
	users: any[] | [];
	isLoading: boolean;
	setUsers: () => void;
};
function UsersContainer({
	users,
	isLoading,
	setUsers,
}: UsersContainerPropsType) {
	return (
		<div className='container'>
			{isLoading && <p>Loading...</p>}
			<h2>Users</h2>
			<button onClick={setUsers}>Fetch Users</button>
			<UsersList users={users} />
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		users: state.users.users,
		isLoading: state.users.isLoading,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		setUsers: () => {
			dispatch(fetchRequested());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
