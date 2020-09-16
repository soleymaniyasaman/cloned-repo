
import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPage from '../../components/collection_preview/collection_preview.component';
class ShopPage extends Component {
    state = {
        collections: 
             SHOP_DATA 
        
    }
    render() {
        const {collections} = this.state
        return (
            <div>
                {collections.map(({id , ...otherCollectionProps} )=> (
<CollectionPage key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;