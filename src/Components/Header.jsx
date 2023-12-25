

function Header() {
  return (
    <div className="header container m-auto  flex justify-between h-[60px] items-center ">
        <div className="left text-srWhite font-bold text-[18px]">Game <span className="text-primary font-bold">Room</span> </div>
        <div className="right text-[17px] flex gap-7">
            <a className="font-bold" href="/beranda">Home</a>
            <a className="font-bold" href="/tentang">About Us</a>
            <a className="font-bold" href="/kontak">Contact</a>
        </div>
    </div>
  );
}

export default Header;
