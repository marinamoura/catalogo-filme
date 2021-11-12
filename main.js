const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ef605d4e9b17ee3824a4ed3ed660df0";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const form = document.getElementById('form');
const busca = document.getElementById('busca');
const main = document.getElementById('main');

buscarFilmes(APIURL);

async function buscarFilmes(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData.results);
    mostrarFilme(respData.results);

}

function mostrarFilme(filmes) {
    main.innerHTML = '';

    filmes.forEach(function(filme) {
        const {poster_path, title, vote_average, overview } = filme;

        const filmeItem = document.createElement('div');
        filmeItem.classList.add('movie');

        filmeItem.innerHTML = `
			<img src="${IMGPATH + poster_path}" alt="${title}" />
			<div class="info">
				<h3>${title}</h3>
				<span class="${classePorAvaliacao(vote_average)}">
					${vote_average}
				</span>
			</div>
			<div class="sinopse">
				<h3>Sinopse:</h3>
				${overview}
			</div>
		`;

        main.appendChild(filmeItem);
    });
}

function classePorAvaliacao(avaliacao){

}