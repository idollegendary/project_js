"use strict";

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов', ''),
      b = prompt('на сколько оцените его?', ''),
      c = prompt('один из последних просмотренных фильмов', ''),
      d = prompt('на сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



// if (num < 50) {
//     console.log('error');
// } else if (num > 100) {
//     console.log(error1);
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('ok!') : console.log('error2');


const num = 50;
switch (num) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('error');
        break;
    case 50:
        console.log('ez game');
        break;
    default:
        console.log('next');
        break;
}