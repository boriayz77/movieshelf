import Router from "express";
import MovieController from "./MovieController.js";
const router = new Router();
    router.post('/movie',MovieController.createMovie);
    router.get('/search/:title', MovieController.getAllforTittle);
export default router;
