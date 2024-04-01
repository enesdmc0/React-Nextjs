"use client"

import { useRef, useState, useEffect } from "react";

// state prev value - input focus - render count

export default function Home() {
  const [name, setName] = useState("");
  // const renderRef = useRef(0);
  const inputRef = useRef<any>()
  const previousRef = useRef("")

  useEffect(() => {
    //  renderRef.current++ //renderRef.current = renderRef.current + 1;
    previousRef.current = name
  }, [name])

  const handleFocus = () => {
    inputRef.current.focus()
    inputRef.current.value = "Some value"
  }

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <input ref={inputRef} className="text-black" type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>previus name {previousRef.current} </div>
      <button onClick={handleFocus} >Focus</button>
      {/* <div>I rendered {renderRef.current} times </div> */}
    </main>
  );
}
