function Article({title, date="January 1, 1970", preview, minutes}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            {/* <p>{emojiHandler({minutes})</p> */}
        </article>
        
    )
}

{/* function emojiHandler(minutes) {
    if (minutes <= 5) {
        return (
            `☕ {minutes} min read`
        )
    }
} */}

export default Article