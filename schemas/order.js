const Order = require('../models/order');
const graphql = require('graphql');
const resolver = require('graphql-sequelize').resolver;

const orderType = new graphql.GraphQLObjectType({
    name: 'Order',
    fields: {
        id: {
            type: graphql.GraphQLInt,
        },
        user_id: {
            type: graphql.GraphQLInt,
        },
        time: {
            type: graphql.GraphQLString,
        },
        date: {
            type: graphql.GraphQLString
        },
    }
});

module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'RootUserQuery',
        fields: {
            user: {
                type: new graphql.GraphQLList(orderType),
                args: {
                    id: {
                        type: graphql.GraphQLInt,
                    },
                    user_id: {
                        type: graphql.GraphQLInt,
                    },
                    limit: {
                        type: graphql.GraphQLInt,
                    },
                    order: {
                        type: graphql.GraphQLString,
                    },
                },
                resolve: resolver(Order),
            }
        }
    }),
});
