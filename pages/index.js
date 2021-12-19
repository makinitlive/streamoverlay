import React, { useState } from 'react'
import tw from 'twin.macro'
import { Logo, TodoItem } from './../components'

const IndexPage = () => {
  const [ showTitle, setShowTitle ] = useState(false)
  const play = false

  const [ title, setTitle ] = useState('Refactoring stream overlay code')
  const [ subtitle, setSubtitle ] = useState('Now working on')

  let animatedTitle = [...title]

  const todoItems = [
    {label: 'Refactoring code', complete: true},
    {label: 'Live title updating', complete: true},
    {label: 'Tick animation', complete: true},
    {label: 'Stinger transitions', complete: false},
    {label: 'Title card', complete: false},
    // {label: 'OBS scripts?', complete: false},
    // {label: 'what do once done?', complete: false},
  ]

  return (
    <div tw='height[1200px] relative'>
      <div tw='absolute flex items-center z-50 bottom-0 flex left-0 right-0 height[120px] bg-blue-700'>
        <div tw='bg-white height[120px]'>
          <input name='subtitle' onBlur={e => setSubtitle(e.target.value)} defaultValue={subtitle} tw='text-4xl w-full block' />
          <input name='title' onBlur={e => setTitle(e.target.value)} defaultValue={title} tw='text-5xl w-full block' />
        </div>
        <button
          tw='w-full bg-blue-600 height[120px] text-4xl font-bold text-white outline-none'
          onClick={() => setShowTitle(!showTitle)}>
          {(showTitle) ? 'Hide' : 'Show'} title
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
          {todoItems.map((todo) => (
            <TodoItem label={todo.label} complete={todo.complete} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndexPage
