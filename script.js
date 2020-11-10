// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter". (No hace falta usar filter. Podemos recorrerlo con cualquier bucle)
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  
  let userList = new Array();
  let spanishUser = new Array();


  //FUNCIONES

  //función para crear y devolver usuario
  function createUser(nombre, pais, dinero, premium) {
    //objeto usuario
    let user = new Object();
    //cargamos objeto usuario
    user.name = nombre;
    user.country = pais;
    user.money = dinero;
    user.premiumAccount = premium;
    return user;
  }

  //función que almacena usuarios en un array de usuarios
  function createUsers() {
    //llenamos el array de usuarios
    userList.push(createUser("usuario1", "spain", 199, true));
    userList.push(createUser("usuario2", "france", 0, false));
    userList.push(createUser("usuario3", "spain", 537, false));
    userList.push(createUser("usuario4", "italy", 1004, true));
    userList.push(createUser("usuario5", "spain", 250, false));
    userList.push(createUser("usuario6", "ireland", 799, true));
    userList.push(createUser("usuario7", "spain", 3345, false));
  }

  //función que filtra usuarios segun pais y dinero y devuelve un nuevo array con esos usuarios
  function filterUsers(userList) {
    //recorremos userList
    for (let i = 0; i < userList.length; i++) {
      //comprobamos el pais y el dinero y almacenamos los que cumplan la condicion
      //en un nuevo array
      if (userList[i].country === "spain" && userList[i].money > 200) {
        spanishUser.push(userList[i]);
      }
    }
    return spanishUser;
  }
  
  //llenamos el array de usuarios llamando a la función createUsers
  createUsers();

  //inicializamos el array spanishUser
  spanishUser = filterUsers(userList);

  //imprimimos en consola los arrays
  console.log(userList);
  console.log(spanishUser);
}
