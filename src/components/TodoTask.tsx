import { ITask } from "../interfaces/TaskInterfaces"


interface Props {
    task: ITask,  
    removeTask(id: string): void
}

export const TodoTask = ({task, removeTask}: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => removeTask(task.id)}>X</button>
        </div>
    )
}