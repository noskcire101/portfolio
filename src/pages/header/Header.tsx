import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="z-50 sticky top-0 ... bg-[#000] min-w-[345px] ">
        <div className="max-w-[1630px] flex flex-wrap items-center  mx-auto  pb-0.5 pt-2 pl-[10px] pr-[70px] md:px-[75px] xl:px-[6%] 2xl:px-[5%]">
          <Link to="/">
            <div className="cursor-pointer inline-flex mr-[10px] items-center">
              <button className="flex text-sm bg-gray-800 rounded-full md:mr-0 ">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/mylogo%2Fmylogowhite.png?alt=media&token=ed33baad-63c3-48ae-873d-220b5860dd43"
                />
              </button>
              <p className="text-white text-lg ml-3 mr-4 block font-bold lg:block ">
                Erickson
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
