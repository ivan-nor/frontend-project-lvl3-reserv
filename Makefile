build:
	rm -rf dist
	NODE_ENV=production npx webpack

develop:
	npx webpack-dev-server

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .