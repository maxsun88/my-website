module.exports = function override(config, env){
    console.log('override!');
    let loaders = config.modules.rules[1].oneOf;
    loaders.splice(loaders.length-1, 0, {
        
    }

    )
    
    return config;
}