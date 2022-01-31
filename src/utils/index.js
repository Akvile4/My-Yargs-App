// an emty array
const animeArr = [];

class Anime {
    constructor (title, character = "not defined", noEpisodes, releaseYear, rankingInJapan) {
        this.title = title;
        this.character = character;
        this.noEpisodes = noEpisodes;
        this.releaseYear = releaseYear;
        this.rankingInJapan = rankingInJapan;
    }
    add() {
        animeArr.push(this);
    }
};

module.exports = { Anime, animeArr};