import { FaTwitter, FaGithub } from "react-icons/fa"
const Homepage = () => {
 return (
  <>
   <section className="homepage">
    <div className="overlay">
     <h1>Raynaldo Francis</h1>
     <p>Full Stack Developer</p>

     <ul>
      <li><a href="https://twitter.com/RaBoogiePrime" target="_blank" rel="noopenner noreferrer"> <FaTwitter /> </a></li>
      <li><a href="https://github.com/Raboogie" target="_blank" rel="noopenner noreferrer"> <FaGithub /> </a></li>
     </ul>
    </div>
   </section>
  </>
 );
};
export default Homepage;
