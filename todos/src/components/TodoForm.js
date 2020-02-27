import React, { useState } from 'react';

export default function TodoForm({ addTodo, clearCompleted }) {
	const [ input, setInput ] = useState('');
	const submitHandler = (e) => {
		e.preventDefault();
		addTodo(input);
		setInput('');
	};
	return (
		<div>
			<form onSubmit={(e) => submitHandler(e)}>
				<input type="text" name="todo" value={input} onChange={(e) => setInput(e.target.value)} />
				<button type="submit">Submit</button>
				<button onClick={() => clearCompleted()}>Clear Completed</button>
			</form>
		</div>
	);
}
