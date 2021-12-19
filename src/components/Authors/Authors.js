import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Authors.css";


const Authors = (props) => {
    const {isLoading, authors, handleAddFav, handleDecrease, page, handleIncrease} = props;

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
                        <div className='row mb-4'>
                            <div className='col-md-8 col-sm-12'>
                                <h4>{author.name}</h4>
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <input type="checkbox" onChange={()=>handleAddFav(author)}/>
                                <span> Add to Favorite</span>
                            </div>
                        </div>
                        <p>{author.bio}</p>
                        <Link to={`/${author._id}`}>
                            <button className='btn-regular'>More Details</button>
                        </Link>
                    </div>
                    )
                }
            </div>
            <div className='pagination'>
                <span><i className="fas fa-arrow-left" onClick={handleDecrease}></i> Page: {page} <i className="fas fa-arrow-right" onClick={handleIncrease}></i></span>
            </div>
        </div>
    );
};

export default Authors;