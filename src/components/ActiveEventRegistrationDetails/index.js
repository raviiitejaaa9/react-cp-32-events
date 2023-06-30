// Write your code here
import './index.css'

const componentConstants = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props
  console.log(status)

  const alreadyRegistered = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="registered-icon"
      />
      <h1> You have already registered for the event</h1>
    </div>
  )

  const registrationsEnded = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="reg-closed-img"
      />
      <h1 className="no-data"> Registrations are Closed Now! </h1>
      <p className="no-data">
        stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const yetToRegister = () => (
    <div className="registered-container">
      <img
        className="yet-to-be-registered-icon"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
      />
      <p> A live performance brings so much to your relationship with dance </p>
      <button className="register-btn" type="button">
        Register Here
      </button>
    </div>
  )

  const getComponent = () => {
    switch (status) {
      case componentConstants.registered:
        return alreadyRegistered()
      case componentConstants.registrationsClosed:
        return registrationsEnded()
      case componentConstants.yetToRegister:
        return yetToRegister()
      default:
        return (
          <p className="no-data">
            Click on an event, to view its registration details
          </p>
        )
    }
  }

  return getComponent()
}

export default ActiveEventRegistrationDetails
