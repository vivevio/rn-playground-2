import {
    CHANGE_USERNAME,
    CHANGE_ROLE
} from './actionTypes';

export const changeUsername = (newName) => {
    return {
        type: CHANGE_USERNAME,
        value: newName
    }
}

export const changeRole  = (newRole) => {
    return {
        type: CHANGE_ROLE,
        value: newRole
    }
}