install: install-deps

install-deps:
	npm i

build:
	rm -rf dist
	npx webpack

babel:
	NODE_ENV=production babel src --out-dir dist --source-maps inline

develop:
	npx webpack-dev-server

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .