/* istanbul ignore file */
const pool = require('../src/Infrastructures/database/postgres/pool')

const ThreadsTableTestHelper = {
    async addThread({
        id = 'thread-123',
        title = 'title',
        body = 'isi body',
        user = 'user-123'
    }) {
        const query = {
            text: 'INSERT INTO threads VALUES($1, $2, $3, $4)',
            values: [id, title, body, user]
        }
    
        await pool.query(query)
    },

    async findThreadsById(id) {
        const query = {
            text: 'SELECT threads.*, comments.* FROM threads JOIN comments ON threads.id = comments.thread WHERE threads.id = $1',
            values: [id]
        }

        const result = await pool.query(query)
        return result.rows
    },

    async cleanTable() {
        await pool.query('DELETE FROM threads WHERE 1=1')
    }
}

module.exports = ThreadsTableTestHelper