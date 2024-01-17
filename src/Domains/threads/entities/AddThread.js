class AddThread {
    constructor(payload) {
        this._verifyPayload(payload)

        const {title, body, user} = payload
        this.title = title
        this.body = body
        this.user = user
    }

    _verifyPayload({title, body, user}) {
        if(!title || !body || !user) {
            throw new Error('ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY')
        }
        if(typeof title !== 'string' || typeof body !== 'string' || typeof user !== 'string') {
            throw new Error('ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION')
        }
    }
}

module.exports = AddThread