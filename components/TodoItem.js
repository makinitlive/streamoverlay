import React from 'react'
import tw from 'twin.macro'

const TodoItem = ({ index, label, complete, toggleCompletion, removeTodo }) => (
  <div tw='relative'>
    <button
      onClick={() => removeTodo(index)}
      tw='w-8 h-8 absolute flex items-center justify-center -top-4 -right-4 rounded-full text-2xl bg-red-500 font-bold transition opacity-0 scale-75 hover:(opacity-100 scale-100)'>
      <svg xmlns="http://www.w3.org/2000/svg" tw='w-5 h-5 text-white' viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
    <button
      onClick={() => toggleCompletion(index)}
      tw='p-4 outline-none appearance-none border border-gray-800 border-opacity-20 bg-white flex items-center w-72 font-bold text-2xl rounded-3xl shadow-lg'>
      <div
        css={[
          tw`mr-3 p-1 min-width[28px] rounded-lg transition-all h-7 w-7 flex items-center justify-center`,
          complete ? tw`bg-blue-500` : tw`bg-gray-200`
        ]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="10"
          viewBox="0 0 14 10"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          >
            <path
              stroke="#FFF"
              strokeWidth="2"
              d="M1 5L5 9 13 1"
              style={{
                strokeDasharray: 17,
                strokeDashoffset: complete ? 0 : 17,
                transition: `0.2s ease all`
              }}
            />
          </g>
        </svg>
      </div>
      <div
        css={[
          tw`transition-opacity relative text-left`,
          complete ? tw`opacity-25` : tw`opacity-100`,
        ]}
      >
        <div
          tw='absolute bg-black h-0.5 left-0 right-0 inset-y-1/2'
          style={{
            transformOrigin: `0% 50%`,
            transform: complete ? `scale(1)` : `scale(0)`,
            opacity: complete ? 1 : 0.3,
            transition: `0.3s ease transform, 0.3s ease opacity`,
          }}
        />
        {label}
      </div>
    </button>
  </div>
)

export { TodoItem }
