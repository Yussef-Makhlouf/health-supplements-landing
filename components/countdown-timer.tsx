"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ hours, minutes, seconds }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours

        return {
          hours: newHours < 0 ? 23 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-3 gap-2 text-center">
      <div className="flex flex-col">
        <div className="text-2xl font-bold bg-gray-100 rounded-md py-2">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <span className="text-xs text-muted-foreground mt-1">Hours</span>
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold bg-gray-100 rounded-md py-2">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <span className="text-xs text-muted-foreground mt-1">Minutes</span>
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold bg-gray-100 rounded-md py-2">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <span className="text-xs text-muted-foreground mt-1">Seconds</span>
      </div>
    </div>
  )
}
