install:
	npm ci
lint:
	npx eslint .
publish:
	npm publish --dry-run
test:
	npx jest
fix:
	npm eslint . --fix