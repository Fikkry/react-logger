import { useState } from 'react'
import M from 'materialize-css/dist/js/materialize'

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a firstname and lastname' })
    } else {
      console.log(firstName, lastName)

      // Clear Fields
      setFirstName('')
      setLastName('')
    }
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstname" className="active">
              Firstname
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastname" className="active">
              Lastname
            </label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-green btn"
        >
          Enter
        </a>
      </div>
    </div>
  )
}

export default AddTechModal