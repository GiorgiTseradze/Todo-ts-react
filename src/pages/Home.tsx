import { ChangeEvent, FC, useState } from "react"
import { TodoTask } from '../components/TodoTask'
import { ITask } from '../interfaces/TaskInterfaces'
import uuid from 'react-uuid'

export const Home: FC = () => {
    
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if(event.target.name === "task"){
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    }

    const addTask = ():void => {
        const newTask = { taskName: task, deadline: deadline, id: uuid() };
        if(task.length > 0){
            setTodoList([...todoList, newTask])
        }
        setTask('');
        setDeadline(0);
        console.log(todoList);
    }

    const removeTask = (id: string):void => {
        setTodoList(todoList.filter((task) => task.id !== id))
    }
    
    return (
        <div className="app">
            <div className="header">
                <div className="inputContainer">
                    <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange} />
                    <input placeholder="Deadline in days..." value={deadline} name="deadline" onChange={handleChange} />
                </div>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="todoList">
                {
                    todoList.map((task: ITask) => {
                        return <TodoTask task={task} key={task.id} removeTask={removeTask} />
                    })
                }
            </div>
        </div>
    )
}   