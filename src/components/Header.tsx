import { Link } from "react-router-dom";

export const Header = () => {
  return (
    // Barra superior del sitio
    <>
      <header className="bg-blue-700 px-4">
        <div className="flex justify-between max-w-6xl mx-auto">
          <div>
            <Link to="/">
              <img
                src="https://ingco.co/images/logo-transparent.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
