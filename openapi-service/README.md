# OpenAPI Service

This service is an OpenAPI implementation built using `express-openapi` that exposes a basic API (an endpoint that returns people data). The purpose of this service is to be integrated into a GraphQL Mesh server along with other APIs.

### Running the service

1. Navigate to the service's folder and retrieve its dependencies:

```shell
cd PATH_TO_CLONED_PROJECT/openapi-service
yarn
```

2. Build typescript files and run the service:

```shell
yarn build
yarn start
```

3. Verify that the service is accessible at `http://127.0.0.1:<OPEN_API_SERVICE_PORT>/people`

    **Note**: the port value is defined in the [environment file](../.env)

4. API docs for the service should also be accessible at `http://localhost:<OPEN_API_SERVICE_PORT>/api-docs`
