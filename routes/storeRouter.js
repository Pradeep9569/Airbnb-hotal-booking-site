const express = require('express');
const storeRouter = express.Router();

const homesController = require("../controllers/storeController");

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/homes", homesController.getHomes);
storeRouter.get("/favourites", homesController.getFavouriteList);

storeRouter.get("/homes/:homeId", homesController.getHomeDetails);

// ✅ ADD THESE
storeRouter.post("/favourites", homesController.postAddToFavourite);
storeRouter.post("/favourites/delete/:homeId", homesController.postRemoveFromFavourite);

module.exports = storeRouter;