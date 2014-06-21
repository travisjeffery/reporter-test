test:
	@./node_modules/.bin/mocha --reporter xunit-file test/**/*.js

.PHONY: test
