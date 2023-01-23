import Pokedex from "../assets/pokedex.png";


function Header() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center  py-3  shadow-lg">
        <img src={Pokedex} className="h-14 mb-5 " alt="Pokedex" />

        <div className="flex gap-4  h-11">
          <input
            type="text"
            placeholder="Nombre del pokemon"
            className="px-2 h-10 rounded-lg"
          />
          <button className="bg-yellow-500 px-2 h-10 rounded-lg">search</button>
        </div>

        
      </div>
    </>
  );
}
export { Header };
