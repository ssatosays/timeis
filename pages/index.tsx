import { useState, useEffect } from 'react';

export default function Home() {
  const [now, setDate] = useState(new Date())

  useEffect(() => {
    const curr = setInterval(() => {
      setDate(new Date());
    }, 1000)
    return () => {
      clearInterval(curr)
    }
  }, [])

  return (
    <div>
      <h1 suppressHydrationWarning>
        {now.getHours().toString().padStart(2, '0')}:
        {now.getMinutes().toString().padStart(2, '0')}:
        {now.getSeconds().toString().padStart(2, '0')}
      </h1>
    </div>
  )
}
