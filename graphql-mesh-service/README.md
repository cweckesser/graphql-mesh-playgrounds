# GraphQL Mesh Service

This service is a GraphQL Mesh application that integrates APIs from other services (OpenAPI and GraphQL).

### Running the service

1. Navigate to the service's folder and retrieve its dependencies:

```shell
cd PATH_TO_CLONED_PROJECT/graphql-mesh-service
yarn
```

2. Build typescript files and run the service:

```shell
yarn build
yarn start
```

Alternatively, it is also possible to run the service in development mode:

```shell
yarn dev 
```

This runs a GraphQL server with GraphQL interface by building artifacts on the fly.

3. Verify that the service is accessible at `http://127.0.0.1:<GRAPHQL_MESH_SERVICE_PORT>/graphql`

    **Note**: the port value is defined in the [environment file](../.env)
