/* eslint-disable no-unused-vars */
import ContactPage from "../Components/ContactPage";
import { MessageProvider } from "../Components/MessageContext";
import MessageCounter from "../Components/MessageCounter";
import StaticInfo from "../Components/StaticInfo";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const kontak = () => {
  const gradientStyle = {
    background: 'linear-gradient(116deg, #F39D19 59.54%, #F1F3F2 0%)',
  };
  return (
    <div className="App">
      <Header/>
    <MessageProvider>
      <ContactPage />
      <MessageCounter />
      <StaticInfo />
    </MessageProvider>
      <Footer/>
  </div>
  )
}

export default kontak
