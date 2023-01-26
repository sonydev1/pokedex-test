import grass from "../assets/grass.png";
import poison from "../assets/poison.png";
import normal from "../assets/normal.png";
import fire from "../assets/fire.png";
import water from "../assets/water.png";
import electric from "../assets/electric.png";
import ice from "../assets/ice.png";
import fighting from "../assets/fighting.png";
import ground from "../assets/ground.png";
import flying from "../assets/flying.png";
import psychic from "../assets/psychic.png";
import bug from "../assets/bug.png";
import rock from "../assets/rock.png";
import ghost from "../assets/ghost.png";
import dark from "../assets/dark.png";
import dragon from "../assets/dragon.png";
import steel from "../assets/steel.png";
import fairy from "../assets/fairy.png";
import none from "../assets/1.png";

export function iconType(icon) {
  switch (icon) {
    case "grass":
      icon = grass
      break;
    case "poison":
      icon = poison
      break;
    case "normal":
      icon = normal
      break;
    case "fire":
      icon = fire
      break;
    case "water":
      icon = water
      break;
    case "electric":
      icon = electric
      break;
    case "ice":
      icon = ice
      break;
    case "fighting":
      icon = fighting
      break;
    case "ground":
      icon = ground
      break;
    case "flying":
      icon = flying
      break;
    case "psychic":
      icon = psychic
      break;
    case "bug":
      icon = bug
      break;
    case "rock":
      icon = rock
      break;
    case "ghost":
      icon = ghost
      break;
    case "dark":
      icon = dark
      break;
    case "dragon":
      icon = dragon
      break;
    case "steel":
      icon = steel
      break;
    case "fairy":
      icon = fairy
      break;
    default:
      icon = none
      break;
  }
  return icon;
}

export function TypeColor(color) {
  switch (color) {
    case "grass":
      color = "#a8ff98";
      break;
    case "poison":
      color = "#d6a2e4";
      break;
    case "normal":
      color = "#dcdcdc";
      break;
    case "fire":
      color = "#ffb971";
      break;
    case "water":
      color = "#8cc4e2";
      break;
    case "electric":
      color = "#ffe662";
      break;
    case "ice":
      color = "#8cf5e4";
      break;
    case "fighting":
      color = "#da7589";
      break;
    case "ground":
      color = "#e69a74";
      break;
    case "flying":
      color = "#bbc9e4";
      break;
    case "psychic":
      color = "#ffa5da";
      break;
    case "bug":
      color = "#bae05f";
      break;
    case "rock":
      color = "#C9BB8A";
      break;
    case "ghost":
      color = "#8291e0";
      break;
    case "dark":
      color = "#8e8c94";
      break;
    case "dragon":
      color = "#88a2e8";
      break;
    case "steel":
      color = "#9fb8b9";
      break;
    case "fairy":
      color = "#fdb9e9";
      break;
    default:
      color = "#ffffff";
      break;
  }
  return color;
}
