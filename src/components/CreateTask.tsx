import { FormEvent, InvalidEvent, ChangeEvent } from 'react';
import styles from './CreateTask.module.css';
import { PlusCircle } from 'phosphor-react';

interface CreateTaskProps {
    handleCreateTask: (event: FormEvent) => void,
    handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void,
    newTaskText: string
}

export function CreateTask({ handleCreateTask, handleNewTaskChange, newTaskText }: CreateTaskProps) {
    function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    return (
        <form onSubmit={handleCreateTask} className={styles.addTaskContainer}>
            <input 
                type="text" 
                name="addTask" 
                placeholder='Adicione uma nova tarefa' 
                onInvalid={handleNewCommentInvalid} 
                onChange={handleNewTaskChange}
                value={newTaskText}
                required 
            />
            <button type="submit" className={styles.formButton}>Criar <PlusCircle className={styles.buttonIcon} size={22} /></button>
        </form>
    );
}