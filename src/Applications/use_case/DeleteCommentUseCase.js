const DeleteComment = require("../../Domains/comments/entities/DeleteComment");

class DeleteCommentUseCase {
    constructor({commentRepository}) {
        this._commentRepository = commentRepository
    }

    async execute(useCasePayload) {
        const deleteComment = new DeleteComment(useCasePayload)

        return this._commentRepository.deleteComment(deleteComment.id)
    }
}

module.exports = DeleteCommentUseCase