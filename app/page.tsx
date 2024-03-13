"use client"
import React, {useState} from "react";


const testInitial = () => {
    console.log("test clicked");
    return 4

}

export default function Home() {
    const [count, setCount] = useState(0);

    // bu kullanımda her renderda testInitial fonksiyonu çalışır
    //const [test, setTest] = useState(testInitial());

    // bu kullanımda testInitial fonksiyonu sadece ilk renderda çalışır **daha performanslı
    const [test, setTest] = useState(() => {
        console.log("test clicked");
        return 4

    });

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const handleTest = () => {
        setTest(prev => prev + 1)
    }


  return (
      <main className="flex min-h-screen  items-center justify-center p-24 gap-5">
          <button onClick={decrement}
                  className="border p-5 text-xl rounded-lg hover:opacity-50 transition-all duration-500">-
          </button>
          <h1 className="text-xl">{count}</h1>
          <button onClick={increment}
                  className="border p-5 text-xl rounded-lg hover:opacity-50 transition-all duration-500">+
          </button>
          <button className="border p-5 text-xl rounded-lg hover:opacity-50 transition-all duration-500" onClick={handleTest}>{test}</button>
    </main>
  );
}
