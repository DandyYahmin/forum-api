/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('comments', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true
        },
        content: {
            type: 'TEXT',
            notNull: false
        },
        user: {
            type: 'VARCHAR(50)',
            notNull: true
        },
        thread: {
            type: 'VARCHAR(50)',
            notNull: true
        }
    })
};

exports.down = pgm => {
    pgm.dropTable('comments')
};