import {
  FaLinkedin,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <div className='contact-list'>
          <a className="contact-link" href="https://www.linkedin.com/in/justinenangcas" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" />
            <span className="contact-text">Justine Jay Nangcas</span>
          </a>

          <a className="contact-link" href="https://www.facebook.com/justine.nangcas" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="contact-icon" />
            <p><span className="contact-text">Justine Nangcas</span><br/>
            <span className="contact-text">Justine jay Nangcas</span>
            </p>
          </a>

          <a className="contact-link" href="https://www.instagram.com/justinenangcas" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="contact-icon" />
            <span className="contact-text">jstn_ngcs</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;