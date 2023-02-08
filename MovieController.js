import Movie from "./Movie.js";

class MovieController {

    async createMovie(req, res) {
        try {
            const {title, type, directors, genres, countries, year, description} = req.body;
            const movie = await Movie.create({title, type, directors, genres, countries, year, description});// создание документа
            res.status(200).json(movie); // возвращение добавленного документа
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllforTittle(req, res) {
        try {
            const {title} = req.params;
            if (!title) {
                res.json("title не указан");
            }
            const movie = await Movie.find({title: title}, {title: title, _id: 0});
            return res.json(movie);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new MovieController();