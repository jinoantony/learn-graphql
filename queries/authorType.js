const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql')

const { books, authors } = require('../data/sample')


const AuthorType = new GraphQLObjectType({
    name: 'Authors',
    description: 'List of authors',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
            type: GraphQLList(BookType),
            resolve: (author) => books.filter(book => book.authorId === author.id)
        }
    })
})

module.exports = AuthorType

const BookType = require('./bookType')
