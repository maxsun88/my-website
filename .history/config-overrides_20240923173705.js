module.exports = function override(config, env){
    console.log('override!');
    let loaders = config.modules.rules[1].
    
    return config;
}