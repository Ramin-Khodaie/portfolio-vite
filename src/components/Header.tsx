import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaRobot } from 'react-icons/fa'
function Header() {
  return (
    <nav className='p-4 sticky top-0 bg-[--black] border-b border-b-[--aqua] text-white'>
      <ul className='flex m-0 p-0 flex-row flex-wrap gap-4 justify-center items-center'>
        <li className='flex gap-2 flex-1 text-center'>
          <FaRobot className='text-[150%]' />
          <Link  to="/">
            Ramin Khodaie
          </Link>

        </li>
        <li><Link className='block' to="#projects">Projects</Link></li>
        <li><Link className='block' to="/about">About</Link></li>
        <li><Link className='block' to="/contact">Contact</Link></li>
        <li><Link className='block' target='_blank' to="https://www.linkedin.com/in/ramin-khodaie">
          <FaLinkedin />
          <span className="sr-only">Linkedin</span>
        </Link></li>
        <li><Link className='block' target="_blank" to="https://github.com/Ramin-Khodaie">
          <FaGithub />
          <span className="sr-only">Github</span>
        </Link></li>
        <li><Link className="text-white bg-[--magenta] block px-4 py-2 rounded-[5px] "
          to="https://www.dropbox.com/s/3z2hm5gu3v2lrfy/JenKramerCV.pdf?dl=0">Resume</Link></li>
      </ul>
    </nav>
  )
}

export default Header