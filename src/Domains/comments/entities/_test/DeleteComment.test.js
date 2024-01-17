const DeleteComment = require("../DeleteComment");

describe('a DeleteComment entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        const payload = { }

        expect(() => new DeleteComment(payload)).toThrowError('DELETE_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY')
    })

    it('should throw error when payload did not meet data type specification', () => {
        const payload = {
            id: true
        }

        expect(() => new DeleteComment(payload)).toThrowError('DELETE_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION')
    })

    it('should create deleteComment object correctly', () => {
        const payload = {
            id: 'comment-123'
        }
        const deleteComment = new DeleteComment(payload)

        expect(deleteComment.id).toEqual(payload.id)
    })
})