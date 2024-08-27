import "./Faq.css";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      icon: <IoIosArrowDown />,
    },
    {
      id: 2,
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      icon: <IoIosArrowDown />,
    },
    {
      id: 3,
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      icon: <IoIosArrowDown />,
    },
    {
      id: 4,
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      icon: <IoIosArrowDown />,
    },
    {
      id: 5,
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      icon: <IoIosArrowDown />,
    },
  ];
  return (
    <>
      <div className="faq-main">
        <div className="faq-left">
          <div className="faq-left-questions">
            <h2>Got Any Questions ?</h2>
            <p>We have your answers.</p>
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-content">
                <span>{faq.question}</span>
                <span>{faq.icon}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-right">
            <div className="faq-right-first">
                <img src = "https://s3-alpha-sig.figma.com/img/d61b/b1e2/e214d4e735b32264e450165ac1455252?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oEl9XgCRyCCaINYubUTroB1sxxE9coZRsm4VqZ9gMrPFnroFjSF44i8gb~F1fEIfuwL58Ws7P9eUQuRJ07jawIZxTJgH~KIlxzuCbVtM-43PaFQpCDFmk1uvqZtsrnYcLErY1fLT2ZehDeGvFoTCQqHDbkt2EGZS4Dgg18Vv53vJ~tOeQfLZyND6MmQtN0UcBiYyJTPFd6wDwOWlPMiCbX8hGH8RgNVsNOUs89XWjqfbmShRG2jGTzVDhpO7VvtrTe1QXiN-DkMG2YiADtXDR~mZRJw3Rh7Hk7N0QbGrqEAQbTK5xTEDjsTFhtzD2v54kYVnn0VsstN5EOEv6QaqVg__" alt = 'detail' />
            </div>
            <div className="faq-right-second">
                <img src = "https://s3-alpha-sig.figma.com/img/2d0a/4f8e/736c676b8da1cded16d9d10fa5089e18?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZ-Glaw-F1gOn2MHsFyjT0wVDGbXyYHiyTRHIfHmvCayc3CQUuuPiz0TqAIjn1Y1PvArW9VN7zS8HEunnQUnYgmvUBjDGPpYGt~Kfbsp8UWS~QWAINFM2JXiIfYjCEPqNzRKV0a2M9617iloA6P5RJXljrchVpuEQADHKqm4In9jljCgYDeyv6ae0PoLniVQFdKpGtcq0sIFUgIO47aLd58xW-Teoh3hUXryPHoAg8k4deJHGXGp3KoLGkdfASEge6~qPtvgpUUEeOYpt~v3RrtQV2sIAz1aGuFkJLpPnTqfNQBT3R~zBQxCv-0J4oM1KpnZp3on0rE1OT9XHZtuCg__" alt = 'detail' />
            </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
