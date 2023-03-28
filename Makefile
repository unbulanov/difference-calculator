install:
	npm ci
lint:
	npx eslint .
publish:
	npm publish --dry-run
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
fix:
	npx eslint . --fix
diff:
	genDiff file1.json file2.json
test-coverage:
	npm test -- --coverage --coverageProvider=v8