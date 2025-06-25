interface NavLinkProps {
  text: string,
}

export default function NavLink({ text }: NavLinkProps) {
  return (
    <div className="h-fit text-2xl">
      {text}
    </div>
  );
}