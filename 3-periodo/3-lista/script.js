function getDataFromTMDB() {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=54ab6704f3a74a99ca0a5faf09ac04d5&language=pt-BR&page=1")
    .then(response => {
        const movies = []

        response.data.results.slice(0, 10).map((item) => {
            movies.push(item);
        });

        populateMovieList(movies)
    })
}

function populateMovieList(movies) {
    var container = document.getElementsByClassName("movieList")[0]

    movies.map((movie) => {
        console.log(movie)
        var div = document.createElement("div");
        div.classList.add("movie")

        const img = document.createElement("img")
        img.src = `https://www.themoviedb.org/t/p/w1280/${movie.poster_path}`

        const containerInfo = document.createElement("div");
        containerInfo.classList.add("movieInfo");

        const titleMovie = document.createElement("h3");
        titleMovie.classList.add("title")
        titleMovie.textContent = movie.title;

        const descriptionMovie = document.createElement("span");
        descriptionMovie.textContent = movie.overview;

        const releaseMovie = document.createElement("span");
        releaseMovie.textContent = `Data de lançamento: ${new Date(movie.release_date).toLocaleDateString()}`;

        const averageVoteMovie = document.createElement("p");
        averageVoteMovie.textContent = `Nota média: ${movie.vote_average}`

        const voteCountMovie = document.createElement("p");
        voteCountMovie.textContent = `Quantidade de votos: ${movie.vote_count}`

        containerInfo.appendChild(titleMovie);
        containerInfo.appendChild(descriptionMovie);
        containerInfo.appendChild(releaseMovie);
        containerInfo.appendChild(averageVoteMovie);
        containerInfo.appendChild(voteCountMovie);

        div.appendChild(img);

        div.appendChild(containerInfo);

        container.appendChild(div);
    })
}