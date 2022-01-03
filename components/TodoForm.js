import React, { useState, useEffect, useRef } from 'react'
import tw from 'twin.macro'

const TodoForm = ({ showForm, addTodo, setShowForm }) => {
  const [ value, setValue ] = useState('')

  const addInput = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
    setShowForm(false)
  }

  useEffect(
    () => {
      addInput.current.value = ''
      addInput.current.focus()
    }, [showForm]
  )

  return (
    <form
      onSubmit={handleSubmit}
      tw='absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      style={{
        opacity: (showForm) ? 1 : 0,
        transition: `0.2s ease opacity`
      }}>
      <div tw='flex bg-white items-center px-7 py-4 outline-none rounded-3xl border border-gray-800 border-opacity-20 shadow-xl'>
        <label
          tw='px-4 py-2 bg-green-100 rounded-xl block text-green-800 z-50 relative text-xl uppercase font-bold'>
          New
        </label>
        <input
          ref={addInput}
          name='addTodo'
          type='text'
          tw='text-6xl px-4 outline-none appearance-none'
          style={{
            transition: `0.3s ease all`,
            transform: (showForm) ? `scale(1)` : `scale(0.8)`,
          }}
          defaultValue={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}


export { TodoForm }
