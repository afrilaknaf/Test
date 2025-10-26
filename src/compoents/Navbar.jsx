import DescriptionIcon from '@mui/icons-material/Description';
import "../Styles/Navbar.css";
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [toggle, setToggle] = useState(false);
  const mobileNav=false
  const navigate = useNavigate();

  useLayoutEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    }

    handleResize(); // Initial run
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function changedisplay() {
    setToggle(!toggle);
    console.log(toggle);
  }

  function demoClose(){
    setToggle(false)
  }

  return (
    <div className='Navbar flex justify-center w-full'>
      <div className="Navbarcontent justify-evenly rounded-4xl bg-transparent flex-wrap text-white  flex items-center w-[1000px] h-15 border-2 border-[#333333]">
        <div className='Navbarone'>
          <h1 className="text-2xl font-bold text-[#39a0ca] flex items-center gap-2">
            <DescriptionIcon sx={{ width: "60px", height: '35px' }} />
            Resume Mint
          </h1>
        </div>

        {isDesktop ? (
          <>
            <div className='Navbaradmin'>
              <button>DashBoard</button>
            </div>
            <div className='Navbartwo flex gap-8'>
              <button onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/signups")}>Signup</button>
              <button>Logout</button>
            </div>
          </>
        ) : (
          <button onClick={changedisplay}>
            <MenuTwoToneIcon sx={{color:"black"}} />
          </button>
        )}
      </div>

      {toggle && <MobileNavbar a={demoClose}/>}
    </div>
  );
}
