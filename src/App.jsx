import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NorthernForm from "./pages/NorthernForm";
import MTMForm from "./pages/MTMForm";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="font-sans bg-grayBg min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/northern" element={<NorthernForm />} />
        <Route path="/mtm" element={<MTMForm />} />
      </Routes>
    </div>
  );
}
