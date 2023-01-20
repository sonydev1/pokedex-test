import Pokedex from "../assets/pokedex.png";
import pokebola from "../assets/pokebola.png";

function Header() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center  py-3 bg-red-500 h-60 border-b-[9px] border-[#58585a] ">
        <div className="">
          <img src={Pokedex} className="h-20  " alt="Pokedex" />
        </div>

        <div className="flex gap-4  ">
          <input
            type="text"
            placeholder="id or pokemon name"
            className="px-2 h-10 rounded-lg"
          />
          <button className="bg-[#f9be00] font-medium px-2 h-10 rounded-lg">
            search
          </button>
        </div>

        <div className="absolute top-48 z-10">
          <img src={pokebola} alt="pokebola" className="h-20  " />
        </div>
      </div>
    </>
  );
}
export { Header };
