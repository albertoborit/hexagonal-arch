import express from "express"
import { userRouter } from "./adapters/http/user/user-router"
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from "./adapters/gql/resolvers";
import { typeDefs } from "./adapters/gql/query-defs";
async function bootstrap() {
    const app = express()
    app.use(express.json())
    app.use("/", userRouter)
    const port = 8000
    app.listen(port, () => {
        console.log(`HTTP Server running on port http://localhost:${port}/`)
    })
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`GQL Server running at: ${url}`);
}
bootstrap()