// User model
const bcrypt = require('bcrypt');

module.exports = (bookshelf) => {
    return bookshelf.model('User', {
        tableName: 'users',
        photos() {
            return this.hasMany('Photos');
		},
		albums() {
			return this.hasMany('Albums')
		}
    }, {
        hashSaltRounds: 10,
    });
}