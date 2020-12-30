import { put, call, takeLatest } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../utils/FirebaseUtil';
import ShopTypes from './shop.types';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionsRef = firestore.collection('collections');
        const snapshot = yield collectionsRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));

    } catch (error) {
        yield call(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync);
}

