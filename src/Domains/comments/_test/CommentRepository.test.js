const CommentRepository = require('../CommentRepository')

describe('CommentRepository interface', () => {
    it('should throw error when invoke abstract behavior', async () => {
        const commentRepository = new CommentRepository

        await expect(commentRepository.addComment({})).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED')
        await expect(commentRepository.verifyAvailableComment('')).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED')
        await expect(commentRepository.getComment('')).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED')
        await expect(commentRepository.deleteComment('')).rejects.toThrowError('DELETE_REPOSITORY.METHOD_NOT_IMPLEMENTED')
    })
})