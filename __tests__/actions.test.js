import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ImageStore } from 'react-native';
import vision from 'react-cloud-vision-api';
import {
    getPictureTitle
} from '../src/actions';
import { PICTURE_TITLE, PICTURE_URL, ERROR_RECOGNIZER } from '../src/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', function () {
    describe('getPictureTitle', function () {
        it('should send PICTURE_URL PICTURE_TITLE action', async () => {
            const path = 'my path';
            const expectedPayload = [1, 2, 3];
            const expectedActions = [
                {
                    type: PICTURE_URL,
                    payload: path
                },
                {
                    type: PICTURE_TITLE,
                    payload: expectedPayload
                }];
            ImageStore.mockSuccess();
            vision.mockSuccess(expectedPayload);
            const store = mockStore({});
            await store.dispatch(getPictureTitle({path}));
            expect(store.getActions()).toEqual(expectedActions);
        });
        it('should send PICTURE_URL ERROR_RECOGNIZER action', async () => {
            const path = 'my path';
            const errorMessage = 'Error convertation';
            const expectedActions = [
                {
                    type: PICTURE_URL,
                    payload: path
                },
                {
                    type: ERROR_RECOGNIZER,
                    payload: errorMessage
                }];
            const store = mockStore({});
            ImageStore.mockFailure(errorMessage);
            await store.dispatch(getPictureTitle({path}));
            expect(store.getActions()).toEqual(expectedActions);
        });
        it('should send PICTURE_URL ERROR_RECOGNIZER action', async () => {
            const path = 'my path';
            const errorMessage = 'Error convertation';
            const expectedActions = [
                {
                    type: PICTURE_URL,
                    payload: path
                }];
            const store = mockStore({});
            ImageStore.mockSuccess();
            vision.mockFailure(errorMessage);
            await store.dispatch(getPictureTitle({path}));
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions);

        });
    });
});