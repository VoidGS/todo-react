import { ChangeEvent, MouseEvent } from 'react';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

import checkSvg from '../assets/check.svg';

export interface ITask {
    id: string;
    content: string;
    isDone: boolean;
}

interface TaskProps {
    task: ITask,
    onCompleteTask: (taskId: string) => void,
    onDeleteTask: (taskId: string) => void
}

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
    function handleCompleteTask() {
        onCompleteTask(task.id);
    }

    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    return (
        <form className={styles.taskContainer}>
            <input type="checkbox" name="doneCheck" id={task.id} className={styles.doneCheck} checked={task.isDone} onChange={handleCompleteTask} />
            <img src={checkSvg} className={styles.checkmark} />
            <div className={styles.contentWrapper}>
                <span className={styles.content}>{task.content}</span>
                <button type='button' className={styles.deleteBtn} onClick={handleDeleteTask}><Trash size={24} /></button>
            </div>
        </form>
    );
}