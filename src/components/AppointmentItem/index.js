import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, toggleStar} = props
  const {id, title, date, isStarred} = eachAppointment

  const starImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const onClickStar = () => {
    toggleStar(id)
  }

  return (
    <li>
      <div>
        <p>{title}</p>
        <button type="button" onClick={onClickStar}>
          <img src={starImage} alt="star" data-testid="star" />
        </button>
      </div>
      <p>Date:{date}</p>
    </li>
  )
}
export default AppointmentItem
