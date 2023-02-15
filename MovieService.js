import Movie from "./Movie.js";
// сервисы movie
class MovieService {
    async createMovie(shema) {
        return Movie.create(shema); // создание документа Movie
    }

    async getAllforTittle(title) {
        return  Movie.find({title: title}, {title: title, _id: 0}).exec(); // поиск по tittle
    }
}

export default new MovieService();
