import { delay } from '@/lib/utils'
import React from 'react'

const Team = async () => {
  await delay(3000);
  return (
      <div className="h-96 flex-1 rounded-2xl bg-pink-800 p-10 text-white">
        <h1 className="text-3xl font-bold">Team</h1>
      </div>
  )
}

export default Team