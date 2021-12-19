import React from 'react'
import tw from 'twin.macro'

const TodoItem = ({ label, complete }) => (
  <div
    tw='p-4 border border-gray-800 border-opacity-20 bg-white flex items-center w-72 font-bold text-2xl rounded-3xl shadow-lg'>
    <div
      css={[
        tw`mr-3 p-1 rounded-lg transition-all h-7 w-7 flex items-center justify-center`,
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
    <span
      css={[
        tw`transition-opacity relative`,
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
    </span>
  </div>
)

export { TodoItem }
