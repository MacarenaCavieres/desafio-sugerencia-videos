const musica = document.querySelector("#musica");
const pelicula = document.querySelector("#pelicula");
const serie = document.querySelector("#serie");

const sugerencias = (() => {
    const agregar = (elemento, src) => {
        elemento.setAttribute("src", src);
    };

    return {
        publico(elemento, src) {
            agregar(elemento, src);
        },
    };
})();

class Multimedia {
    #url;
    constructor(url) {
        this.#url = url;
    }

    get getURL() {
        return this.#url;
    }

    setInicio() {
        console.log(`Este método es para realizar un cambio en la URL del video`);
    }
}

class Reproductor extends Multimedia {
    #id;
    constructor(url, id) {
        super(url);
        this.#id = id;
    }

    playMultimedia() {
        sugerencias.publico(this.#id, this.getURL);
    }

    setInicio(tiempo) {
        this.#id.setAttribute("src", `${this.getURL};start=${tiempo}`);
    }
}

const videoMusica = new Reproductor(
    "https://www.youtube.com/embed/vbvyNnw8Qjg?si=ZwP-jCzqCSeR43yR&amp",
    musica
);
const videoPelicula = new Reproductor(
    "https://www.youtube.com/embed/5PSNL1qE6VY?si=QDCR4476b1joN3SV",
    pelicula
);
const videoSerie = new Reproductor("https://www.youtube.com/embed/KPLWWIOCOOQ?si=oUxhZgbMIlnUxVZ9", serie);

videoMusica.setInicio(20);
videoPelicula.playMultimedia();
videoSerie.playMultimedia();
