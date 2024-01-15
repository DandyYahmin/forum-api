const AddThread = require('../AddThread')

describe('a AddThread entities', () => {
    it('shoul throw error when payload did not contain needed propert', () => {
        const payload = {
            title: 'title',
            body: 'body'
        }

        expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY')
    })

    it('should throw error when payload did not met data type specification', () => {
        const payload = {
            title: 'title',
            body: 123,
            owner: true
        }

        expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION')
    })

    it('should create addThread object correctly', () => {
        const payload = {
            title: 'title',
            body: 'isi body',
            owner: 'user-sekian123'
        }
        const {title, body, owner} = new AddThread(payload)

        expect(title).toEqual(payload.title)
        expect(body).toEqual(payload.body)
        expect(owner).toEqual(payload.owner)
    })
})