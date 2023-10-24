import './styles.css';
import CounterContainer from './counter/CounterContainer';
import AmountContainer from './amount/AmountContainer';
import Posts from './posts/containers/Posts';
import Users from './users/containers/Users';

import { Provider } from 'react-redux/es/exports';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './configureStorePersist';


function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
				<AmountContainer />
				<CounterContainer />
				<Posts />
				<Users />
				</PersistGate>
			</Provider>
		</div>
	);
}

export default App;
