import React, { useEffect, useState } from 'react';
import { getDb, removeFromDb } from '../../localStorage/localStorage';

const FavAuthor = ({authors}) => {
    const [author, setAuthor] = useState([]);
    const savedDb = getDb();
    useEffect(()=>{
        const saveAuthor = [];
        for(const favId in savedDb){
            const author = authors.find(at => at._id === favId)
            saveAuthor.push(author);
            setAuthor(saveAuthor);
        }
     }, []);

    return (
        <div className='authors-container'>
                {
                    author.map(author=> <div 
                    key={author._id}
                    className='author'>
                        <h4>{author.name}</h4>
                        <p>{author.bio} <a href={author.link}>see more ...</a></p>
                        <input type="checkbox" onClick={()=>removeFromDb(author._id)}/>
                        <span> Remove from Favorite</span>
                    </div>)
                }
            </div>
    );
};

export default FavAuthor;