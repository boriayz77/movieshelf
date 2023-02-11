import createError from "http-errors";
import MovieService from "./MovieService.js";
import movieValidation from "./validations.js";

class MovieController {

    async createMovie(req, res) {
        try {
             const {error} = movieValidation(req.body);
             if (error) {                                         // проверка входящих данных
                throw createError({message: error.details[0].message});
             }
            const movie = await MovieService.createMovie(req.body)// создание документа
            res.status(200).json(movie); // возвращение добавленного документа
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllforTittle(req, res) {
        try {
            const movie = await MovieService.getAllforTittle(req.params); // поиск по коллекции
            return res.json(movie);
        } catch (e) {
            res.json(e);
        }
    }
}

export default new MovieController();
