function CommentComponent({comment}) {
    return(
        <div>
            <p>
                {comment.author}
            </p>
            <p>
                {comment.content}
            </p>
        </div>
    )
}

export default async function ChatSection({ componentId }) {
    return(
        <div className="flex flex-col">
            {comments.map((comment)=> {
                return (
                    <CommentComponent key={comment.id} comment={comment} />
                )
            })}
        </div>
    )
}
