import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import "./Authors.css";
const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const [fav, setFav] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://api.quotable.io/authors?limit=10&page=${page}`)
        .then(res => res.json())
        .then(data => {
            setAuthors(data.results)
            const totalCount = data.totalCount;
            const pageNumber = Math.ceil(totalCount / data.count);
            setPageCount(pageNumber);
            setIsLoading(false)
        });
    }, [page]);
    const handleAddToFav = (e) => {
        setFav(e.target.checked);
    }
    const handleDecrease = () => {
        setPage(page-1);
    }
    const handleIncrease = () => {
        setPage(page+1);
    }
    if(isLoading){
        return(
            <div className='text-center'>
                <Spinner animation="grow" />
            </div>
        )
    }

    return (
        <div>
            <div className='authors-container'>
                {
                    authors.map(author=> <div
                    key={author._id}
                    className='author'>
                        <h4>{author.name}</h4>
                        <p>{author.bio} <a href={author.link}>see more ...</a></p>
                        <input type="checkbox" onChange={handleAddToFav}/>
                    </div>)
                }
            </div>
            <div className='pagination'>
                <span><i className="fas fa-arrow-left" onClick={handleDecrease}></i> Page: {page} <i className="fas fa-arrow-right" onClick={handleIncrease}></i></span>
            </div>
        </div>
    );
};

export default Authors;