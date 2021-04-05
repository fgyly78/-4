var numberOfFilms;
var question;
question = ('Сколько фильмов вы уже смотрели?');
numberOfFilms = prompt(question);
    alert("Вы посмотрели" + " "  + numberOfFilms + " " + "Фильмов");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    };
function rememberMyFilms() {
var answer1;
var answer2;
var question1;
var question2;
var movies;
question1 = ("Какой последний фильм вы посмотрели?");
question2 = ("На сколько оцените его?");
    answer1 = prompt(question1);
       answer2 = prompt(question2);
       movies: { answer1 + " " + ':' + " " + answer2
       alert("Оценка фильма-" + answer1 + " " + ':' + " " + answer2)
}
}
rememberMyFilms();
function detectPersonalLevel() {
if (numberOfFilms < 10){
    alert('Просмотрено довольно мало фильмов')
    }
    else if (numberOfFilms >= 10 && numberOfFilms <=30){
    alert('Вы классический зритель')
    }
    else if (numberOfFilms > 30){
    alert('Вы киноман')
    }
    else{
    alert('Произошла ошибка')
    }
}
detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
    }
}
function writeYourGenres() {
        for(let i = 1; i <= 3; i++){
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр номер ${i}`);
        }
    }
    writeYourGenres();
showMyDB(personalMovieDB.private);

console.log(personalMovieDB);
