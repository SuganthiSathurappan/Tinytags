import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Form from "./components/Form";
import Addcart from "./components/Addcart";
import Standart from "./Payment/Standart";
import Terms from "./features/TermsConditions";
import Refund from "./features/Refund";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import Stepper from "./Stepper/StepLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/step/*" element={<Stepper />}>
              <Route path="form" element={<Form />} />
              <Route path="addcart" element={<Addcart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="/pay" element={<Standart />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/term" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;