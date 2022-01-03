import React, { useState } from 'react'
import tw from 'twin.macro'
import { Logo, TodoItem, TodoForm } from './../components'
import useInterval from './../hooks/use-interval'

const IndexPage = () => {
  const [ showTitle, setShowTitle ] = useState(false)
  const [ showForm, setShowForm ] = useState(false)
  const play = false

  const [ title, setTitle ] = useState('Interactive to-dos')
  const [ subtitle, setSubtitle ] = useState('Now working on')

  const [ automatedTitleDisplay, setAutomatedTitleDisplay] = useState(false)
  const [ showTitleTime, setShowTitleTime ] = useState(10000)
  const [ hideTitleTime, setHideTitleTime ] = useState(30000)
  const [ interval, setInterval ] = useState(showTitleTime)

  let animatedTitle = [...title]

  const [todos, setTodos] = useState([
    {label: 'Interval timer title', complete: true},
    {label: 'Title card timing', complete: true},
    {label: 'Add new todos', complete: false},
    // {label: 'OBS scripts?', complete: false},
    // {label: 'what do once done?', complete: false},
  ])

  const addTodo = label => {
    const newTodos = [...todos, { label: label, complete: false }]
    setTodos(newTodos)
  }

  const toggleCompletion = index => {
    const todoList = [...todos]
    todoList[index].complete = !todoList[index].complete
    setTodos(todoList)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  useInterval(() => {
    setShowTitle(!showTitle)
    if (!showTitle) {
      setInterval(showTitleTime)
    } else {
      setInterval(hideTitleTime)
    }
  }, automatedTitleDisplay ? interval : null)

  const handleFocus = (event) => event.target.select()

  return (
    <div tw='height[1200px] relative'>
      <TodoForm showForm={showForm} addTodo={addTodo} setShowForm={setShowForm} />
      <div tw='absolute flex items-center z-50 bottom-0 flex left-0 right-0 height[120px] bg-blue-700'>
        <div tw='bg-white w-4/6 flex flex-col justify-center height[120px]'>
          <input name='subtitle' onFocus={handleFocus} onChange={e => setSubtitle(e.target.value)} defaultValue={subtitle} tw='text-4xl w-full block' />
          <input name='title' onFocus={handleFocus} onChange={e => setTitle(e.target.value)} defaultValue={title} tw='text-5xl w-full block' />
        </div>
        <div tw='bg-white w-2/6 flex flex-col justify-center height[120px]'>
          <input name='show' onFocus={handleFocus} onChange={e => setShowTitleTime(e.target.value)} defaultValue={showTitleTime} tw='text-4xl w-full block' />
          <input name='hide' onFocus={handleFocus} onChange={e => setHideTitleTime(e.target.value)} defaultValue={hideTitleTime} tw='text-5xl w-full block' />
        </div>
        <button
          css={[
            tw`w-1/3 height[120px] text-4xl font-bold text-white outline-none`,
            (showTitle) ? tw`bg-blue-600` : tw`bg-gray-600`
          ]}
          onClick={() => setShowTitle(!showTitle)}>
          {(showTitle) ? 'Hide' : 'Show'} title
        </button>
        <button
          css={[
            tw`w-1/3 height[120px] text-4xl font-bold text-white outline-none`,
            (automatedTitleDisplay) ? tw`bg-blue-600` : tw`bg-gray-600`
          ]}
          onClick={() => setAutomatedTitleDisplay(!automatedTitleDisplay)}>
          {(automatedTitleDisplay) ? 'Disable' : 'Enable'} interval
        </button>
        <button
          css={[
            tw`w-1/3 height[120px] text-4xl font-bold text-white outline-none`,
            (!showForm) ? tw`bg-blue-600` : tw`bg-gray-600`
          ]}
          onClick={() => setShowForm(!showForm)}>
          {(!showForm) ? 'Create to-do' : 'Cancel'}
        </button>
      </div>
      <div tw='height[1080px] relative'>
        <div tw='absolute bottom-2 left-4 px-8 py-6 '>
          <h2
            tw='px-4 py-2 bg-blue-100 rounded-xl inline-block mb-2 text-blue-800 z-50 relative text-xl uppercase font-bold'
            style={{
              transition: `0.2s ease all`,
              transitionDelay: showTitle ? `0.12s` : `0s`,
              opacity: showTitle ? 1 : 0,
              transform: showTitle ? `translateY(0%)` : `translateY(20%)`
            }}>
            {subtitle}</h2>
          <h1
            css={[
              tw`text-6xl font-bold relative z-50 transition-all`,
              showTitle ? tw`opacity-100` : tw`opacity-0`
            ]}>
            {animatedTitle.map((letter, index) => (
              <span
                key={`${index}-${letter}`}
                style={{
                  display: `inline-block`,
                  transition: `0.2s ease all`,
                  transitionDelay: showTitle ? `${(index * 11) + 120}ms` : `0s`,
                  opacity: showTitle ? 1 : 0,
                  transform: showTitle ? `translateX(0) rotate(0)` : `translateX(-20px) rotate(-20deg)`,
                  width: (letter === ' ') ? `10px`: `auto`
                }}>
                {letter}
              </span>
            ))}
          </h1>
          <div
            tw='absolute inset-0 bg-white rounded-3xl shadow-lg'
            style={{
              transition: `0.2s ease all`,
              opacity: showTitle ? 1 : 0,
              transform: showTitle ? `scale(1)` : `scale(0.33)`
            }}/>
        </div>
        <div tw='absolute bottom-4 right-6 space-y-2'>
          <div tw='flex justify-end mb-6'>
            <div tw='w-48'>
              <Logo play={play}/>
            </div>
          </div>
          <div>
            <h2 tw='text-white text-right text-xl font-black'>On this stream&hellip;</h2>
          </div>
          {todos.map((todo, index) => (
            <TodoItem key={index} index={index} label={todo.label} complete={todo.complete} toggleCompletion={toggleCompletion} removeTodo={removeTodo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndexPage
