import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore } from "redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
const counter = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
};

const Counter = ({ value, onIncrement, onDecrement }) => {
	return (
		<div>
			<h1>{value}</h1>
			<button onClick={onIncrement}>+</button>
			<button onClick={onDecrement}>-</button>
		</div>
	);
};

const store = legacy_createStore(counter, 0);

const render = () => {
	root.render(
		<React.StrictMode>
			<main>
				<Counter
					value={store.getState()}
					onDecrement={() => {
						console.log(store.getState());
						store.dispatch({ type: "DECREMENT" });
					}}
					onIncrement={() => {
						console.log(store.getState());
						store.dispatch({ type: "INCREMENT" });
					}}
				/>
			</main>
		</React.StrictMode>
	);
};

store.subscribe(render);
render();
