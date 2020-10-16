import { combineReducers } from "redux";
import pokedex from './pokedex/reducer';
import search from './search/reducer';

export default combineReducers({
    pokedex,
    search
});
