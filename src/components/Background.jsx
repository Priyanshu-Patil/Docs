import React from 'react'

const Background = () => {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
        <div className='absolute w-full py-10 flex justify-center text-zinc-500 font-semibold text-xl'>Documents.</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tight font-semibold text-zinc-900'>Docs.</h1>
        {}
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 font-medium text-base'>
          Made With <span className="text-red-500">♥</span> by Priyanshu
        </div>
      </div>
    </>
  )
}

export default Background