import profilePicture from './assets/profile-picture.jpg'
import Info from './Info'
import Footer from './Footer'

function Card() {
  return (
    <div className="card">
      <img src={profilePicture} className='profile-picture' />
      <Info />
      <Footer />
    </div>
  )
}

export default Card;