import logo from "../assets/ignite simbol.svg";

export function Header() {
  return (
    <header className="flex justify-center items-center bg-backgroundHeader rounded-b-2xl font-bold py-5 ">
      <div className="flex gap-2">
        <img className="w-8" src={logo} alt="Logo Ignite" />
        <a href="#">
          <h1>Dev Feed</h1>
        </a>
      </div>
    </header>
  );
}
