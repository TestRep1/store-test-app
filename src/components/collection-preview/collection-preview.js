import React from 'react'
import CollectionItem from '../collection-item/collection.item';
import './collection-preview.scss';
 
const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.slice(0,4).map(({id, ...other}) => (
                    <CollectionItem key={id} {...other}/>
                  
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview;
