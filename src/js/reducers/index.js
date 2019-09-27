import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';
import history from './car-history';

const allReducers = combineReducers({
    cars: CarsReducers,
    active: ActiveCar,
    history
});

export default allReducers;