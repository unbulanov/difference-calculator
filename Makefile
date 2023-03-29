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
diff-json:
	genDiff file1.json file2.json
diff-yml:
	genDiff file1.yml file2.yml
test-coverage:
	npm test -- --coverage --coverageProvider=v8