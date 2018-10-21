const Picture = require('./picture.model.js');


// POST a Picture
exports.create = (req, res) => {
    // Create a picture
    const picture = new Picture(req.body);
    // Save a Picture in the MongoDB
    picture.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
};


// FETCH all Pictures
exports.findAll = (req, res) => {
  console.log('findAll');
    Picture.find()
    .then(picture => {
        res.json(picture);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};



// FIND a Picture
exports.findOne = (req, res) => {
  console.log('findOne ');
    Picture.findById(req.params.pictureId)
    .then(picture => {
        if(!picture) {
            return res.status(404).json({
                msg: "Picture not found with id " + req.params.pictureId
            });            
        }
        res.json(picture);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Picture not found with id " + req.params.pictureId
            });                
        }
        return res.status(500).json({
            msg: "Error retrieving Picture with id " + req.params.pictureId
        });
    });
};

// UPDATE a Customer
exports.update = (req, res) => {
  console.log('update ', req);
    // Find picture and update it
    Picture.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(picture => {
        if(!picture) {
            return res.status(404).json({
                msg: "Picture not found with id " + req.params.pictureId
            });
        }
        res.json(picture);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Picture not found with id " + req.params.pictureId
            });                
        }
        return res.status(500).json({
            msg: "Error updating Picture with id " + req.params.pictureId
        });
    });
};

// DELETE a Picture
exports.delete = (req, res) => {
    Picture.findByIdAndRemove(req.params.pictureId)
    .then(picture => {
        if(!picture) {
            return res.status(404).json({
                msg: "Customer not found with id " + req.params.pictureId
            });
        }
        res.json({msg: "Picture deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "picture not found with id " + req.params.pictureId
            });                
        }
        return res.status(500).json({
            msg: "Could not delete picture with id " + req.params.pictureId
        });
    });
};
