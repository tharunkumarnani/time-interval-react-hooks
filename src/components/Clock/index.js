import {useState, useEffect} from 'react'
import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'
import {concatenate} from 'workbox-streams'

const Clock = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timeId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    console.log('executed interval ')
    return () => {
      clearInterval(timeId)
      console.log('Cleaned function called')
    }
  }, [])
  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time>{date.toLocaleTimeString()}</Time>
    </ClockContainer>
  )
}
export default Clock
