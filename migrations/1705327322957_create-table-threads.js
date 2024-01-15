/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('threads', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true
        },
        title: {
            type: 'TEXT',
            notNull: false
        },
        body: {
            type: 'TEXT',
            notNull: false
        },
        owner: {
            type: 'VARCHAR(50)',
            notNull: true
        }
    })
};

exports.down = pgm => {
    pgm.dropTable('threads')
};
