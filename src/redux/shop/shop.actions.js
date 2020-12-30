import ShopTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../utils/FirebaseUtil';



export const updateCollections = collections => ({
    type: ShopTypes.UPDATE_COLLECTIONS,
    payload: collections
})


export const fetchCollectionsStart = () => ({
    type: ShopTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collections => ({
    type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
})


export const fetchCollectionsFailure = errorMsg => ({
    type: ShopTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMsg
})

// export const fetchCollectionsAsync = () => {
//     return dispatch => {
//         dispatch(fetchCollectionsStart());

//         const collectionsRef = firestore.collection('collections');
//         collectionsRef.get().then(snapshot => {
//             const result = convertCollectionsSnapshotToMap(snapshot);
//             dispatch(fetchCollectionsSuccess(result));
//         }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
//     }
// }



