/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const beranda = () => {
  return (
    <div className="">
      <div className="m-auto fixed w-full">
          <Header />
      </div>

      {/* landing page */}
      <div className="landing flex w-full h-screen">
        <div className="left w-[60%] pl-[105px]">
          <div className="wrap  h-full flex flex-col justify-center"> <br/><br/><br/><br/>
            <div className="head text-[110px] font-extrabold leading-[100px]">
              Gaming <br />
              <span className="text-primary">Room</span>
            </div>
            <div className="subhead text-[18px] mt-8 w-[90%]">
            Welcome to our flagship Game Room which will provide an 
            unforgettable gaming experience! Here, we have everything
            you need to fill your free time with fun and challenges. 
            Dont miss this opportunity to explore the amazing world of gaming!
            <br/><br/><br/>
            Special Promo: Exciting Gaming Package: Enjoy a 20% discount for all game rooms this month. Use promo code "gameroom" when ordering.
            Game Tournaments: Enter our weekly tournaments and have a chance to win great prizes. Be the best and show your skills!
            
            </div>
            <div className="btn mt-6">
              <a
                className="font-extrabold bg-primary p-2 px-5 rounded border-red-500 inline-block hover:bg-[#010101]"
                href=""
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
        <div className="right w-[60%], bottom-5">
          <img src="Images/game.jpeg" alt="" />
        </div>
      </div>
      {/* landing page */}

      {/* Footer */}
      <div className="bg-srBlack2 ">
        <Footer />
      </div>
      {/* Footer */}

    </div>
  );
};

export default beranda;
