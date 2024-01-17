const pool = require("../../database/postgres/pool");
const ThreadsTableTestHelper = require('../../../../tests/ThreadsTableTestHelper');
const container = require("../../container");
const createServer = require("../createServer");

describe('/threads endpoint', () => {
    afterAll(async () => {
        await pool.end()
    })

    afterEach(async () => {
        await ThreadsTableTestHelper.cleanTable()
    })

    describe('when POST /threads', () => {
        it('should response 201 and persisted threads', async () => {
            const loginPayload = {
                title: 'title',
                body: 'body',
                owner: 'owner'
            }
            const server = await createServer(container)
            const response = await server.inject({
                method: 'POST',
                url: 'users'
            })
        })
    })
})