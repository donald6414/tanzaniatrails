import { Footer, NavBar } from "./components";
import { Route, Routes } from "react-router-dom";
import {
  A2e,
  Error,
  Home,
  Jobs,
  Privacy,
  Stake,
  Terms,
  GreenGPT,
  Tokenomics,
  SingleTour,
  Homestay,
} from "./pages";
import Volunteer from "./pages/Volunteer";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
import Tour from "./pages/Tour";
import KardTest from "./pages/cardTest";

export default function App() {
  return (
    <div className="">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SingleTour/:id" element={<SingleTour />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/a2e" element={<A2e />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/greengpt" element={<GreenGPT />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/homestay" element={<Homestay />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/test" element={<KardTest />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
