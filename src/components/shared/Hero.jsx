import React from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
//Icons
const Hero = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      <div className="md:col-span-5 flex items-center justify-center p-16 ">
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl font-bold mb-1">Academit</h1>
          <p className="text-3xl font-medium text-gray-600">
            Programando la{" "}
            <span className="text-3xl font-bold text-blue-300 py-1 px-4 border-4 border-blue-400 relative">
              ÉLITE DEL MAÑANA,
              <RiCheckboxBlankCircleFill className="text-white text-xs absolute -left-3 -top-3 p-1 bg-blue-400 rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-xs absolute -right-3 -top-3 p-1 bg-blue-400 rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-xs absolute -right-3 -bottom-3 p-1 bg-blue-400 rounded-full box-content te" />
              <RiCheckboxBlankCircleFill className="text-white text-xs absolute -left-3 -bottom-3 p-1 bg-blue-400 rounded-full box-content " />
            </span>{" "}
            hoy
          </p>
          <div className="flex items-center mt-8 gap-4">
            <button className="bg-black text-white text-xl py-2 px-8 rounded-lg border-2 border-blue-400 ">
              Ver cursos
            </button>
            <button className="flex items-center justify-start text-left gap-4 py-2 px-8 rounde text-xl ">
              <BiMoviePlay className="bg-gray-200 text-blue-300 p-4 rounded-full box-content"/>
              Ver nuestro video <br /> de presentación
            </button>
          </div>
        </div>
      </div>
      {/* Imagen */}
      <div className="md:col-span-3 flex items-center justify-center">
        <img src="logo.png" className="w-100 h-100 object-cover"  />
      </div>
    </section>
  );
};

export default Hero;
