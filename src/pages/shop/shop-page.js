import React, {useState} from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from './shop-data.js';

const ShopPage = () => {
    const [collections] = useState(SHOP_DATA);

    return (
        <div className="shop-page">
            {collections.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps}/>
            ))}
        </div>
    )
}

export default ShopPage;
