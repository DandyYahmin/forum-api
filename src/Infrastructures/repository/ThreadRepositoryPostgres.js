const InvariantError = require("../../Commons/exceptions/InvariantError");
const AddedThread = require("../../Domains/threads/entities/AddedThread");
const ThreadRepository = require('../../Domains/threads/ThreadRepository')

class ThreadRepositoryPostgres extends ThreadRepository {
    constructor(pool, idGenerator) {
        super()
        this._pool = pool
        this._idGenerator = idGenerator
    }

    async verifyAvailableThread(id) {
        const query = {
            text: 'SELECT * FROM threads WHERE id = $1',
            values: [id]
        }
        const result = await this._pool.query(query)

        if(result.rowCount) {
            throw new InvariantError('thread tidak ditemukan')
        }
    }

    async addThread(thread) {
        const {title, body, owner} = thread
        const id = `thread-${this._idGenerator()}`
        const query = {
            text: 'INSERT INTO threads VALUES($1, $2, $3, $4) RETURNING id, title, body, owner',
            values: [id, title, body, owner]
        }
        const result = await this._pool.query(query)

        return new AddedThread({...result.rows[0]})
    }

    async findThreadsById(id) {
        const query = {
            text: 'SELECT * FROM threads WHERE id = $1',
            values: [id]
        }
        const result = await this._pool.query(query)

        if(!result.rowCount) {
            throw new InvariantError('thread tidak ditemukan')
        }

        return result.rows[0]
    }
}

module.exports = ThreadRepositoryPostgres