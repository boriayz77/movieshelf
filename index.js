import express from "express"
import mongoose from "mongoose"
import Router from "./Router.js"

const PORT = 8080; // порт сервера
const app = express();
const DB_URL = "mongodb://localhost:27017/movieshell" // url БД
app.use(express.json());
app.use('/api/movieshell', Router);// маршрутизация
async function startApp(uri, callback) {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});// подключение к БД
        app.listen(PORT, () => console.log("run")); // запуск сервера
    } catch (e) {
        console.log(e);
    }
}
startApp();// запуск сервера

