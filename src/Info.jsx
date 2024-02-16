import MailIcon from "./assets/Mail.png";
import "./styles/Info.css";

function Info() {
  return (
    <div className="info">
      <div className="contact">
        <h2 className="contact-name">Eslam Salem</h2>
        <p className="contact-position">Frontend Developer</p>
        <a class="btn" href="mailto:eslamsalem2.es@gmail.com" target="_blank">
          <img src={MailIcon} />
          Email
        </a>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>
          Passionate Frontend Developer eager to refine design skills and build
          intuitive, user-friendly experiences. Strong foundation in HTML, CSS,
          JavaScript, React & Drupal, honed through coursework & internship at
          Efficient Vision.
        </p>
        <h3>Interests</h3>
        <p>
          Music, Guitar, Working out, Weight lifting, Video Games, Movies & TV
          Shows.
        </p>
      </div>
    </div>
  );
}

export default Info;
