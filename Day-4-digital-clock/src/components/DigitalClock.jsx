import { useEffect, useState } from "react"

const DigitalClock = () => {
    const [time, setTime] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            let hours = String(date.getHours()).padStart(2, '0')
            let minutes = String(date.getMinutes()).padStart(2, '0')
            let seconds = String(date.getSeconds()).padStart(2, '0')
    
            setTime(`${hours}:${minutes}:${seconds}`)
        }, 1000)
        return () => clearInterval(interval)
    })
    return (
        <div className="bg-gray-100 text-black p-10 rounded-xl text-9xl neumorph font-sans">
            {time}
        </div>
    )
}
export default DigitalClock