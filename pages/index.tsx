import { useState, useEffect } from 'react'
import { utcToZonedTime } from 'date-fns-tz'
import styles from '../styles/index.module.css'

export default function Home() {
  const [jst, setJst] = useState(new Date())
  const [utc, setUtc] = useState(new Date())
  const [hst, setHst] = useState(new Date())

  useEffect(() => {
    const jstSetInterval = setInterval(() => {
      setJst(utcToZonedTime(new Date(), 'Asia/Tokyo'))
    }, 1000)
    const utcSetInterval = setInterval(() => {
      setUtc(utcToZonedTime(new Date(), 'UTC'))
    }, 1000)
    const hstSetInterval = setInterval(() => {
      setHst(utcToZonedTime(new Date(), 'Pacific/Honolulu'))
    }, 1000)
    return () => {
      clearInterval(jstSetInterval)
      clearInterval(utcSetInterval)
      clearInterval(hstSetInterval)
    }
  }, [])

  return (
    <div>
      <div>
        <h3 className={styles.city}>Asia/Tokyo</h3>
        <h2 className={styles.time} suppressHydrationWarning>
          {jst.getHours().toString().padStart(2, '0')}:
          {jst.getMinutes().toString().padStart(2, '0')}:
          {jst.getSeconds().toString().padStart(2, '0')}
        </h2>
      </div>
      <div>
        <h3 className={styles.city}>Europe/London</h3>
        <h2 className={styles.time} suppressHydrationWarning>
          {utc.getHours().toString().padStart(2, '0')}:
          {utc.getMinutes().toString().padStart(2, '0')}:
          {utc.getSeconds().toString().padStart(2, '0')}
        </h2>
      </div>
      <div>
        <h3 className={styles.city}>Pacific/Honolulu</h3>
        <h2 className={styles.time} suppressHydrationWarning>
          {hst.getHours().toString().padStart(2, '0')}:
          {hst.getMinutes().toString().padStart(2, '0')}:
          {hst.getSeconds().toString().padStart(2, '0')}
        </h2>
      </div>
    </div>
  )
}
