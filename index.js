document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  
  let currentMovie = "Titanic"
  
  document.addEventListener("click", (e) => {
    currentMovie = e.target.innerText
    fillContent(currentMovie)
  })
  
  let title = document.querySelector("#title");
  let director = document.querySelector("#director")
  let genre = document.querySelector("#genre");
  let filmRating = document.querySelector("#filmRating")
  let poster = document.querySelector("#poster")
  let description = document.querySelector("#description")
  let audienceScore = document.querySelector("#audienceScore")
  let cast = document.querySelector("#cast")
  
  const fillContent = function(currentMovie) {
  title.innerHTML = movies[currentMovie].title
  
  director.innerHTML = movies[currentMovie].director
  
  genre.innerHTML = movies[currentMovie].genre
  
  filmRating.innerHTML = movies[currentMovie].filmRating
  
  poster.setAttribute("src", movies[currentMovie].poster)
  
  description.innerHTML = movies[currentMovie].description
  
  audienceScore.innerHTML = movies[currentMovie].audienceScore
  
  console.log(movies[currentMovie].cast[0].actor)
  for(i=0; i< movies[currentMovie].cast.length; i++){
    p = document.createElement("p")
    p.innerText = movies[currentMovie].cast[i].actor
    cast.appendChild(p)
  }
  
  }
  
  
  fillContent(currentMovie)
  
});


