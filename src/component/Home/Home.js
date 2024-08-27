import React from "react";
import "./Home.css";
import { CiStar } from "react-icons/ci";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="home-page-first">
          <div>
            <p className="homepara-first">
              Empowering Clinics to Scale <br />
              New Heights in <span className="highlight">Healthcare.</span>
            </p>
            <p className="homepara-second">
              Discover a seamless, efficient, and user-friendly platform
              designed to enhance clinic operations, empower doctors, and
              provide patients with the best care possible. Join us in
              transforming the future of healthcare today.
            </p>
            <button className="home-button">Get Started</button>
          </div>
        </div>
        <div className="home-page-second">
          <div>
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
          </div>
          <div className="home-laptop-img">
            <img
              className="home-laptop"
              src="https://s3-alpha-sig.figma.com/img/ac66/5ce0/c38c6d721fe5caf688c90538bc1204c7?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EM1G83t6fIbQgTjTgsKR0DIBESj~Tb4M7Ha7kc8o-6DZSZk9mclVAgUY9ICypR6-sOiNpECU31zH5e0y8kPVUtqPFxLbuVQe0rxcnwHkcSYvw7i~X17i8L4BdTWCKQ6fqWui2XcW1n5-8ACKCuiP8Axi4yIbURs5kCv8aqOMrhIkbeYPZE9WbHXBdgGTtACOeVQ2ZzMEzTnOBADD0D6Ri8nTOQtZFA81aOFCs1vCYviD1pQQNppJSjOqL0EQVQeMnQvA7s1cldZ-KcAxdH3yCUefy~s-1R9ioknyg69dS2PN1iGFe0Ci4ToC32CGfuWALZpYI3pNgsHogM8X1TWA6Q__"
              alt="laptop"
            />
          </div>
          <div className="home-mobile-img">
            <img
              className="home-mobile"
              src="https://s3-alpha-sig.figma.com/img/2d0a/4f8e/736c676b8da1cded16d9d10fa5089e18?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZ-Glaw-F1gOn2MHsFyjT0wVDGbXyYHiyTRHIfHmvCayc3CQUuuPiz0TqAIjn1Y1PvArW9VN7zS8HEunnQUnYgmvUBjDGPpYGt~Kfbsp8UWS~QWAINFM2JXiIfYjCEPqNzRKV0a2M9617iloA6P5RJXljrchVpuEQADHKqm4In9jljCgYDeyv6ae0PoLniVQFdKpGtcq0sIFUgIO47aLd58xW-Teoh3hUXryPHoAg8k4deJHGXGp3KoLGkdfASEge6~qPtvgpUUEeOYpt~v3RrtQV2sIAz1aGuFkJLpPnTqfNQBT3R~zBQxCv-0J4oM1KpnZp3on0rE1OT9XHZtuCg__"
              alt="mobile"
            />
          </div>
          <div className="home-star">
            <span>
              <CiStar />
            </span>
            <span>Easy Appointment Booking</span>
          </div>
          <div className="home-user-fill">
            <div className="home-user-img">
              <img
                className="home-user"
                src="https://s3-alpha-sig.figma.com/img/053c/d6a1/733f0c0ac33df6084ed58d8164b7487a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3dx8EsXrAlYEXTzOzFyCXXKXVaz48k7SafWhPG1gxrSBziPz5~QSM2Q8U0n9XXOyM8z1MJoXtP3DFj-Ir6Ajvqzosu1Q0gIa2CKuRxHRObU9hWIS4fC0paU343FcTgS8~EPexAw0L~ZQ4hNyIAzCdIwWsbEE1DluKSgib~~YrOv4BkH0Btf5BZuhj8UzgXt1YpRYBxbUzXIPqHJXsn8QkOtczNpk0sHMyt51ZtiAN6LEHdvkjkYJeqI~Kp0HWzHOhT5tbvV3nX9gB39kwOoJKS6sh9BiH19Te9BZWlC3woeqF7JK2zS1qGDdlemj5DwWn1Dw3AL73xd7dvqORsljg__"
                alt="user"
              />
            </div>
            <div className="home-user-details">
              <p>Dr.Jenny Wilson</p>
              <p>Dental Surgeon</p>
              <span className="home-user-star">
                <CiStar color="gold" />
                <span>4.8</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
