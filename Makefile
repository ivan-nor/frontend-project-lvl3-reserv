install:
	npm install

build:
	npm run build

start:
	npm run start
	
lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage