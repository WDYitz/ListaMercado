import styles from './app.module.css'
import { Item } from '../../components/Item'
import { IoBagAddSharp } from 'react-icons/io5'
import { BsCartFill } from 'react-icons/bs'
import { useState } from 'react'

interface ArrItem {
  id: number;
  content: string;
  checked?: boolean;
}

export function App() {
  const [item, setItem] = useState<any>()
  const [list, setList] = useState<ArrItem[]>([])
  const [error, setError] = useState<string>();

  const handleAddCompras = () => {
    if (item === '') {
      return setError('Insira um produto no campo');
    } else {
      const newList: ArrItem = {
        id: list.length + 1,
        content: item,
      }
      setList(list => [...list, newList])
      setItem('');
    }
  }

  function deleteItem(id: number) {
    setList(
      list.filter((_item) => _item.id !== id)
    );
  }

  return (
    <div className={styles.Container}>

      <div className={styles.FieldArea}>
        <input
          type="text"
          placeholder='O que deseja comprar?'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleAddCompras}>
          Adicionar
          <IoBagAddSharp />
        </button>
        <span
          className={styles.carrinho}
          /* arial={list.length} */
        ><BsCartFill />
        </span>
      </div>
      <p className='error'>{error}</p>

      <ul className={styles.ListArea}>
        {
          list.map((item) => (
            <Item
              key={item.id}
              text={item.content}
              index={item.id}
              deleteEvent={() => deleteItem(item.id)}
            />
          ))
        }
      </ul>
    </div>
  )
}
