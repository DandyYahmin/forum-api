const pool = require("../src/Infrastructures/database/postgres/pool");

const CommentsTableTestHelper = {
    async addComment({
        id = 'comment-123',
        content = 'isi comment',
        user = 'user-123',
        thread = 'thread-123'
    }) {
        const query = {
            text: 'INSERT INTO comments VALUES($1, $2, $3, $4)',
            values: [id, content, user, thread]
        }

        await pool.query(query)
    },

    async deleteTable(id) {
        const query = {
            text: 'DELETE FROM comments WHERE id = $1',
            values: [id]
        }

        await pool.query(query)
    },

    async cleanTable() {
        await pool.query('DELETE FROM comments WHERE 1=1')
    }
}

module.exports = CommentsTableTestHelper