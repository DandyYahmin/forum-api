const AddThread = require('../../../Domains/threads/entities/AddThread')
const AddedThread = require('../../../Domains/threads/entities/AddedThread')
const ThreadRepository = require('../../../Domains/threads/ThreadRepository')
const AddThreadUseCase = require('../AddThreadUseCase')

describe('AddThreadUseCase', () => {
    it('should orchesting the add thread action correctly', async () => {
        const useCasePayload = {
            title: 'title',
            body: 'isi body',
            user: 'user-123'
        }
        const mockAddedThread = new AddedThread({
            id: 'thread-123',
            title: useCasePayload.title,
            body: useCasePayload.body,
            user: useCasePayload.user
        })
        const mockThreadRepository = new ThreadRepository()

        mockThreadRepository.verifyAvailableThread = jest.fn().mockImplementation(() => Promise.resolve())
        mockThreadRepository.addThread = jest.fn().mockImplementation(() => Promise.resolve(mockAddedThread))

        const getThreadUseCase = new AddThreadUseCase({
            threadRepository: mockThreadRepository
        })
        const addedThread = await getThreadUseCase.execute(useCasePayload)

        expect(addedThread).toStrictEqual(mockAddedThread)
        expect(mockThreadRepository.addThread).toBeCalledWith(new AddThread({
            title: useCasePayload.title,
            body: useCasePayload.body,
            user: useCasePayload.user
        }))
    })
})