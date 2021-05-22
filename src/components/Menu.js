import { BiMenu } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Navbar } from "../data/Navbar"

const Menu = () => {
 const [isOpen, setIsOpen] = useState(false)
 const [links, setLinks] = useState(Navbar)

 return (
  <>
   <div className="menu-btn">
    <button onClick={() => setIsOpen(!isOpen)}>
     <BiMenu />
    </button>
   </div>

   <header className={`${isOpen ? "header open" : "header"}`}>
    <nav>
     <ul>
      {links.map(({ id, title, url }) => {

       return (
        <li key={id} onClick={() => setIsOpen(false)}>
         <Link to={url}>{title}</Link>
        </li>
       )
      })}
     </ul>
    </nav>
   </header>
  </>
 )
}

export default Menu
