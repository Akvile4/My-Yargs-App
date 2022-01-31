const yargs = require("yargs");

const { Anime, animeArr } = require("./utils");

const app = (args) => {
    if (args.add) {
        const anime = new Anime(args.anime, args.character, args.noEpisodes, args.releaseYear, args.rankingInJapan);
        anime.add();
        console.log(animeArr);
    } else if (args.addMany) {
        const anime1 = new Anime(args.anime, args.character, args.noEpisodes, args.releaseYear, args.rankingInJapan);
        const anime2 = new Anime(args.anime, args.character, args.noEpisodes, args.releaseYear, args.rankingInJapan);
        const anime3 = new Anime(args.anime, args.character, args.noEpisodes, args.releaseYear, args.rankingInJapan);
        anime1.add();
        anime2.add();
        anime3.add();
        console.log(animeArr[0])
    } else {
        console.log("boooo");
    }
};

app(yargs.argv)

// node app.js --add --anime="Hunter x Hunter" --character="Gon" --noEpisodes="148" --releaseYear="2011" --rankingInJapan="16"

// node app.js --addMany --anime="Hunter x Hunter" --character="Gon" --noEpisodes="148" --releaseYear="1995" --rankingInJapan="14" --anime="Dragon Ball" --character="Son-Goku" --noEpisodes="153" --releaseYear="1989" --rankingInJapan="9" --anime="Naruto" --character="Naruto" --noEpisodes="220" --releaseYear="2002" --rankingInJapan="1"