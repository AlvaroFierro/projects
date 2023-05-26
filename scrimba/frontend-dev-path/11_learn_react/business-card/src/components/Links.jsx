import '../App.css'
import { IconMailFilled, IconBrandLinkedin } from '@tabler/icons-react/'

export default function Links() {
  return (
    <>
      <div className="links">
        <div className="link">
          <a href="mailto:business.afierro@gmail.com" id="email">
            <span>
              <IconMailFilled />
            </span>
            Email
          </a>
        </div>
        <div className="link">
          <a href="https://www.linkedin.com/in/alvaro-fierro/" id="linkedin" target="_blank" rel="noreferrer">
            <span>
              <IconBrandLinkedin />
            </span>
            LinkedIn
          </a>
        </div>
      </div>
    </>
  )
}
