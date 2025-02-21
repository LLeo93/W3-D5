/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log('ESERCIZIO A', sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log('ESERCIZIO B', random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  nome: 'Libanio',
  cognome: 'Leoncini',
  età: 31,
};
console.log('ESERCIZIO C', me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.età;
console.log('ESERCIZIO D', me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ['HTML', 'CSS', 'JS'];
console.log('ESERCIZIO E', me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills[3] = 'PHP';
console.log('ESERCIZIO F', me);

//OPPURE
//me.skills.push('php');
//console.log('ESERCIZIO F', me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log('ESERCIZIO G', me);
// anche con slice e con lenght ma questo è più comodo e veloce
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

let numeroRandomDaUnoaSei = dice();
console.log('ESERCIZIO 1', numeroRandomDaUnoaSei);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whiIsBigger = function (n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};
let bigger = whiIsBigger(15, 9);
console.log('ESERCIZIO 2', bigger);
bigger = whiIsBigger(15, 98);
console.log('ESERCIZIO 2', bigger);
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(str) {
  return str.split();
}

// Esempio di utilizzo:
let miaStringa = 'Ciao Libanio come stai';
console.log('ESERCIZIO 3', miaStringa);
let parole = splitMe(miaStringa);
console.log('ESERCIZIO 3', parole);
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (srt1, booleano) {
  if (booleano === true) {
    return srt1.slice(1);
  } else {
    return srt1.slice(0, -1);
  }
};
let provaDelete = deleteOne('ciao', true);
console.log('ESERCIZIO 3', provaDelete);
let provaDelete2 = deleteOne('ciao', false);
console.log('ESERCIZIO 3', provaDelete2);
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
let onlyLetters = function (srt3) {
  return srt3.replace(/[0-9]/g, '');
};
const soloLettere = onlyLetters('ho 1 cane a casa e 3 gatti ');
console.log('ESERCIZIO 5', soloLettere);
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (email1) {
  const parametriMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return parametriMail.test(email1);
};
let mail2 = isThisAnEmail('liba.leoncini@gmail.com');
console.log('ESERCIZIO 6', mail2);
let mail3 = isThisAnEmail('liba.leoncinigmail.com');
console.log('ESERCIZIO 6', mail3);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  let day = [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
  ];
  const oggi = new Date();
  const indiceGiorno = oggi.getDay();
  return day[indiceGiorno];
};
let todayIs = whatDayIsIt();
console.log('ESERCIZIO 7', todayIs);
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = function (num) {
  let sum = 0;
  let values = [];

  for (let i = 0; i < num; i++) {
    let roll = dice();
    sum += roll;
    values.push(roll);
  }

  return {
    sum: sum,
    values: values,
  };
};
let risultato = rollTheDices(3);
console.log('ESERCIZIO 8', risultato);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (data1) {
  const data = new Date();
  const diffInMs = data.getTime() - data1.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  return diffInDays;
};
const myDate = new Date('2023-06-19'); // Data di esempio: 26 ottobre 2023
const daysPassed = howManyDays(myDate);
console.log(`ESERCIZIO 9  Sono passati ben ${daysPassed} giorni da allora `);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function (birthday) {
  const today = new Date();

  const birthdayMonth = birthday.getMonth();
  const birthdayDay = birthday.getDate();

  return today.getMonth() === birthdayMonth && today.getDate() === birthdayDay;
};

const myBirthday = new Date('1993-12-17');
const isBirthday = isTodayMyBirthday(myBirthday);

if (isBirthday) {
  console.log('Buon compleanno!');
} else {
  console.log('Oggi non è il mio compleanno.');
}
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = function (obj, propName) {
  const newObj = { ...obj };

  delete newObj[propName];

  return newObj;
};
const movie = movies[0];
const newMovie = deleteProp(movie, 'Poster');
console.log(' ESERCIZIO11 ', newMovie);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) {
    return "L'array fornito è vuoto o non valido.";
  }

  // Usa il metodo reduce per trovare il film più recente
  const newest = moviesArray.reduce((acc, curr) => {
    const accYear = parseInt(acc.Year); // converte l'anno del film accumulatore in un numero intero
    const currYear = parseInt(curr.Year); // converte l'anno del film corrente in un numero intero

    if (isNaN(accYear) || isNaN(currYear)) {
      return 'Anno non valido in uno dei film.'; // Gestisce il caso di anno non valido
    }

    return accYear > currYear ? acc : curr; // Restituisce il film con l'anno maggiore
  });

  return newest;
}

// Esempio di utilizzo:
const newest = newestMovie(movies);
console.log('ESERCIZIO 12', newest);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function () {
  return movies.length;
};
console.log('ESERCIZIO 13', countMovies());
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function (moviesArray) {
  let years = [];
  for (let i = 0; i < moviesArray.length; i++) {
    years.push(moviesArray[i].Year);
  }
  return years;
};

console.log('ESERCIZIO 14', onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function (moviesArray) {
  const lastMillenniumMovies = moviesArray.filter((movie) => {
    const year = parseInt(movie.Year);
    return year >= 2000;
  });

  return lastMillenniumMovies;
};
const lastMillennium = onlyInLastMillennium(movies);
console.log('ESERCIZIO 15', lastMillennium);
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(moviesArray) {
  let sum = 0;

  for (let i = 0; i < moviesArray.length; i++) {
    const year = parseInt(moviesArray[i].Year);
    sum += year;
  }

  return sum;
}

// Esempio di utilizzo:
const sumOfYears = sumAllTheYears(movies);
console.log(`ESERCIZIO 16  La somma di tutti gli anni è: ${sumOfYears}`);
/* ESERCIZIO 17

*/

function searchByTitle(title) {
  if (!movies || movies.length === 0) {
    return "L'array fornito è vuoto o non valido.";
  }
  const matchingMovies = movies.filter((movie) => {
    const movieTitle = movie.Title.toLowerCase();
    const searchTitle = title.toLowerCase();
    return movieTitle.includes(searchTitle);
  });

  return matchingMovies;
}

const searchTerm = 'lord';
const matchingFilms = searchByTitle(searchTerm);
console.log(`Film che contengono "${searchTerm}" nel titolo:`);
console.log('ESERCIZIO 17', matchingFilms);
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(searchTerm) {
  const match = [];
  const unmatch = [];

  movies.forEach((movie) => {
    const movieTitle = movie.Title.toLowerCase();
    const searchTitle = searchTerm.toLowerCase();

    if (movieTitle.includes(searchTitle)) {
      match.push(movie);
    } else {
      unmatch.push(movie);
    }
  });

  return {
    match: match,
    unmatch: unmatch,
  };
}

const searchTerms = 'lord';
const dividedMovies = searchAndDivide(searchTerms);

console.log(`ESERCIZIO 18, film che contengono "${searchTerm}" nel titolo:`);
console.log(dividedMovies.match);

console.log(
  `ESERCIZIO 18, film che NON contengono "${searchTerm}" nel titolo:`
);
console.log(dividedMovies.unmatch);
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (index) {
  const newMovies = [...movies];
  newMovies.splice(index, 1);
  return newMovies;
};

const indexToRemove = 2;
const updatedMovies = removeIndex(indexToRemove);
console.log(`ESERCIZIO 19 array originale:`);
console.log(movies);
console.log(
  `ESERCIZIO 19 array modificato (elemento all'indice ${indexToRemove} rimosso):`
);
console.log(updatedMovies);

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const container = document.getElementById('container');
console.log('ESERCIZIO 20');
console.log(container);
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const td = document.getElementsByTagName('td');
console.log('ESERCIZIO 21', td);
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

let ogniTd = function () {
  const td = document.querySelectorAll('td');
  console.log('ESERCIZIO 22');
  td.forEach((td) => {
    console.log(td.textContent);
  });
};
ogniTd(); /*

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const ogniA = function () {
  const a = document.querySelectorAll('a');
  console.log('ESERCIZIO 22');
  a.forEach((a) => {
    a.style.backgroundColor = 'red';
  });
};
ogniA();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const aggiungiElementoAllaLista = function (nuovoTesto) {
  const myList = document.getElementById('myList');
  const newLi = document.createElement('li');
  newLi.textContent = nuovoTesto;
  myList.appendChild(newLi);
};
aggiungiElementoAllaLista('Python');

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuotaLista = function () {
  const myList = document.getElementById('myList');
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
};
//decommentare per attivare o richiamare la funzione
//svuotaLista();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

let addClassTr = function () {
  const righe = document.getElementsByTagName('tr');
  let tr = document.getElementsByTagName('tr');
  for (let i = 0; i < righe.length; i++) {
    const riga = righe[i];
    riga.classList.add('test');
  }
};
addClassTr();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
