const genId1 = require('nslh_xid');
const genId2 = require('aaza_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|akhxMmc4RW|' + genId2()).digest('base64');
}


module.exports = generateKey;
