# GraphQL Service

This service is a GraphQL implementation built using `express-graphql` that exposes a basic API (an endpoint that returns an organization's department data). The purpose of this service is to be integrated into a GraphQL Mesh server along with other APIs.

### Running the service

1. Navigate to the service's folder and retrieve its dependencies:

```shell
cd PATH_TO_CLONED_PROJECT/graphql-api-service
yarn
```

2. Generate GraphQL types, build typescript files and run the service:

```shell
yarn generate
yarn build
yarn start
```

3. Verify that the service is accessible at `http://localhost:<GRAPHQL_API_SERVICE_PORT>/graphql`

    **Note**: the port value is defined in the [environment file](../.env)
