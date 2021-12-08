const Author = require('../models/author.model');



module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(author => response.json(author))
        .catch((err)=>{console.log(err);response.status(400).json(err)})
}


module.exports.getAllAuthors = (request, response) => {
    Author.find({}).collation({locale:'en',strength: 2}).sort({name:1}) //@ sort is for alphabetically only, capitals come first. (1 is ascending)
        .then(authors => response.json(authors))
        .catch((err)=>{console.log(err);response.status(400).json(err)})
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch((err)=>{console.log(err);response.status(400).json(err)})
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch((err)=>{console.log(err);response.status(400).json(err)})
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch((err)=>{console.log(err);response.status(400).json(err)})
}