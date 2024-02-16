// http://www.omdbapi.com/?i=tt3896198&apikey=2a2b10e0 API KEY
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.movieFinder');
    const input = document.querySelector('.movieName');
    const btn = document.querySelector('.btn');
    const results = document.querySelector('.results');

    interface Movies {
        Title: string;
        Poster: string;
        Genre: string;
        Director: string;
        Response: boolean;
    }

    async function fetchMovie(movieName: string) {
        let key = '2a2b10e0';
        let url = `http://www.omdbapi.com/?i=${movieName}&apikey=${key}`;
        const response = await fetch(url);
        const data = await response.json();
        handleJson(data);
    }

    function isMovie(value: unknown): value is Movies {
        if (
            value &&
            typeof value === 'object' &&
            'Title' in value &&
            'Poster' in value &&
            'Genre' in value &&
            'Director' in value &&
            'Response' in value
        ) {
            return true;
        } else return false;
    }

    function handleJson(data: unknown) {
        if (isMovie(data)) {
            if (data.Response === true && results) {
                results.innerHTML = `<h1>${data.Title}</h1>`;
            } else if (results) {
                results.innerHTML = '<h1>Not found</h1>';
            }
        }
    }

    function handleForm() {
        const movieName = (input as HTMLInputElement).value;
        fetchMovie(movieName);
    }

    function preventForm(e: Event) {
        e.preventDefault();
    }

    btn?.addEventListener('click', handleForm);
    form?.addEventListener('submit', preventForm);
});

// interface Cursos {
//     nome: string;
//     horas: number;
//     tags: string[];
// }

// function isCursos(value: unknown): value is Cursos {
//     if (
//         value &&
//         typeof value === 'object' &&
//         'nome' in value &&
//         'horas' in value &&
//         'tags' in value
//     ) {
//         return true;
//     } else return false;
// }

// async function fetchCurso() {
//     const response = await fetch('https://api.origamid.dev/json/cursos.json');
//     const data = await response.json();
//     handleJson(data);
// }

// fetchCurso();

// function handleJson(data: unknown) {
//     if (Array.isArray(data)) {
//         data.filter(isCursos).forEach((item) => {
//             document.body.innerHTML += `

//             <h1>${item.nome}</h1>
//             <h1>${item.horas} HRS</h1>
//             <h1>${item.tags.join(', ')}</h1>

//             `;
//         });
//     }
// }
