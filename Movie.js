import mongoose from "mongoose";
const Movie = new mongoose.Schema({

    title: {type: String}, // Название проекта
    type: {type:String}, // Тип проекта.
    directors: {type: Array} , // Массив режиссеров
    genres: {type: Array} , // Массив жанров
    countries: {type: Array} , // Массив стран
    year: {type: Number} , // Год производства
    description: {type: String} , // Краткое описание фильма
})
export default mongoose.model('Movie',Movie);
