import NavLink from "./NavLink";
import logot from '../assets/logo-transparent.svg'

export default function NavBar() {
  return (
    <>
      <div className="full bg-gradient-to-r from-[#0f0136] to-[#730375] text-white top-0 fixed h-35 w-full flex flex-row justify-between">
        <div className="fixed top-35 w-full bg-gradient-to-b from-black/40 to-transparent text-white font-semibold rounded p-15"></div>
        <div className="flex justify-center">
          <img alt="cath's space logo" src={logot} width="300rem" height="auto" />
        </div>
        <div className="lexend flex flex-row items-center gap-65 justify-center w-[65%]">
          <NavLink text="Projects"></NavLink>
          <NavLink text="About"></NavLink>
          <NavLink text="Contact"></NavLink>
        </div>
      </div>
    </>
  );
}