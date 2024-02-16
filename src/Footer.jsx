import GithubIcon from "./assets/GitHub Icon.png";
import LinkedinIcon from "./assets/Linkedin Icon.png";
import './styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/eslam-salem-3064021aa/"
        target="_blank"
      >
        <img src={LinkedinIcon} />
      </a>
      <a
        href="https://github.com/EslamSalem/medicinal-product#readme"
        target="_blank"
      >
        <img src={GithubIcon} />
      </a>
    </div>
  );
}

export default Footer;
