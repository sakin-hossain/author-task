import React, { useEffect, useState } from 'react';
import { addToDb } from '../../localStorage/localStorage';
import Authors from '../Authors/Authors';
import FavAuthor from '../FavAuthor/FavAuthor';
import "./Home.css";

const Home = () => {
    const [control, setControl] = useState('authors');
    const [favList, setFavList] = useState([]);
    const [authors, setAuthors] = useState([]);  
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
            setIsLoading(false);
        });
    }, [page]);

    const handleAddFav = (author) => {
        const newFavList = [...favList, author];
        setFavList(newFavList);
        addToDb(author._id);
    }
    
    const handleDecrease = () => {
        setPage(page-1);
    }
    const handleIncrease = () => {
        setPage(page+1);
    }

    return (
        <div className='row admin-container'>
            <div className='col-md-2 col-sm-12 sidebar'>
                <ul>
                    <li onClick={()=>{setControl('authors')}}>Author</li>
                    <li onClick={()=>{setControl('favAuthors')}}>Fav Author</li>
                </ul>
            </div>
            <div className='col-md-10 col-sm-12'>
                {control === 'authors' && <Authors
                isLoading = {isLoading}
                authors = {authors}
                handleAddFav = {handleAddFav}
                handleDecrease = {handleDecrease}
                page = {page}
                handleIncrease = {handleIncrease}
                pageCount = {pageCount}
                />}
                {control === 'favAuthors' && <FavAuthor
                favList ={favList}
                authors = {authors}
                />}
            </div>
        </div>
    );
};

export default Home;