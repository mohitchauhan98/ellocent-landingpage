import "./Slider.css";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io"

const Slider = () => {
  const descriptions = [
    {
      id: 1,
      icon: <FaHandHoldingUsd />,
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        id: 2,
        icon: <FaHandHoldingUsd />,
        title: "Lorem Ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 3,
        icon: <FaHandHoldingUsd />,
        title: "Lorem Ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
  ];
  return (
    <>
      <div>
        <div className="slider-heading">
          <h1>How Our Platform Works</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <div>
            <div className="slider-container">
              {descriptions.map((item) => (
                <div key={item.id} className="slider-description">
                  <div className="sliders">
                    <div className="slider-desc-post">
                      <span>{item.icon}</span>
                    </div>
                  </div>
                  <div className="slider-post-desc">
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="gradient-line"></div>
            <div className="gradient-lines"></div>
          </div>
        </div>
        <div>
            <div className="arrow-buttons">
                <button><IoIosArrowBack /></button>
                <button><IoIosArrowForward /></button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
