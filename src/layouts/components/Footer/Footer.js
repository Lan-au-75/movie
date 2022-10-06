import images from '~/assets/images';

function Footer() {
    return (
        <footer className=" flex items-center justify-center bg-primary max-w-[100%] w-[100vw] max-h-[360px] h-full">
            <nav className="flex py-[80px] ">
                <div className="max-w-[300px] mr-[40px]">
                    <div className="flex justify-end mb-8">
                        <img className="w-[130px] h-[94px]" src={images.logoFooter} alt="logoFooter" />
                    </div>
                    <a
                        href="/"
                        className="px-[16px] py-[8px] border-[2px] border-solid border-white bg-white 
                        rounded-md transition-all ease-linear text-[rgb(1,180,228)] text-[18px]"
                    >
                        Hi riotgamelolgare@gmail.com!
                    </a>
                </div>

                <div className="ml-[40px]">
                    <h3 className="text-[20px] font-bold text-white leading-6 uppercase whitespace-nowrap ">
                        The Basics
                    </h3>
                    <ul className="leading-7  text-white max-w-[260px] whitespace-nowrap overflow-hidden text-ellipsis text-[17px] font-normal ">
                        <li>About TMDB</li>
                        <li>Contact Us</li>
                        <li>Support Forums</li>
                        <li>API</li>
                        <li>System Status</li>
                    </ul>
                </div>
                <div className="ml-[40px]">
                    <h3 className="text-[20px] font-bold text-white leading-6 uppercase whitespace-nowrap ">
                        Get Involved
                    </h3>
                    <ul className="leading-7  text-white max-w-[260px] whitespace-nowrap overflow-hidden text-ellipsis text-[17px] font-normal ">
                        <li>Contribution Bible</li>
                        <li>Add New Movie</li>
                        <li>Add New TV Show</li>
                    </ul>
                </div>
                <div className="ml-[40px]">
                    <h3 className="text-[20px] font-bold text-white leading-6 uppercase whitespace-nowrap ">
                        Community
                    </h3>
                    <ul className="leading-7  text-white max-w-[260px] whitespace-nowrap overflow-hidden text-ellipsis text-[17px] font-normal ">
                        <li>Guidelines</li>
                        <li>Discussions</li>
                        <li>Leaderboard</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className="ml-[40px]">
                    <h3 className="text-[20px] font-bold text-white leading-6 uppercase whitespace-nowrap ">Legal</h3>
                    <ul className="leading-7  text-white max-w-[260px] whitespace-nowrap overflow-hidden text-ellipsis text-[17px] font-normal ">
                        <li>Terms of Use</li>
                        <li>API Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
