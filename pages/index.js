import React, { useState } from 'react'
import tw from 'twin.macro'
import { Logo } from './../components'

const IndexPage = () => {
  const [ showTitle, setShowTitle ] = useState(false)
  const play = false

  let subtitle = 'Now working on'
  let title = 'Refactoring stream overlay code'

  let animatedTitle = [...title]

  const todoItems = [
    {label: 'Refactoring code', complete: false},
    {label: 'Live title updating', complete: false},
    {label: 'Stinger transitions', complete: false},
    {label: 'Title card', complete: false},
    // {label: 'OBS scripts?', complete: false},
    // {label: 'what do once done?', complete: false},
  ]

  return (
    <>
      <div tw='absolute z-50 bottom-0 flex left-0 right-0 height[120px] bg-red-500'>
        <button
          tw='w-full height[120px] text-white outline-none'
          onClick={() => setShowTitle(!showTitle)}>Toggle title</button>
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
              tw`text-5xl font-bold relative z-50 transition-all`,
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
            <div
              css={[
                tw`p-4 border border-gray-800 border-opacity-20 bg-white flex items-center w-72 font-bold text-2xl rounded-3xl shadow-lg`,
                todo.complete ? tw`line-through` : tw``,
              ]}>
              <div
                css={[
                  tw`mr-3 p-1 rounded-lg transition-all h-7 w-7 flex items-center justify-center`,
                  todo.complete? tw`bg-blue-500` : tw`bg-gray-200`
                ]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                >
                  <g
                    fill='none'
                    fillRule='evenodd'
                    stroke='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                  >
                    <path
                      className='path'
                      stroke='#FFF'
                      strokeWidth='2'
                      d='M1 5L5 9 13 1'
                      style={{
                        strokeDasharray: 17,
                        transition: `0.3s ease stroke-dashoffset`,
                        strokeDashoffset: todo.complete? 0 : 17,
                      }}
                    />
                  </g>
                </svg>
              </div>
              <div
                css={[
                  tw`transition-opacity`,
                  todo.complete ? tw`opacity-25` : tw`opacity-100`,
                ]}
              >{todo.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default IndexPage
