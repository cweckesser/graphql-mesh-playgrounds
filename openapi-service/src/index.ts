import * as bodyParser from 'body-parser';
import express from 'express';
import { initialize } from 'express-openapi';

const app = express();

app.use(bodyParser.json());

initialize({
	apiDoc: './config/open-api.yaml',
	app,
	paths: './dist/controllers',
	// Allow TS support
	routesGlob: '**/*.{ts,js}',
	routesIndexFileRegExp: /(?:index)?\.[tj]s$/,
	// Coerce request properties according to the OpenAPI parameter list
	enableObjectCoercion: true,
});

const port = parseInt(process.env.OPEN_API_SERVICE_PORT as string, 10);

app.listen(port, () => {
	console.info(`OpenAPI Service running @ http://127.0.0.1:${port}!\n`);
	console.info(`Try any of these commands:`);
	console.info(`\t- curl http://127.0.0.1:${port}/people`);
	console.info(`\t- curl http://127.0.0.1:${port}/people?id=id-1`);
});
