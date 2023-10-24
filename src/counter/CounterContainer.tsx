import { connect } from 'react-redux';
import { addCount, subCount, resetCount } from './redux';

type CounterContainerPropsType = {
	count: number;
	addCount: () => void;
	subCount: () => void;
	resetCount: () => void;
};

function CounterContainer({
	count,
	addCount,
	subCount,
	resetCount,
}: CounterContainerPropsType) {
	return (
		<div className='container'>
			<h2>Counter: {count}</h2>
			<button onClick={addCount}>Add</button>
			<button onClick={subCount}>Sub</button>
			<button onClick={resetCount}>Reset</button>
		</div>
	);
}

const mapStateToProps = (state: any) => {
	return {
		count: state.count.count,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		addCount: () => {
			dispatch(addCount());
		},
		subCount: () => {
			dispatch(subCount());
		},
		resetCount: () => {
			dispatch(resetCount());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
