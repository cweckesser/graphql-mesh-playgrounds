# GraphQL Mesh Playgrounds

Playgrounds for testing the GraphQL Mesh library.

This project is structured into the following sub-projects:

- `openapi-service`: An OpenAPI Express application that returns mock data. Read more about this service [here](openapi-service/README.md).
- `graphql-api-service`: A GraphQL Express application that returns mock data. Read more about this service [here](graphql-api-service/README.md).
- `graphql-mesh-service`: A GraphQL Mesh application that consumes the schemas fetched from the OpenAPI and GraphQL API applications. Read more about this service [here](graphql-mesh-service/README.md).

**Important note**: In order for these applications to run successfully, they have to be built and executed in a specific order. As stated in the previous listing, the `graphql-mesh-service` project depends on the `openapi-service` and `graphql-api-service` projects, so the two latter need to be built and running before the first to run.
