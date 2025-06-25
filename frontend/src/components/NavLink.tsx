interface NavLinkProps {
  text: string,
}

export default function NavLink({ text }: NavLinkProps) {
  return (
    <div className="h-fit text-lg hover-underline-animation left hover:text-white/80 transition duration-300 ease-in-out .">
      {text}
    </div>
  );
}