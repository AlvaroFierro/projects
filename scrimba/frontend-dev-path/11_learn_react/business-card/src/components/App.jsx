import '../App.css'
import Profile from './Profile'
import Description from './Description'
import Links from './Links'
import Content from './Content'
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="card container">
        <Profile />
        <Description />
        <Links />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
