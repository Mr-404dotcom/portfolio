import heroImage from "../../assets/images/0ee3d15a-6a57-4a72-8529-7a145811f189.jpg";

function Home() {
  return (
    <section className="home" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="text-4xl font-bold mb-4" > <span>Full Stack Developer</span></h1>

          <p className="text-lg mb-6">
           I develop modern and responsive web applications using React, JavaScript, HTML, and CSS, with a focus on clean design, usability, and performance. 
          </p>

          <a href="#projects" className="btn">
            View My Projects
          </a>
        </div>

        <div className="hero-image-wrapper">
          <img className="rounded-full border-4 border-black  shadow-lg" src={heroImage} alt="Justine Jay Nangcas" />
        </div>
      </div>
    </section>
  );
}

export default Home;