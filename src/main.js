//ES6+ - Módulo 02 - Import/Export

//Exercício 01
import ClasseUsuario, {idade as IdadeUsuario} from './functions';

ClasseUsuario.info();

const divElement = document.querySelector("div");
const divText = document.createTextNode(IdadeUsuario);

divElement.appendChild(divText);





