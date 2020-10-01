import React from 'react';

const Article = (props) => {
    return (
        <article style={{
            marginTop: '40px'
        }}>
            <h3 style={{
                marginBottom: '3px',
                textTransform: 'uppercase'
            }}>{props.content.title}</h3>
            <span style={{
                fontSize: 15
            }}>{props.content.author}</span>
            <p style={{
                marginTop: 10
            }}>{props.content.text}</p>
        </article>
    )
}

export default Article;