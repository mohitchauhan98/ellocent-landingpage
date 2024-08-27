import About from "./component/About/About";
import ClinicDetails from "./component/ClinicDetails/ClinicDetails";
import Faq from "./component/FAQ/Faq";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Overview from "./component/Overview/Overview";
import PatientDetails from "./component/PatientDetails/PatientDetails";
import Slider from "./component/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Overview />
      <ClinicDetails />
      <PatientDetails />
      <Slider />
      <About />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
