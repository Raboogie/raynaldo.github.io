import { BiMenu } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useState } from "react"
const Menu = () => {
 const [isOpen, setIsOpen] = useState(false)
 return (
  <>
   <div className="menu-btn">
    <button>
     <BiMenu />
    </button>
   </div>
   {isOpen && (
    <header className="header">
     <nav>
      <ul>
       <li>
        <Link to="/"> Homepage </Link>
       </li>
       <li>
        <Link to="/projects"> Projects</Link>
       </li>
       <li>
        <Link to="/cantact-me"> Cantact Me </Link>
       </li>
      </ul>
     </nav>
    </header>
   )}
  </>
 )
}

export default Menu
