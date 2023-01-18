// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => {
      return movie.director;
    })
}


// const directors = ["Steven Spielberg", "Cristopher Nolan", "Steven Spielberg"];

// function getAllDirectors(moviesArray) {
//   return moviesArray
//     .map(function (movie) {
//       return movie.director;
//     })
//     .filter(function (director, index, sourceArray) {
//       return sourceArray.indexOf(director) === index;
//     });
// }




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaDirector = moviesArray.filter(function (movie) {
     return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return dramaDirector.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {
//     return moviesArray.map((movie) => {
//         return movie.score;
//       })
// }

// let avg = moviesArray.reduce(function(sum,score){
//     return sum + movie.score })/ moviesArray.length;
//     return avg




// const averageScores = moviesArray.reduce(function (sum, score) {
//     return sum + score;
//    }, 0);
//    return ;
//  }


function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    
    // let average = 0
    // const averageScores = moviesArray.reduce(function (sum, movie) {
    //     // console.log(sum)
    //     // console.log(movie.score)
    //     return sum + movie.score;
    //   },0)
    // average = averageScores/moviesArray.length;
    // return Number(average.toFixed(2))
    // }

    let sum=moviesArray.map((movie)=>{
        return movie.score
    }).reduce((acc,value)=>{
        if (!value) {
            return acc + 0
        }
        else {
            return acc + value
        }
    })

    return Number((sum/moviesArray.length).toFixed(2))
    }







// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
return scoresAverage(moviesArray.filter((el)=>{
    return el.genre.includes("Drama")
}))}
    // if(!moviesArray.genre.includes('Drama') {
    //   return 0
    // }



//     let sum = 0;
//     let dramaMovies = []

//     let result = moviesArray.filter((movie) => movie.genre.includes('Drama'))
//     result.forEach(function(movie){
//        sum += movie.score;
//         dramaMovies.push(movie)
//   })
//   if (dramaMovies.length === 0){
//     return 0
//   } else{
//   return Number((sum / dramaMovies).toFixed(2))
//   }
// }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let newArr = array.map((el)=>{
        return el;
    });

    return newArr.sort((a,b)=>{
        if (a.year === b.year){
            return a.title.localeCompare(b.title)
        } 
        else {
            return a.year - b.year;
        }
    })
}







// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

//     return [...moviesArray].sort((a,b)=>{
//         return a.title.localeCompare(b.title)
//     }).map((movie) => {
//         return movie.title
//     }).slice(o,20)
// }

return [...moviesArray].sort((a,b)=>{
    if (a.title >b.title) {
        return 1;
    }
    else if (a.title < b.title){
        return -1
    }
    else{
        return 0
    }
}).map((moviesArray) => moviesArray.title).slice(0,20)


}

/*
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
*/