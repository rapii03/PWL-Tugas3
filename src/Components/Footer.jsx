
const Footer = () => {
    return (
    <div className="container m-auto py-[50px]">
        <div className="wrap flex flex-col gap-[30px]">
            <div className="nav flex gap-3 justify-center">
            <a href="/" className={`text-lg ${location.pathname === '/' ? 'font-semibold' : ''} text-yellow`}>Beranda</a>
                <a href="/tentang" className={`text-lg ${location.pathname === '/tentang' ? 'font-semibold' : ''} text-yellow`}>About Us</a>
                <a href="/kontak" className={`text-lg ${location.pathname === '/kontak' ? 'font-semibold' : ''} text-yellow`}>Kontak</a>
            </div>
            <div className="text-center">Copyright 2023 All Right Reserve <br/> Built by Rafi Ramadhan Pratama | rapps-code</div>
        </div>
    </div>
    )
}

export default Footer