const GetComment = require("../GetComment");

describe('a GetComment entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        const payload = { }

        expect(() => new GetComment(payload)).toThrowError('GET_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY')
    })

    it('should throw error when payload did not meet data type specification', () => {
        const payload = {
            id: true
        }

        expect(() => new GetComment(payload)).toThrowError('GET_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION')
    })

    it('should create getComment object correctly', () => {
        const payload = {
            id: 'comment-123'
        }
        const getComment = new GetComment(payload)

        expect(getComment.id).toEqual(payload.id)
    })
})