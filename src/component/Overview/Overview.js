import "./Overview.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Jenny Wilson",
    specialty: "Dental Surgeon",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/053c/d6a1/733f0c0ac33df6084ed58d8164b7487a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3dx8EsXrAlYEXTzOzFyCXXKXVaz48k7SafWhPG1gxrSBziPz5~QSM2Q8U0n9XXOyM8z1MJoXtP3DFj-Ir6Ajvqzosu1Q0gIa2CKuRxHRObU9hWIS4fC0paU343FcTgS8~EPexAw0L~ZQ4hNyIAzCdIwWsbEE1DluKSgib~~YrOv4BkH0Btf5BZuhj8UzgXt1YpRYBxbUzXIPqHJXsn8QkOtczNpk0sHMyt51ZtiAN6LEHdvkjkYJeqI~Kp0HWzHOhT5tbvV3nX9gB39kwOoJKS6sh9BiH19Te9BZWlC3woeqF7JK2zS1qGDdlemj5DwWn1Dw3AL73xd7dvqORsljg__",
  },
  {
    id: 2,
    name: "Dr. Jenny Wilson",
    specialty: "Dental Surgeon",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/053c/d6a1/733f0c0ac33df6084ed58d8164b7487a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3dx8EsXrAlYEXTzOzFyCXXKXVaz48k7SafWhPG1gxrSBziPz5~QSM2Q8U0n9XXOyM8z1MJoXtP3DFj-Ir6Ajvqzosu1Q0gIa2CKuRxHRObU9hWIS4fC0paU343FcTgS8~EPexAw0L~ZQ4hNyIAzCdIwWsbEE1DluKSgib~~YrOv4BkH0Btf5BZuhj8UzgXt1YpRYBxbUzXIPqHJXsn8QkOtczNpk0sHMyt51ZtiAN6LEHdvkjkYJeqI~Kp0HWzHOhT5tbvV3nX9gB39kwOoJKS6sh9BiH19Te9BZWlC3woeqF7JK2zS1qGDdlemj5DwWn1Dw3AL73xd7dvqORsljg__",
  },
  {
    id: 3,
    name: "Dr. Jenny Wilson",
    specialty: "Dental Surgeon",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/053c/d6a1/733f0c0ac33df6084ed58d8164b7487a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3dx8EsXrAlYEXTzOzFyCXXKXVaz48k7SafWhPG1gxrSBziPz5~QSM2Q8U0n9XXOyM8z1MJoXtP3DFj-Ir6Ajvqzosu1Q0gIa2CKuRxHRObU9hWIS4fC0paU343FcTgS8~EPexAw0L~ZQ4hNyIAzCdIwWsbEE1DluKSgib~~YrOv4BkH0Btf5BZuhj8UzgXt1YpRYBxbUzXIPqHJXsn8QkOtczNpk0sHMyt51ZtiAN6LEHdvkjkYJeqI~Kp0HWzHOhT5tbvV3nX9gB39kwOoJKS6sh9BiH19Te9BZWlC3woeqF7JK2zS1qGDdlemj5DwWn1Dw3AL73xd7dvqORsljg__",
  },
];

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-left-box">
        <div className="overview-box">
          <span>Doctor Details</span>
          {doctors.map((doctor) => (
            <div key={doctor.id} className="overview-user">
              <div className="overview-user-img">
                <img
                  className="overview-users"
                  src={doctor.imageUrl}
                  alt="user"
                />
              </div>
              <div className="home-user-details">
                <p>{doctor.name}</p>
                <p>{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="overview-box-second">
          <p>Progress</p>
          <img
            className="overview-bar"
            src="https://docs.stiltsoft.com/tfac/files/cloud/42239751/42240980/1/1564678991000/column.png"
            alt="bar"
          />
        </div>
        <div className="overview-box-third">
          <button>Book Appointment</button>
        </div>
      </div>
      <div className="overview-right-box">
        <div>
          <h2 className="heading">Overview</h2>
          <p className="heading-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="home-button">Learn More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
