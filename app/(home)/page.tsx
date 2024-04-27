"use client"
import React, {useEffect, useState} from 'react';

import {getCrmEvents} from "@/lib/actions";



const HomePage = () => {

  const [page, setPage] = useState<number>(1);
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {

    getCrmEvents(page).then((events) => {

      setEvents(events?.items)
    })
  }, [page])


  const handlePage = () => {
    setPage(prev => prev + 1)
  }

  return (
      <div>

        {events.map((x: any, rowIndex: number) => (
            <div key={rowIndex} className="border p-5">
                <div>EVENT: {x.event}</div>
                <div>NAME: {x.name}</div>
            </div>
        ))}
      </div>
  );
};

export default HomePage;