const CommentRepository = require("../../../Domains/comments/CommentRepository");
const AddComment = require("../../../Domains/comments/entities/AddComment");
const AddedComment = require("../../../Domains/comments/entities/AddedComment");
const AddCommentUseCase = require("../AddCommentUseCase");

describe('AddCommentUseCase', () => {
    it('should orchesting the add comment action correctly', async () => {
        const useCasePayload = {
            content: 'content',
            user: 'user-123',
            thread: 'thread-123'
        }
        const mockAddedComment = new AddedComment({
            id: 'comment-123',
            content: useCasePayload.content,
            user: useCasePayload.user,
            thread: useCasePayload.thread
        })
        const mockCommentRepository = new CommentRepository()

        mockCommentRepository.verifyAvailableComment = jest.fn().mockImplementation(() => Promise.resolve())
        mockCommentRepository.addComment = jest.fn().mockImplementation(() => Promise.resolve(mockAddedComment))
    
        const addCommentUseCase = new AddCommentUseCase({
            commentRepository: mockCommentRepository
        })
        const addedComment = await addCommentUseCase.execute(useCasePayload)
    
        expect(addedComment).toStrictEqual(mockAddedComment)
        expect(mockCommentRepository.addComment).toBeCalledWith(new AddComment({
            content: useCasePayload.content,
            user: useCasePayload.user,
            thread: useCasePayload.thread
        }))
    })
})