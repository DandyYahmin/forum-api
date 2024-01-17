class AddedThread {
    constructor(payload) {
        this._verifyPayload(payload)

        const {id, title, user} = payload
        this.id = id
        this.title = title
        this.user = user
    }

    _verifyPayload({id, title, user}) {
        if(!id || !title || !user) {
            throw new Error('ADDED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY')
        }
        if(typeof id !== 'string' || typeof title !== 'string' || typeof user !== 'string') {
            throw new Error('ADDED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION')
        }
    }
}

module.exports = AddedThread