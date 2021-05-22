import { FaEnvelope } from "react-icons/fa"

const Contacts = () => {
 return (
  <>
   <section className="contacts">
    <h1>Contacts Me</h1>
    <ul>
     <li><a href="mailto:RaynaldoFrancis@outlook.com">
      <FaEnvelope /> {" "}
      RaynaldoFrancis@outlook.com</a></li>
    </ul>

   </section>
  </>
 )
}

export default Contacts
