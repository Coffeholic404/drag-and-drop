/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
export const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState('')
  const [adding, setAdding] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim().length) return;
        const newCard = {
            column,
            title: text.trim(),
            id: Math.random().toString(),
        };
        setCards((pv) => [...pv, newCard]);
        setAdding(false);
    }
  return (
    <>
      {adding ? (
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new Task..."
            className=" w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 foucs:outline-0"
          ></textarea>
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className=" px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-50"
            >
              close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-sm text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <FiPlus />
        </button>
      )}
    </>
  )
}
