const FavouriteModel = require('../models').FavouriteModel;
module.exports = {
    addToFavourite: async (req, res) => {
        try {
            const getFavourites = await FavouriteModel.findOne({ user: req.body.user, venue: req.body.venue });
            if (typeof getFavourites === 'object') {
                const addToFavourite = await FavouriteModel.create({ ...req.body });
                if (addToFavourite) res.status(200).send({ msg: 'Added To Favourite', data: addToFavourite });
                else res.status(203).send({ msg: 'Something Went Wrong' });
            } else {
                res.status(204).send({ msg: 'Already Favourite' });
            }
        } catch (error) {
            res.status(500).send({ msg: 'Internal Server Error' });
        }
    },

    removeFromFavourite: async (req, res) => {
        try {
            const deleteVenue = await FavouriteModel.findOneAndDelete({ user: req.body.user, venue: req.body.venue });
            if (deleteVenue) res.status(200).send({ msg: 'Removed From Favourite', data: deleteVenue });
            else res.status(203).send({ msg: 'Something Went Wrong' });
        } catch (error) {
            res.status(500).send({ msg: 'Internal Server Error' });
        }
    },
}

