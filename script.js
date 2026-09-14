const movies = [
    {
        title: "Spider-Man: Brand New Day",
        year: "2026",
        genre: "Action • Superhero",
        poster: "assets/spiderman-brand-new-day.jpg",
        status: "AVAILABLE"
    },

    {
        title: "Obsession",
        year: "2026",
        genre: "Drama • Thriller",
        poster: "assets/obsession.jpg",
        status: "AVAILABLE"
    },

    {
        title: "Backrooms",
        year: "2026",
        genre: "Horror • Mystery",
        poster: "assets/backrooms.jpg",
        status: "AVAILABLE"
    },

    {
        title: "Minions & Monsters",
        year: "2026",
        genre: "Animation • Comedy",
        poster: "assets/minions-monsters.jpg",
        status: "AVAILABLE"
    },

    {
        title: "Pengabdi Setan 2",
        year: "2022",
        genre: "Horror",
        poster: "assets/pengabdi-setan-2.jpg",
        status: "AVAILABLE"
    },

    {
        title: "KKN di Desa Penari",
        year: "2022",
        genre: "Horror • Mystery",
        poster: "assets/kkn-desa-penari.jpg",
        status: "AVAILABLE"
    },

    {
        title: "Spider-Man: Far From Home",
        year: "2019",
        genre: "Action • Superhero",
        poster: "assets/spiderman-far-from-home.jpg",
        status: "AVAILABLE"
    },

    {
        title: "Spider-Man: No Way Home",
        year: "2021",
        genre: "Action • Superhero",
        poster: "assets/spiderman-no-way-home.jpg",
        status: "AVAILABLE"
    },

    {
        title: "Black Panther: Wakanda Forever",
        year: "2022",
        genre: "Action • Adventure • Superhero",
        poster: "assets/black-panther-wakanda-forever.jpg",
        status: "COMING SOON"
    },

    {
        title: "Deadpool & Wolverine",
        year: "2024",
        genre: "Action • Superhero • Comedy",
        poster: "assets/deadpool-wolverine.jpg",
        status: "AVAILABLE"
    }
];


let currentFilter = "all";


function displayMovies(movieList) {

    const grid = document.getElementById("movieGrid");

    grid.innerHTML = "";

    document.getElementById("movieCount").textContent =
        movieList.length;


    if (movieList.length === 0) {

        grid.innerHTML = `
            <div class="no-results">
                <h3>Movie not found.</h3>
                <p>Try searching for another title.</p>
            </div>
        `;

        return;
    }


    movieList.forEach(movie => {

        const card = document.createElement("div");

        card.className = "movie-card";

        card.innerHTML = `

            <div class="poster">

                <img
                    src="${movie.poster}"
                    alt="${movie.title}"
                    onerror="this.style.display='none'"
                >

                <div class="movie-status">
                    ${movie.status}
                </div>

            </div>

            <div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>

                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span>•</span>
                    <span>${movie.genre}</span>
                </div>

                <button
                    class="order-btn"
                    onclick="orderMovie('${movie.title.replace(/'/g, "\\'")}', '${movie.year}')"
                >
                    ORDER MOVIE →
                </button>

            </div>
        `;

        grid.appendChild(card);

    });
}


function filterMovies(year, button) {

    currentFilter = year;


    document.querySelectorAll(".filter").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");


    applyFilters();
}


function searchMovies() {
    applyFilters();
}


function applyFilters() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    let result = movies.filter(movie => {

        const matchesSearch =
            movie.title
                .toLowerCase()
                .includes(search);


        const matchesYear =
            currentFilter === "all" ||
            movie.year === currentFilter;


        return matchesSearch && matchesYear;

    });


    displayMovies(result);
}


function scrollToRequest() {

    document
        .getElementById("request")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function sendRequest(event) {

    event.preventDefault();


    const title =
        document.getElementById("requestTitle").value;

    const year =
        document.getElementById("requestYear").value;

    const name =
        document.getElementById("requestName").value ||
        "-";


    const message =
        `🎬 MOVIE REQUEST%0A%0A` +
        `Title: ${title}%0A` +
        `Year: ${year || "-"}%0A` +
        `Requested by: ${name}`;


    /*
       GANTI NOMOR DI BAWAH
       DENGAN NOMOR WHATSAPP KAMU
    */

    const whatsappNumber = "6281932140239";


    window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
    );

}

function orderMovie(title, year) {

    const whatsappNumber = "6281932140239";

    const message =
        `🎬 MOVIE ORDER%0A%0A` +
        `Movie: ${title}%0A` +
        `Year: ${year}%0A%0A` +
        `Hi, saya mau order movie ini.`;

    window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
    );
}


displayMovies(movies);
