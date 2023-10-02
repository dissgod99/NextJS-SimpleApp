"use client"

import React from 'react'

function Error({error, reset}) {
  return (
    <button onClick={() => reset()}>error</button>
  )
}

export default Error