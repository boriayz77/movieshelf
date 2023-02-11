import Movie from "./Movie.js";

class MovieService {
    async createMovie(shema) {
        const movie = await Movie.create(shema);
        return movie;
    }

    async getAllforTittle({title}) {
        const movie = await Movie.find({title: title}, {title: title, _id: 0});
        return movie;
    }
}

export default new MovieService();
