export default {
    bail: true,
    verbose: true,
    silent: false,
    coverageDirectory: 'coverage',
    coverageReporters: [ 'json-summary', 'lcov', 'text' ],
    testEnvironment: 'node',
};
