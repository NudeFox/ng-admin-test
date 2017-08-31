var fs = require('fs');
require('babel-core/register')({ ignore: '/node_modules\/' });

var db = {};
db.users = require('./users')(db);
db.userRoles = require('./user_roles')(db);

fs.writeFileSync(__dirname + '/../js/data.js', 'module.exports = ' + JSON.stringify(db));
console.log('data.js file updated');
