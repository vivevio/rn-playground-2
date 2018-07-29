import {
    CHANGE_USERNAME,
    CHANGE_ROLE
} from '../actions/actionTypes';

const InitalState = {
    userName: 'Vive Vio Permana',
    userRole: 'Manusia'
}
export default ( state = InitalState, action ) => {
    switch( action.type ) {
        case CHANGE_USERNAME:
            return { ...state, userName: action.value };
        case CHANGE_ROLE:
            return { ...state, userRole: action.value }
        default:
            return state;
    }
}