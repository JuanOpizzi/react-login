//* Obtengo el JSON del server levantado con JSON-server
//* Esta funcion devuelve una promise, entonces cuando el middlware redux-promises
//* detecta que lo que estamos pasando en nuestro payload es una promise, ejecuta
//* la promise, y cuando obtiene el resultado, genera una accion que se termina de
//* resolver y la toma el reducer.
//* Es decir: detiene la accion hasta obtener el resultado del servidor y con el resultado
//* continua e invoca al reducer en handleActions
export const apiGet = (url) => () => fetch(url).then(v => v.json());