import React from 'react';
import Article from "./Article"

function ArticleList({blogArr}) {
    const posts = blogArr.map((post) => {
        return (
            <Article
                key= {post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
                minutes={post.minutes}
            />
        )
    })
    
    return (
        <main>
            {posts}
        </main>
    )
}

export default ArticleList