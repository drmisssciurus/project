'use strict';

const numberOfFilms = +prompt('How many movies have you already watch?', '');

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++){
  const a = prompt('One of the last movies you watched?', ''),
        b = prompt('How much would you rate it?', '');

  if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
    personalMovieDB.movies[a] = b;
    console.log('Done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('You have watched quite a few films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('You are a classic viewer.');
} else if (personalMovieDB.count >= 30) {
  console.log('You are a movie buff.');
} else {
  console.log('An error occurred.');
}

console.log(personalMovieDB);
