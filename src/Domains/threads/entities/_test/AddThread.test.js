const AddThread = require('../AddThread')

describe('a AddThread entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        const payload = {
            title: 'title',
            body: 'body'
        }

        expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY')
    })

    it('should throw error when payload did not meet data type specification', () => {
        const payload = {
            title: 'title',
            body: 123,
            user: true
        }

        expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION')
    })

    it('should create addThread object correctly', () => {
        const payload = {
            title: 'title',
            body: 'isi body',
            user: 'user-123'
        }
        const {title, body, user} = new AddThread(payload)

        expect(title).toEqual(payload.title)
        expect(body).toEqual(payload.body)
        expect(user).toEqual(payload.user)
    })
})