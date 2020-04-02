install: install-deps

install-deps:
	npm i

build:
	rm -rf dist
	npx webpack

develop:
	npx webpack-dev-server

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .