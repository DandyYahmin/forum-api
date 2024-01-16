const AddThread = require('../../../Domains/threads/entities/AddThread')
const AddedThread = require('../../../Domains/threads/entities/AddedThread')
const ThreadRepository = require('../../../Domains/threads/ThreadRepository')
const AddThreadUseCase = require('../AddThreadUseCase')

describe('AddThreadUseCase', () => {
    it('should orchesting the add thread action correctly', async () => {
        const useCasepayload = {
            title: 'title',
            body: 'isi body',
            owner: 'user-sekian123'
        }
        const mockAddedThread = new AddedThread({
            id: 'thread-sekian123',
            title: useCasepayload.title,
            body: useCasepayload.body,
            owner: useCasepayload.owner
        })
        const mockThreadRepository = new ThreadRepository()

        mockThreadRepository.verifyAvailableThread = jest.fn().mockImplementation(() => Promise.resolve())
        mockThreadRepository.addThread = jest.fn().mockImplementation(() => Promise.resolve(mockAddedThread))

        const getThreadUseCase = new AddThreadUseCase({
            threadRepository: mockThreadRepository
        })
        const addedThread = await getThreadUseCase.execute(useCasepayload)

        expect(addedThread).toStrictEqual(mockAddedThread)
        expect(mockThreadRepository.addThread).toBeCalledWith(new AddThread({
            title: useCasepayload.title,
            body: useCasepayload.body,
            owner: useCasepayload.owner
        }))
    })
})