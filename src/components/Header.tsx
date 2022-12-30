import { FormEvent, ChangeEvent } from 'react';
import { CreateTask } from './CreateTask';

import styles from './Header.module.css';
import todoLogo from '../assets/rocket.svg';

interface Header {
    handleCreateTask: (event: FormEvent) => void,
    handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void,
    newTaskText: string
}

export function Header({ handleCreateTask, handleNewTaskChange, newTaskText }: Header) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={todoLogo} alt="Logotipo da to-do" />
                <h1>to<span>do</span></h1>
            </div>

            <CreateTask 
                handleCreateTask={handleCreateTask}
                handleNewTaskChange={handleNewTaskChange}
                newTaskText={newTaskText}
            />
        </header>
    );
}