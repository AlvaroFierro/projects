import {
  IconBrandTwitterFilled,
  IconBrandStackoverflow,
  IconBrandGithubFilled,
  IconArticle,
} from '@tabler/icons-react/'

import '../App.css'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="socials">
          <div className="app">
            <a href="https://twitter.com/alvarofierroo" target="_blank" rel="noreferrer">
              <IconBrandTwitterFilled color="aqua" />
            </a>
          </div>
          <div className="app">
            <a href="https://stackoverflow.com/users/14898525/alvaro-fierro" target="_blank" rel="noreferrer">
              <IconBrandStackoverflow />
            </a>
          </div>
          <div className="app">
            <a href="https://github.com/AlvaroFierro" target="_blank" rel="noreferrer">
              <IconBrandGithubFilled />
            </a>
          </div>
          <div className="app">
            <a href="https://alvaro-fierro.hashnode.dev/" target="_blank" rel="noreferrer">
              <IconArticle />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
