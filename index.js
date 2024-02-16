var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// http://www.omdbapi.com/?i=tt3896198&apikey=2a2b10e0 API KEY
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.movieFinder');
    var input = document.querySelector('.movieName');
    var btn = document.querySelector('.btn');
    var results = document.querySelector('.results');
    function fetchMovie(movieName) {
        return __awaiter(this, void 0, void 0, function () {
            var key, url, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = '2a2b10e0';
                        url = "http://www.omdbapi.com/?i=".concat(movieName, "&apikey=").concat(key);
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        handleJson(data);
                        return [2 /*return*/];
                }
            });
        });
    }
    function isMovie(value) {
        if (value &&
            typeof value === 'object' &&
            'Title' in value &&
            'Poster' in value &&
            'Genre' in value &&
            'Director' in value &&
            'Response' in value) {
            return true;
        }
        else
            return false;
    }
    function handleJson(data) {
        if (isMovie(data)) {
            if (data.Response === true && results) {
                results.innerHTML = "<h1>".concat(data.Title, "</h1>");
            }
            else if (results) {
                results.innerHTML = '<h1>Not found</h1>';
            }
        }
    }
    function handleForm() {
        var movieName = input.value;
        fetchMovie(movieName);
    }
    function preventForm(e) {
        e.preventDefault();
    }
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', handleForm);
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', preventForm);
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
