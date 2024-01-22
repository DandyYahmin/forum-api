const CommentRepository = require("../../../Domains/comments/CommentRepository");
const DeleteCommentUseCase = require("../DeleteCommentUseCase");

describe('DeleteCommentUseCase', () => {
    it('should orchesting the delete comment action correctly', async () => {
        const useCasePayload = {
            id: 'comment-123',
            content: 'content',
            user: 'user-123',
            thread: 'thread-123'
        }
        const mockCommentRepository = new CommentRepository
        mockCommentRepository.deleteComment = jest.fn().mockImplementation(() => Promise.resolve)

        const deleteCommentUseCase = new DeleteCommentUseCase({
            commentRepository: mockCommentRepository
        }) 
        
        await deleteCommentUseCase.execute(useCasePayload)

        expect(mockCommentRepository.deleteComment).toHaveBeenCalledWith(useCasePayload.id)
    })
})