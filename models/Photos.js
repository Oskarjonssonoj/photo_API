// Author model

module.exports = (bookshelf) => {
    return bookshelf.model('Photos', {
        tableName: 'photo',
        // albums() {
        //     return this.belongsToMany('Albums');
        // },
        // users() {
        //     return this.belongsTo('Users');
        // }
    })
};