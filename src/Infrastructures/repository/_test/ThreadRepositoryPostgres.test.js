const ThreadsTableTestHelper = require('../../../../tests/ThreadsTableTestHelper')
const InvariantError = require('../../../Commons/exceptions/InvariantError')
const AddThread = require('../../../Domains/threads/entities/AddThread')
const AddedThread = require('../../../Domains/threads/entities/AddedThread')
const pool = require('../../database/postgres/pool')
const ThreadRepositoryPostgres = require('../ThreadRepositoryPostgres')

describe('ThreadRepositoryPostgres', () => {
    afterEach(async () => {
        await ThreadsTableTestHelper.cleanTable()
    })

    afterAll(async () => {
        await pool.end()
    })

    describe('verifyAvailableThread function', () => {
        it('should throw InvariantError when thread id not available', async () => {
            await ThreadsTableTestHelper.addThread({id: 'thread-123'})

            const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, {})
        
            await expect(threadRepositoryPostgres.verifyAvailableThread('thread-123')).rejects.toThrowError(InvariantError)
        })

        it('should not throw InvariantError when thread id is available', async () => {
            const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, {})

            await expect(threadRepositoryPostgres.verifyAvailableThread('thread-123')).resolves.not.toThrowError(InvariantError)
        })
    })

    describe('addThread function', () => {
        it('should persist add thread and return added thread correctly', async () => {
            const addThread = new AddThread({
                title: 'title',
                body: 'isi body',
                owner: 'owner-123'
            })
            const fakeIdGenerator = () => '123'
            const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, fakeIdGenerator)

            await threadRepositoryPostgres.addThread(addThread)

            const threads = await ThreadsTableTestHelper.findThreadsById('thread-123')
            expect(threads).toHaveLength(1)
        })

        it('should return added thread correctly', async () => {
            const addThread = new AddThread({
                title: 'title',
                body: 'isi body',
                owner: 'owner-123'
            })
            const fakeIdGenerator = () => '123'
            const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, fakeIdGenerator)
            const addedThread = await threadRepositoryPostgres.addThread(addThread)
        
            expect(addedThread).toStrictEqual(new AddedThread({
                id: 'thread-123',
                title: 'title',
                body: 'isi body',
                owner: 'owner-123'
            }))
        })
    })

    describe('getThread function', () => {
        it('should get thread', async () => {
            const addThread = new AddThread({
                title: 'title',
                body: 'isi body',
                owner: 'owner-123'
            })
            const fakeIdGenerator = () => '123'
            const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, fakeIdGenerator)

            await threadRepositoryPostgres.addThread(addThread)

            const thread = await threadRepositoryPostgres.findThreadsById('thread-123')

            expect(thread.title).toEqual('title')
            expect(thread.body).toEqual('isi body')
            expect(thread.owner).toEqual('owner-123')
        })
    })
})