module.exports = function(config) {
    config.set({
        files: ['spec/**/*Spec.js'],
        frameworks: ['jasmine', 'browserify'],
        preprocessors: {
            'spec/**/*Spec.js': ['browserify']
        },
        browsers: ['PhantomJS'],
        reporters: ['dots'],
        browserify: {
            debug: true, // output source maps
            transform: ['babelify']
        }
    });
};
