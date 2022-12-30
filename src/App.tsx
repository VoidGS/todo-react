import { Header } from './components/Header';
import { Task, ITask } from './components/Task';
import { useState, FormEvent, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './global.css';
import clipBoard from './assets/clipboard.svg';
import styles from './App.module.css'

export function App() {
    const initVal: ITask[] = [];

    const [tasks, setTasks] = useState(initVal);

    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateTask(event: FormEvent) {
        event.preventDefault()

        const newTask: ITask = {
            id: uuidv4(),
            content: newTaskText,
            isDone: false
        }

        setTasks([...tasks, newTask]);
        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function onCompleteTask(taskId: string) {
        let newTaskArray = tasks.map(task => {
            if (task.id === taskId) task.isDone = !task.isDone;
            return task;
        });

        setTasks(newTaskArray);
    }

    function onDeleteTask(taskId: string) {
        let newTaskArray = tasks.filter(task => {
            return task.id !== taskId;
        });

        setTasks(newTaskArray);
    }

    function DisplayTasks() {
        if (tasks.length == 0) return (
            <div className={styles.emptyContainer}>
                <img src={clipBoard} alt="Clipboard icon" />
                <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
                <p className={styles.p2}>Crie tarefas e organize seus itens a fazer</p>
            </div>
        );

        return (
            <>
                {tasks.map(task => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            onCompleteTask={onCompleteTask}
                            onDeleteTask={onDeleteTask}
                        />
                    )
                })}
            </>
        );
    }

    let taskCount = tasks.length;
    let taskDoneCount = tasks.filter(task => {
        return task.isDone;
    }).length;

    return (
        <div>
            <Header 
                handleCreateTask={handleCreateTask}
                handleNewTaskChange={handleNewTaskChange}
                newTaskText={newTaskText}
            />

            <div className={styles.wrapper}>
                <div className={styles.tasksInfo}>
                    <strong className={styles.taskCount}>Tarefas criadas<span className={styles.badge}>{taskCount}</span></strong>
                    <strong className={styles.taskDoneCount}>Concluídas<span className={styles.badge}>{taskDoneCount} de {taskCount}</span></strong>
                </div>

                <div className={styles.tasksWrapper}>
                    <DisplayTasks />
                </div>
            </div>
        </div>
    )
}
