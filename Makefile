install:
	npm ci
lint:
	npx eslint .
publish:
	npm publish --dry-run
test:
	npx jest
fix:
	npx eslint . --fix
diff:
	genDiff file1.json file2.json
test-coverage:
	npm test -- --coverage --coverageProvider=v8