import React from 'react';

import Article from '../components/Article'

const articles = [
    {
        id: 0,
        title: "Jan Paweł II - papież polak",
        author: "Żon Pol II",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi maxime aliquid pariatur neque, itaque obcaecati optio inventore perspiciatis nam porro repellendus deleniti, similique quidem omnis animi veritatis ex quas quaerat."
    },

    {
        id: 1,
        title: "Motomyszy z Marsa",
        author: "Alehandro",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi maxime aliquid pariatur neque, itaque obcaecati optio inventore perspiciatis nam porro repellendus deleniti, similique quidem omnis animi veritatis ex quas quaerat."
    },

    {
        id: 2,
        title: "Być albo nie być?",
        author: "Ja",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi maxime aliquid pariatur neque, itaque obcaecati optio inventore perspiciatis nam porro repellendus deleniti, similique quidem omnis animi veritatis ex quas quaerat."
    }
]

const HomePage = () => {
    const pageArticles = articles.map(article => (
        <Article key={article.id} content={article} />
    ))

    return (
        <>
            { pageArticles}
        </>
    )
}

export default HomePage;