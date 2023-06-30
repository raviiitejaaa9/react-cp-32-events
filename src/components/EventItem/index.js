// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, onClickEventItem} = props
  const {id, imageUrl, name, location, registrationStatus} = eachEvent

  const onClickEventButton = () => {
    onClickEventItem(id, registrationStatus)
  }

  return (
    <li className="list-item">
      <button className="event-btn" type="button" onClick={onClickEventButton}>
        <img src={imageUrl} alt="event" className="event-img" />
        <p className="event-name"> {name} </p>
        <p className="event-location"> {location} </p>
      </button>
    </li>
  )
}

export default EventItem
