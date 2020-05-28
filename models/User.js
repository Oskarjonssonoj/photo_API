// User model
const bcrypt = require('bcrypt');

module.exports = (bookshelf) => {
    return bookshelf.model('User', {
        tableName: 'users',
        // photos() {
        //     return this.hasMany('Photos');
		// },
		// albums() {
		// 	return this.hasMany('Albums')
		// }
    }, {
        hashSaltRounds: 10,
        async login(email, password) {
			// check if user exists
			const user = await new this({ email }).fetch({ require: false });
			if (!user) {
				return false;
			}

			// get hashed password from db
			const hash = user.get('password');

			// generate hash of cleartext password
			// compare new hash with hash from db
			// return user if hashes match, otherwise false
			return (await bcrypt.compare(password, hash))
				? user
				: false;
		},
	});
};