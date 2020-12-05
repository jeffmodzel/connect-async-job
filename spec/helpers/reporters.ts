/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/typedef */
const TSConsoleReporter = require('jasmine-ts-console-reporter');
jasmine.getEnv().clearReporters(); // Clear default console reporter
jasmine.getEnv().addReporter(new TSConsoleReporter());

const JasmineReporters = require('jasmine-reporters');
const junitReporter = new JasmineReporters.JUnitXmlReporter({
  savePath: './spec/test/results',
  consolidateAll: true
});
jasmine.getEnv().addReporter(junitReporter);
