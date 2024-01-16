const AddThread = require('../../Domains/threads/entities/AddThread')

class AddThreadUseCase {
    constructor({threadRepository}) {
        this._threadRepository = threadRepository
    }

    async execute(useCasePayload) {
        const addNewThread = new AddThread(useCasePayload)
        
        return this._threadRepository.addThread(addNewThread)
    }
}

module.exports = AddThreadUseCase