import { BsFillTrash3Fill } from 'react-icons/bs';
import styles from './item.module.css'

interface Props {
    text: string;
    index: number;
    deleteEvent?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Item({ text, index, deleteEvent }: Props) {
    return (
        <div className={styles.item}>
            <h2 className={styles.textH2}>{index}</h2>
            <li>
                {text}
                <div>
                    <button
                        onClick={deleteEvent}
                        className={`${styles.delete} ${styles.btn}`}>
                        <BsFillTrash3Fill />
                    </button>
                </div>
            </li>
        </div>
    )
}