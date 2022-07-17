import React, { ChangeEvent, useState } from "react";
import styles from './Tasks.module.css'
import { PlusCircle, ClipboardText, Trash, Check } from "phosphor-react";



interface TasksProps {
    content: string;
    isCompleted: boolean;
}

const Tasks = (props: TasksProps) => {


    const [task, setTask] = React.useState<TasksProps[]>([]);
    const [isCompleted, setIsCompleted] = useState<TasksProps[]>([]);
    const [newTask, setNewTask] = useState("");


    const handleNewTaskContent = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
    } 

    const handleAddTask = () => {
        setTask([...task, { content: newTask, isCompleted: false }]);
        setNewTask("");
    }

    const handleDeleteTask = (index: number) => {
        const newTask = [...task];
        newTask.splice(index, 1);
        setTask(newTask);
    }

    const handleCompleteTask = (index: number) => {
        const newTask = [...task];
        newTask[index].isCompleted = !newTask[index].isCompleted;
        setTask(newTask);
    }

    function displayTasks() {
        return task.map((task, index) => (
          <div key={index} className={styles.task}>
            <div
              className={task.isCompleted ? styles.taskCheckboxChecked : styles.taskCheckbox }
              onClick={(e) => handleCompleteTask(index)}
            >
              {
                task.isCompleted ? (
                  <Check size={18} />
                ) : (
                  <input type="checkbox" checked={task.isCompleted}/>
                )
              }
            </div>
            <span className={task.isCompleted ? styles.taskContentCompleted : ""}>{task.content}</span>
            <Trash
              size={16}
              className={styles.taskTrashIcon}
              onClick={() => handleDeleteTask(index)}
            />
          </div>
        ));
      }


  return (
    <>
        <div>
            <div>
                <input placeholder='Add a task' type="text" />
                <button onClick={handleAddTask} className={styles.btnAddTask}>Create</button>
                <PlusCircle size={16} />
            </div>
        </div>

        <div>
            <p>Tarefas Criadas:<span>{task.length}</span></p>
            <p>Tarefas Concluidas: <span>{task.map((task) => task.isCompleted).filter((task) => task).length} de {task.length}</span></p>
        </div>
        <div>
            {
                displayTasks()
            }
        </div>
    
    </>
    
  )
}

export default Tasks