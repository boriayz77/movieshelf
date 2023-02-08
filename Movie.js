import mongoose from "mongoose"
const Movie = new mongoose.Schema({

    title: {type: String, require: true}, // Название проекта
    type: {type:String,require: true,enum: ["movie" , "tvSeries",] }, // Тип проекта.
    directors: {type: Array, require: true} , // Массив режиссеров
    genres: {type: Array, require: true} , // Массив жанров
    countries: {type: Array, require: true} , // Массив стран
    year: {type: Number, require: true} , // Год производства
    description: {type: Array, require: true} , // Краткое описание фильма
})
export default mongoose.model('Movie',Movie);
