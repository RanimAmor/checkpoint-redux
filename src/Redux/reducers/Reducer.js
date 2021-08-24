import { addTask, completed, deleted } from "../action"

const initialState = {
    tasks: [
        {
            id: 1,
            description: 'default todo',
            completed: false
        }
    ]
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addTask':
            return {
                tasks: [...state.tasks, action.payload]
            }
        case 'deleted':
            return {
                tasks:[ ...state.tasks.filter(task=>task!==action.payload) ]
             }   
        case 'completed':
            return {
                
             }
        default:
            return state
    }
}

export default Reducer