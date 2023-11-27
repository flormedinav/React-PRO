/*

? EXTENSIÓN X (jsx tsx)
Sirve para indicarle a VC y snipers que es un componente de react que devuelve un JSX.

Si no le ponemos la "x" entonces serán archivos que no devuelvan un jsx como funciones, tipados, interfaces. 

? DESTRUCTURACIÓN
Cuando nosotros destructuramos una props de un componente y le queremos asignar un tipo para typescript no podemos hacerlo seguido de los : porque lo que estamos indicando en realidad es que initialValue sea renombrado a number por ejemplo.  

*/

import React, { useState } from 'react';

//*Estamos cambiando el nombre de la variable.
export const Counter = ({ initialValue: number = 0 }) => {
  const [counter, setCounter] = useState(() => number);

  const handleClick = () => {
    setCounter((preState) => preState + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

/*
* Lo correcto sería crear la interface por fuera y reasignar a las props. 

Si a continuación de la propiedad de la interface le colocamos el ? estamos indicando que es una propiedad opcional.
*/

interface CounterProps {
  initialValue?: number;
}

export const Counter2 = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(() => initialValue);

  const handleClick = () => {
    setCounter((preState) => preState + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

/*
? useEffect
Consta de la siguiente estructura, una función callback y un array de dependencias (que puede estar o no dependiendo lo que se desee).

Además dentro del useEffect puede haber un return seguido de una función que lo que hace es que una vez que se rompa el componente es decir que salga de la pantalla se ejecute (suele usarse para limpiarlo como cleanup)

  useEffect(() => {
    
  }, []);

  useEffect(() => {
  // Código del efecto

  // Función de limpieza (opcional)
  return () => {
    // Código de limpieza
  };
}, [dependencies]);

? Estilado de console.log

Podemos añadirle estilos al console.log de la siguiente manera:

console.log(
  '%cSe llegó al valor máximo',
  'color:red; background-color: black;'
);

Antes del mensaje añadimos el %c y luego como segundo parámetros pasamos las propiedades de css.
*/
