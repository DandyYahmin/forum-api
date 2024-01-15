const AddedThread = require('../AddedThread')

describe('a AddedThread entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        const payload = {
            title: 'title',
            owner: 'user-sekian123'
        }

        expect(() => new AddedThread(payload)).toThrow('ADDED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY')
    })

    it('should throw error when payload did not met data type specification', () => {
        const payload = {
            id: 'title',
            title: 123,
            owner: true
        }

        expect(() => new AddedThread(payload)).toThrowError('ADDED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION')
    })

    it('should create new addedThread object correctly', () => {
        const payload = {
            id: 'thread-sekian123',
            title: 'title',
            owner: 'user-sekian123'
        }
        const addedThread = new AddedThread(payload)

        expect(addedThread.id).toEqual(payload.id)
        expect(addedThread.title).toEqual(payload.title)
        expect(addedThread.owner).toEqual(payload.owner)
    })
})