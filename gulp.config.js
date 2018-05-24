module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var temp = './.tmp/';
    
    var config = {
        temp: temp,
        // all js to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        client: client,
        index: client + 'index.html',
        css: temp + 'styles.css',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        less: client + 'styles/styles.less',
        //  Bower and NPM locations
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        }
    };
    config.getWiredepDefaultOtions = function () {
        var options = {
            directory: config.bower.directory,
            bowerJson: config.bower.json,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };
    return config;
};
