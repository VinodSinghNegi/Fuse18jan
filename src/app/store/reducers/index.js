import {combineReducers} from 'redux';
import fuse from './fuse';
import { permissions } from './apiReducers';
import auth from 'app/auth/store/reducers';
import client from 'app/main/client/store/reducers';
import products from 'app/main/products/store/reducers';
import staff from 'app/main/staff/store/reducers';
import services from 'app/main/services/store/reducers';
import agenda from 'app/main/agenda/store/reducers';
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers';

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        client,
        products,
        staff,
        services,
        agenda,
        permissions,
        fuse,
        quickPanel,
        ...asyncReducers
    });

export default createReducer;
