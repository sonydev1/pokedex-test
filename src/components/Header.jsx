import Pokedex from "../assets/pokedex.png";
import pokebola from "../assets/pokebola.png";


function Header() {
  
  

  

  return (
    <>
      <div className="grid grid-cols-1 justify-items-center  py-3 bg-red-500 h-72 border-b-[9px] border-[#58585a] ">
        <img src={Pokedex} className="h-20 lg:h-24 " alt="Pokedex" />

        <div className="flex gap-4  h-11">
          <input
            type="text"
            placeholder="Nombre del pokemon"
            className="px-2 h-10 rounded-lg"
          />
          <button
            className="bg-yellow-500 px-2 h-10 rounded-lg"
            
          >
            search
          </button>
        </div>

        <div className="absolute top-56">
          <img src={pokebola} alt="pokebola" className="h-28  transition-all" />
        </div>
      </div>

      
    </>
  );
}
export { Header };
