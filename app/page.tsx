"use client"
import React, {useEffect, useState} from "react"

export default function Home() {
  const [resourceType, setResourceType] = useState("posts")
  const [items, setItems] = useState([])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => setItems(json))
  }, [resourceType])

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
      <main className="flex min-h-screen flex-col   p-24">
        <div className="flex items-center gap-10">
          <button onClick={() => setResourceType("posts")}>posts</button>
          <button onClick={() => setResourceType("users")}>users</button>
          <button onClick={() => setResourceType("comments")}>comments</button>
      </div>

        <h1>{resourceType}</h1>

        {items.map((item) => {
          return <pre key={item}>{JSON.stringify(item)}</pre>
        })}

        <div className="bg-green-500 border rounded-md p-5">
          window width:
          {windowWidth}
        </div>

      </main>
  );
}
