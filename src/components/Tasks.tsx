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
        <div className={styles.tasksContainer}>
          <div className={styles.tasksHeader}>
            <input
              value={newTask}
              onChange={(e) => handleNewTaskContent(e)}
              className={styles.taskInput}
              placeholder="Adicione uma nova tarefa"
            />
            <button onClick={handleAddTask} className={styles.btnAddTask}>
              Criar
              <PlusCircle size={16} />
            </button>
          </div>
    
          <div className={styles.tasksInformation}>
            <p>Tasks Created: <span>{task.length}</span></p>
            <p>Tasks Completed: <span>{task.map((t) => t.isCompleted).filter((task) => task).length} de {task.length}</span></p>
          </div>
    
          <div className={styles.tasksList}>
            {
              task.length < 1 ? (
                <div>
                  <ClipboardText size={56}  className={styles.taskIcon} />
                  <p>You don't have any tasks</p>
                  <span>Add Task and Organize your Work Flow</span>
                </div>
              ) : (
                  displayTasks()
              )
            }
          </div>
        </div>
      )
    }

export default Tasks