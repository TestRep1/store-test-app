import React, { useEffect } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';
import WithSpinner from '../../components/with-spinner/with-spinner';

import { selectIsFetching } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
//import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


const ShopPage = ({ match, isLoading, fetchCollectionsStart }) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} />

            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
