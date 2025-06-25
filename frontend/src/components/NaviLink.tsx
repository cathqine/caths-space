
interface NaviLinkProps {
  text: string,
  to: string,
}

export default function NaviLink({ text, to }: NaviLinkProps) {
  // const navigate = useNavigate();

  const goTo = (page: string): void => {
    setTimeout(() => {
      window.location.href = page;
    });
  };

  return (
    <div className="h-fit text-lg hover-underline-animation left hover:text-white/80 transition duration-300 ease-in-out" onClick={() => goTo(to)}>
      {text}
    </div>
  );
}