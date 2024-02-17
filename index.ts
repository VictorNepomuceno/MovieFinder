document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.movieFinder');
    const input = document.querySelector('.movieName') as HTMLInputElement;
    const btn = document.querySelector('.btn');
    const result = document.querySelector('.result');

    interface Filmes {
        Title: string;
        Year: string;
        Rated: string;
        Released: string;
        Runtime: string;
        Genre: string;
        Director: string;
        Writer: string;
        Actors: string;
        Plot: string;
        Language: string;
        Awards: string;
        Poster: string;
        imdbRating: string;
        Ratings: { Source: string; Value: string }[];
        Response: 'True' | 'False';
        Error?: string;
    }

    async function fetchMovie() {
        let movieName = input.value;
        let url = `https://www.omdbapi.com/?t=${movieName}&apikey=2a2b10e0`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return handleJson(data);
    }

    function handleJson(data: Filmes) {
        let movieName = input.value;
        if (result) {
            if (data.Response === 'True') {
                result.classList.add('active');
                result.innerHTML = `               
                
                <div class="containerResult">
                        <img class="poster" src="${data.Poster}" alt="filme" />
                        <div class="resultContent">
                            <h2 class="title">${data.Title}</h2>
                            <div class="rating">
                                <img src="./star-icon.svg" alt="" />
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(',').join('</div><div>')}</div>
                            </div>
                        </div>
                </div>
                <h3>Plot:</h3>  
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
            `;
            } else if (movieName.length <= 0) {
                result.classList.add('active');
                result.innerHTML = `<p class="msg">Please, enter a movie!</p>`;
            } else result.innerHTML = `<p class="msg">${data.Error}</p>`;
        }
    }

    function handleSubmit(e: Event) {
        e.preventDefault();
        fetchMovie();
    }

    btn?.addEventListener('submit', handleSubmit);
    form?.addEventListener('submit', handleSubmit);
});
