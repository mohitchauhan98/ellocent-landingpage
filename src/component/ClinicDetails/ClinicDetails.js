import "./ClinicDetails.css";
import { IoCheckmarkOutline } from "react-icons/io5";
import { GiPostOffice } from "react-icons/gi";
import { FaMoneyBill } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const ClinicDetails = () => {
  const descriptions = [
    {
      id: 1,
      icon: <GiPostOffice />,
      title: "Lorem Ipsum",
      description:
        "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
    },
    {
      id: 2,
      icon: <FaMoneyBill />,
      title: "Dolor Sit Amet",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 3,
      icon: <FaMoneyBill />,
      title: "Dolor Sit Amet",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 4,
      icon: <FaUser />,
      title: "Dolor Sit Amet",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];
  return (
    <>
      <div className="clinic-details">
        <div className="details-left">
          <div className="details">
            <div className="details-card">
              <span className="check">
                <IoCheckmarkOutline color="white" />
              </span>
              <span>Regular Checkup</span>
            </div>
            <div className="details-card-second">
              <span className="check">
                <IoCheckmarkOutline color="white" />
              </span>
              <div>
                <p>84k +</p>
                <span>Happy Patients</span>
              </div>
            </div>
          </div>
          <div className="clinic-mobile">
            <img
              className="clinic-details-mobile"
              src="https://s3-alpha-sig.figma.com/img/2d0a/4f8e/736c676b8da1cded16d9d10fa5089e18?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZ-Glaw-F1gOn2MHsFyjT0wVDGbXyYHiyTRHIfHmvCayc3CQUuuPiz0TqAIjn1Y1PvArW9VN7zS8HEunnQUnYgmvUBjDGPpYGt~Kfbsp8UWS~QWAINFM2JXiIfYjCEPqNzRKV0a2M9617iloA6P5RJXljrchVpuEQADHKqm4In9jljCgYDeyv6ae0PoLniVQFdKpGtcq0sIFUgIO47aLd58xW-Teoh3hUXryPHoAg8k4deJHGXGp3KoLGkdfASEge6~qPtvgpUUEeOYpt~v3RrtQV2sIAz1aGuFkJLpPnTqfNQBT3R~zBQxCv-0J4oM1KpnZp3on0rE1OT9XHZtuCg__"
              alt="mobile"
            />
          </div>
        </div>
        <div className="details-right">
          <div>
            <p className="heading-details">
              The <span className="highlight">Benefits</span> of Utilizing
              Webapp for clinics
            </p>
          </div>
          <div>
            {descriptions.map((item) => (
              <div key={item.id} className="description">
                <div className="details-post">
                  <span>{item.icon}</span>
                </div>
                <div className="details-post-desc">
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicDetails;
