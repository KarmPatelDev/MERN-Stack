import { ApolloServer } from "@apollo/server";
import { user } from "./user";

async function createApolloGraphqlServer() {

    // create graphql server
    const gqlServer = new ApolloServer({
        typeDefs: `
            ${user.typedefs}
            
            type Query {
                ${user.queries}
            }
                
            type Mutation {
                ${user.mutations}
            }
        `,
        resolvers: {
            Query: {
                ...user.resolvers.queries
            },
            Mutation: {
                ...user.resolvers.mutations
            }
        }
    });

    await gqlServer.start();

    return gqlServer;
}

export default createApolloGraphqlServer;