import profilePicture from '../assets/business-me.png'
import '../App.css'

export default function Profile() {
  return (
    <>
      <header>
        <img src={profilePicture} alt="Profile" className="profile card" />
      </header>
    </>
  )
}
