const AddComment = require("../AddComment");

describe('a AddComment entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        const payload = {
            content: 'content',
            user:  'user-123'
        }

        expect(() => new AddComment(payload)).toThrowError('ADD_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY')
    })

    it('should throw error when payload did not meet data type specification', () => {
        const payload = {
            content: 'content',
            user: 123,
            thread: true
        }

        expect(() => new AddComment(payload)).toThrowError('ADD_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION')
    })

    it('should create addComment object correctly', () => {
        const payload = {
            content: 'content',
            user: 'user-123',
            thread: 'thread-123'
        }
        const {content, user, thread} = new AddComment(payload)

        expect(content).toEqual(payload.content)
        expect(user).toEqual(payload.user)
        expect(thread).toEqual(payload.thread)
    })
})