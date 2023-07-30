import { ConnectWallet } from "@thirdweb-dev/react";
import { Footer, NavBar } from "./components";
import { Route, Routes } from "react-router-dom";
import {
  A2e,
  Error,
  Home,
  Jobs,
  Marketplace,
  Privacy,
  Stake,
  Terms,
  GreenGPT,
  Tokenomics,
} from "./pages";

export default function App() {
  return (
    <div className="">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/a2e" element={<A2e />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/greengpt" element={<GreenGPT />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
