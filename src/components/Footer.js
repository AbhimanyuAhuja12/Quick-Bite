
import google_play_logo from '../assets/google-play-logo.svg'
import apple_logo from '../assets/apple-logo.svg'

export const Footer = () => {
  return (
    <div className="flex w-full flex-col"> 
      <div className="flex flex-wrap w-full px-4 py-8 bg-gray-200 justify-center">
        <h1 className="my-2 text-2xl font-bold text-gray-800 mr-[5%]">
          Checkout our app, <br /> For better experience 
        </h1>
        <div className="flex flex-wrap justify-center">
            <button className="my-2 flex items-center whitespace-nowrap justify-center mx-5 bg-black text-white py-2 px-3 rounded-lg text-left shadow-lg hover:bg-[#131313]">
                <img className="w-10 max-h-8 mr-2" src={google_play_logo} alt="Google Play" />
                <div>
                    <p className="text-xs font-semibold">GET IT ON</p>
                    <p className="text-2xl font-medium">Google Play</p>
                </div>
            </button>
            <button className="my-2 flex items-center mx-5 whitespace-nowrap bg-black text-white py-2 pl-3 pr-5 rounded-lg text-left shadow-lg hover:bg-[#131313]">
                <img className="w-10 max-h-10 mr-2" src={apple_logo} alt="App Store" />
                <div>
                    <p className="text-xs font-semibold">DOWNLOAD ON THE</p>
                    <p className="text-2xl font-medium">App Store</p>
                </div>
            </button>
        </div>
      </div>

      <div className="flex flex-wrap bg-black text-white w-full justify-center px-4 py-7">
        <div className="flex m-2 p-5">
          <div className="mx-5 my-2">
            <h1 className="text-3xl font-bold">QuickBite</h1>
            <p className="text-gray-300 mx-1 my-2">© 2024 Technologies Pvt. Ltd</p>
          </div>
          <div className="my-2 mx-5">
            <h1 className="text-xl font-bold my-1">Company</h1>
            <p className="text-gray-300 mx-2 my-1 cursor-pointer">About</p>
            <p className="text-gray-300 mx-2 my-1 cursor-pointer">Carrers</p>
            <p className="text-gray-300 mx-2 my-1 cursor-pointer">Team</p>
          </div>
        </div>
        <div className="flex m-2 p-5">
          <div className="my-2 mx-5">
            <h1 className="text-xl font-bold my-1">Contact Us</h1>
            <p className="text-gray-300 mx-2 my-1 cursor-pointer">Help and Support</p>
            <p className="text-gray-300 mx-2 my-1 cursor-pointer">Partner with us</p>
            <p className="text-gray-300 mx-2 my-1 cursor-pointer">Ride with us</p>
          </div>
          <div className="my-2 mx-5">
            <h1 className="text-xl font-bold my-1">Legal</h1>
            <p className="text-gray-300 mx-2 my-1 cursor-pointer">Terms and Condition</p>
            <p className="text-gray-300 mx-2 my-1 cursor-pointer">Cookie Policy</p>
            <p className="text-gray-300 mx-2 my-1 cursor-pointer">Privacy Policy</p>
            <p className="text-gray-300 mx-2 my-1 cursor-pointer">Investor Relations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Footer;
