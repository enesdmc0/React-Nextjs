"use client"
import React from "react";
import {useTheme, useThemeUpdate} from "@/components/ThemeProvider";


export default function Home() {
    const darkTheme = useTheme()
    const toggleTheme: any = useThemeUpdate()
console.log(darkTheme, toggleTheme)
    const themeStyles = {
        backgroundColor: darkTheme ? "yellow" : "green",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem",
    }

  return (
      <main className="flex min-h-screen flex-col items-center p-24">
          <button onClick={toggleTheme}>Toggle Theme</button>
          <div style={themeStyles}>
              <h1>Function Component</h1>

          </div>
    </main>
  );
}
