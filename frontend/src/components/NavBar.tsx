import NavLink from "./NavLink";
import logot from '../assets/logo-transparent.svg'

export default function NavBar() {
  return (
    <>
      <div className="full h-25 w-full bg-gradient-to-r from-[#0f0136] to-[#730375] text-white top-0 fixed flex flex-row justify-between">
        <div className="fixed top-25 w-full bg-gradient-to-b from-black/40 to-transparent text-white font-semibold rounded p-15"></div>

        <a href="#" className="flex justify-center p-2 ml-10">
          <img alt="cath's space logo" src={logot} width="150rem" height="auto" />
        </a>
        <div className="lexend flex flex-row items-center gap-60 justify-center w-[65%] ">
          <NavLink text="Projects"></NavLink>
          <NavLink text="About"></NavLink>
          <NavLink text="Contact"></NavLink>
        </div>
      </div>
    </>
  );
}