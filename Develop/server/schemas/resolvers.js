const { Books } = require('../models');
const bookSchema = require('../models/Book');
const { User } = required('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
    Query: {
        bookSchema: async () => {
            // Get and return all documents from the classes collection
            return await Class.find({});
        },
        userSaved: async (Books, { id }) => {
            // Get and return one document by name from the classes collection
            return await Class.findOne(id);
        },
    }
};

module.exports = resolvers;
