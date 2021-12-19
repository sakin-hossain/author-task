import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Author.css";

const Author = () => {
    const [author, setAuthor] = useState({});
    const {authorId} = useParams();
    useEffect(()=>{
        fetch(`https://api.quotable.io/authors/${authorId}`)
        .then(res=> res.json())
        .then(data => setAuthor(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(author);
    return (
        <div className='container author-container'>
            <h1>{author.name}</h1>
            <h5>{author?.description}</h5>
            {
                author.quotes && author.quotes.map(quote => <div key={quote._id}>
                    <blockquote><i>{quote.content}</i></blockquote>
                </div>)
            }
            <p>{author.bio} <a href={author.link}>Details on Wikipedia</a></p>
            <Link to="/">
                <button className='btn-regular'>Go to Home</button>
            </Link>
        </div>
    );
};

export default Author;