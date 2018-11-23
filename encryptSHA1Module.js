var crypto = require('crypto');

function encryptInSHA1( data ) {
    var generator = crypto.createHash('sha1');
    generator.update( data )
    return generator.digest('hex')
}

module.exports.encryptInSHA1 = encryptInSHA1