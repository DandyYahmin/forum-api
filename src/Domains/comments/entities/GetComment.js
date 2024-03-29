class GetComment {
    constructor(payload) {
        this._verifyPayload(payload)
    
        const {id} = payload
        this.id = id
    }

    _verifyPayload({id}) {
        if(!id) {
            throw new Error('GET_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY')
        }
        if(typeof id !== 'string') {
            throw new Error('GET_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION')
        }
    }
}

module.exports = GetComment