class AddComment {
    constructor(payload) {
        this._verifyPayload(payload)

        const {content, user, thread} = payload
        this.content = content
        this.user = user
        this.thread = thread
    }

    _verifyPayload({content, user, thread}) {
        if(!content || !user || !thread) {
            throw new Error('ADD_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY')
        }
        if(typeof content !== 'string' || typeof user !== 'string' || typeof thread !== 'string') {
            throw new Error('ADD_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION')
        }
    }
}

module.exports = AddComment