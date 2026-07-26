import "./assets/app.css";
import Header from "./invento_components/Header";
import Form from "./invento_components/Form";
import Content from "./invento_components/Content";
import Footer from "./invento_components/Footer";
import { VibeProductProvider } from "./context/VibeProductContext";

const Invento = () => {
  return (
    <div className="container">
      <VibeProductProvider>
        <Header />
        <Form />
        <Content />
        <Footer />
      </VibeProductProvider>
    </div>
  );
};

export default Invento