install: install-deps

run:
	npx babel-node 'src/bin/hexlet.js' 10

install-deps:
	npm ci

build:
	rm -rf dist
	NODE_ENV=production npx webpack --mode development

develop:
	npx webpack-dev-server

test:
	npm test

test-coverage:
	npm test

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test