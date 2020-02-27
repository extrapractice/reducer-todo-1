export const initialState = {
    todos: [
        {
            item: 'Learn About Reducers', 
            completed: false, 
            id: 384823948,
        },
    ]
};

// Actions 

// ADD_TODO
// TOGGLE_COMPLETE 
// CLEAR_COMPLETED

export function todoReducer(state, action){
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state, todos: [...state.todos, {item: action.payload, id: Date.now(), completed: false}]
            }
        default: 
            return state;
    }
}