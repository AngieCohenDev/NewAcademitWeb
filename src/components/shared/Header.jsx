import React, {useState} from "react";
//Icons
import { RiMenuFoldFill, RiCloseCircleFill } from "react-icons/ri";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl-1/6 text-center font-bold p-1">
        <h1 className="text-3xl text-cyan-500">ACADEMIT</h1>
      </div>
      <nav className={`fixed text-lg bg-white  text-cyan-500 w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center xl:justify-end gap-10 transition-all duration-500 z-50`}>
        <a href="#">Sobre Nosotros</a>
        <a href="#">Servicios</a>
        <a href="#">Cursos</a>
        <a href="#">¿Por qué elegirnos?</a>
        <a href="#">Blog</a>
        <a href="#">Contacto</a>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden text-2xl p-2">
      {showMenu ? <RiCloseCircleFill /> :<RiMenuFoldFill />}
      </button>
    </header>
  );
};

export default Header;
