import { NavLink } from 'react-router-dom'
import logoHeader from '../../assets/logoHeader.png'
import { GoHome } from 'react-icons/go'
import { IoAddCircleOutline } from 'react-icons/io5'
import Styles from './Header.module.css'

function Header() {
  return (
    <header className={Styles.header}>
      <NavLink to='/'>
        <img src={logoHeader} alt='Aluraflix Logo' />
      </NavLink>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? `${Styles.link} ${Styles.linkActive}` : Styles.link
            }
          >
            <GoHome size={30} />
            <p>HOME</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/newvideo'
            className={({ isActive }) =>
              isActive ? `${Styles.link} ${Styles.linkActive}` : Styles.link
            }
          >
            <IoAddCircleOutline size={30} />
            <p>NUEVO VIDEO</p>
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
