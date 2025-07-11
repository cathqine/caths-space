
import logot from '../assets/logo-transparent.svg'
import NaviLink from './NaviLink';

export default function NavBar() {
  return (
    <>
      <div className="full h-25 w-full bg-gradient-to-r from-[#0f0136] to-[#730375] text-white top-0 fixed flex flex-row justify-between">
        <div className="fixed top-25 w-full bg-gradient-to-b from-black/40 to-transparent text-white font-semibold rounded p-15"></div>
        <a href="/" className="flex justify-center p-2 md:ml-10">
          <img alt="cath's space logo" src={logot} width="150rem" height="auto" />
        </a>
        <div className="lexend flex flex-row items-center gap-10 sm:gap-20 md:gap-35 lg:gap-55 justify-center w-[65%] mr-8">
          <NaviLink text="Projects" to="/projects" />
          <NaviLink text="About" to="/about" />
          <NaviLink text="Contact" to="/contact" />
        </div>
      </div>
    </>
  );
}