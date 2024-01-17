const GetThread = require('../GetThread')

describe('a GetThread entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        const payload = {}

        expect(() => new GetThread(payload)).toThrow('GET_THREAD.NOT_CONTAIN_NEEDED_PROPERTY')
    })

    it('should throw error when payload did not met data type specification', () => {
        const payload = {
            id: 123,
        }

        expect(() => new GetThread(payload)).toThrowError('GET_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION')
    })

    it('should create new getThread object correctly', () => {
        const payload = {
            id: 'thread-123'
        }
        const getThread = new GetThread(payload)

        expect(getThread.id).toEqual(payload.id)
    })
})