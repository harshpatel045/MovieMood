const mongoose = require("mongoose");
const express = require("express");
const Movie = require("../database/models/Movie");
var multer = require("multer");
var path = require("path");

module.exports.getAllMovie = async (req, res) => {
  console.log("hello");
  await Movie.find()
    .then((m) => res.send(m))
    .catch((err) => console.log(err));
};

// var storage = multer.diskStorage({
//     destination:"C:/Users/dhruv/Downloads/MovieMood-main/User/public/Assets/Upload",
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '_' + Date.now()+path.extname(file.originalname))
//     }
//   })

// var upload = multer({ storage: storage }).array('file',2)

module.exports.addMovie = async (req, res) => {
  console.log(req.body);
  const movie = new Movie();

  movie.moviename = req.body.moviename;
  movie.moviedescription = req.body.movieinfo;

  movie.language = req.body.languages;
  movie.genre = req.body.genres;
  movie.cast = req.body.casts;

  movie.director = req.body.director;
  movie.duration = req.body.duration;

  movie.url = req.body.url;
  movie.poster = req.body.movieimage;
  console.log(movie);
  // movie.poster=req.files[0].filename;
  // movie.movieImg=req.files[1].filename;

  movie
    .save()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

module.exports.deleteMovieByName = async (req, res) => {
  // console.log("get")
  await Movie.findOneAndDelete({ moviename: req.params.name })
    .then((deleted) => res.send(deleted))
    .catch((err) => console.log(err));
};

module.exports.getMovieByName = async (req, res) => {
  console.log("=" + req.params.name);

  await Movie.find({ moviename: req.params.name })
    .then((m) => res.send(m))
    .catch((err) => console.log(err));
};
