export const addTask= (newTask) =>{
    return {
        type:"addTask",
        payload:newTask
    }
}
export const deleted= (Task) =>{
    return {
        type:"deleteTask",
        payload:Task
    }
}

export const completed= (Task) =>{
    return {
        type:"completeTask",
        payload:Task
    }
}