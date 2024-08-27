import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-main-box">
        <div className="about-left">
          <div className="about-section">
            <h1>About Us</h1>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className="home-button">Get Started</button>
          </div>
        </div>
        <div className="about-right">
          <div>
            <span className="form-head">Contact Us</span>
            <div className="input">
              <input type="text" placeholder="Name" className="input-field" />
              <input type="text" placeholder="Select Service" className="input-field"/>
              <input type="number" placeholder="Phone Number" className="input-field"/>
              <input type="text" placeholder="Email Address" className="input-field"/>
              <textarea placeholder="message" style = {{padding : '15px 0'}} className="input-field"/>
              <button className="home-button input-button">Submit Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
