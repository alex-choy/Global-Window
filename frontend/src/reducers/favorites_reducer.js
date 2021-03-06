import {
  RECEIVE_FAVORITE,
  REMOVE_FAVORITE,
  RECEIVE_USER_FAVES,
} from "../actions/favorite_actions";

export default function (state = {}, action) {
    Object.freeze(state);
    let newState = { ...state };
    switch (action.type) {
        case RECEIVE_USER_FAVES:
            let newObj = {};
            action.photoIds.data.forEach(favorites => {
                newObj[favorites._id] = favorites;
            });
            return newObj;
        case RECEIVE_FAVORITE:
            newState[action.favorite.data.photoId] = action.favorite.data;
            return newState;
        case REMOVE_FAVORITE:
            delete newState[action.id.data];
            return newState;
        default:
            return state;
    }
};
