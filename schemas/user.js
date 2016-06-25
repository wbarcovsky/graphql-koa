const User = require('../models/user');
const graphql = require('graphql');
const resolver = require('graphql-sequelize').resolver;

const userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: graphql.GraphQLInt,
        },
        name: {
            type: graphql.GraphQLString,
        },
        phone: {
            type: graphql.GraphQLString,
        },
        on_created: {
            type: graphql.GraphQLInt
        }
    }
});

module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'RootUserQuery',
        fields: {
            user: {
                type: new graphql.GraphQLList(userType),
                args: {
                    id: {
                        type: new graphql.GraphQLList(graphql.GraphQLInt),
                    },
                    name: {
                        type: graphql.GraphQLString,
                    },
                    limit: {
                        type: graphql.GraphQLInt,
                    },
                    order: {
                        type: graphql.GraphQLString,
                    },
                },
                resolve: resolver(User),
            }
        }
    }),
});
