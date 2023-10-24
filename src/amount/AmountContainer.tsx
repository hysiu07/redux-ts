import { connect } from 'react-redux';
import { addAmount, removeAmount, subAmount } from './redux';

type AmountContainerType = {
	amount: number;
	addAmount: () => void;
	subAmount: () => void;
	removeAmount: () => void;
};

function AmountContainer({
	amount,
	addAmount,
	subAmount,
	removeAmount,
}: AmountContainerType) {
	return (
		<div className='container'>
			<h2>Amount: {amount}</h2>
			<button onClick={addAmount}>Add</button>
			<button onClick={subAmount}>Sub</button>
			<button onClick={removeAmount}>Reset</button>
		</div>
	);
}

const mapStateToProps = (state: any) => {
	return { amount: state.amount.amount };
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		addAmount: () => {
			dispatch(addAmount());
		},
		subAmount: () => {
			dispatch(subAmount());
		},
		removeAmount: () => {
			dispatch(removeAmount());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AmountContainer);
