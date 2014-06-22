test:
	@./node_modules/.bin/mocha --ui qunit-mocha-ui --reporter xunit-file test/**/*.js

.PHONY: test
