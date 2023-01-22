import React from "react";

import { Statistics } from "./Statistics";

function Hability({ point, color }) {
  let ps = point[0];
  if (ps >= 100) {
    ps = 100;
  }
  let ataque = point[1];
  if (ataque >= 100) {
    ataque = 100;
  }
  let defensa = point[2];
  if (defensa >= 100) {
    defensa = 100;
  }
  let atEspe = point[3];
  if (atEspe >= 100) {
    atEspe = 100;
  }
  let desfEspe = point[4];
  if (desfEspe >= 100) {
    desfEspe = 100;
  }
  let velocidad = point[5];
  if (velocidad >= 100) {
    velocidad = 100;
  }

  return (
    <>
      <div className="mt-4  w-full gap-2">
        <Statistics color={color} name="PS" point={point[0]} value={ps} />

        <Statistics
          color={color}
          name="Ataque"
          point={point[1]}
          value={ataque}
        />
        <Statistics
          color={color}
          name="Desensa"
          point={point[2]}
          value={defensa}
        />

        <Statistics
          color={color}
          name="At.Especial"
          point={point[3]}
          value={atEspe}
        />

        <Statistics
          color={color}
          name="Def.Especial"
          point={point[4]}
          value={desfEspe}
        />

        <Statistics
          color={color}
          name="Velocidad"
          point={point[5]}
          value={velocidad}
        />
      </div>
    </>
  );
}

export { Hability };
