/* eslint-disable react/no-unescaped-entities */
import Header from "../Components/Header"
import Footer from "../Components/Footer"


const tentang = () => {
  return (
    <div>
      <div className="m-auto fixed w-full">
        <Header />
      </div>
      {/* main content */}
      <div className="bg-srBlue py-[100px] mx-auto container">
        <div className="wrap flex justify-center items-center">
          <div className="left w-[30%]">
            <img src="Images/tentang.jpeg" alt="" />
          </div>
          < div className="right w-[80%]">
            <div className="head text-[50px] font-extrabold italic text-center">ABOUT US <br /> GAME <span className="text-primary">ROOM</span></div>
            <div className="text ml-10 text-justify">
            Game Room is your one-stop destination for an unparalleled gaming 
            adventure. We offer a wide selection of video games, board games, 
            collectibles, and accessories. Whether you're a casual player, a 
            competitive gamer, or a collector, we have something special in store 
            for you. At Game Room, customer satisfaction is our top priority. 
            We're committed to providing top-notch customer service, competitive 
            prices, and a welcoming atmosphere. We believe that the gaming community 
            should be inclusive, diverse, and open to everyone.
            </div>
            <div className="est italic font-bold text-primary text-center mt-5">
              EST.2022
            </div>
          </div>
        </div>
      </div>
      {/* main content */}
      <div className="bg-srBlack2 ">
        <Footer />
      </div>
    </div>
  )
}

export default tentang

