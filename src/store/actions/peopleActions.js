import { createActions, handleActions } from 'redux-actions';

const defaultState = {
    list: [],
};

const {
    createPeople,
    modifyPeople,
    deletePeople
} = createActions({
    CREATE_PEOPLE: (people) => ({ people }),
    MODIFY_PEOPLE: (people) => ({ people }),
    DELETE_PEOPLE: (people) => ({ people })
});

const reducer = handleActions({
    [createPeople]: (state, { payload: { people } }) => {
        const findPeople = state.list.find((p) => p === people);
        if (!findPeople) {
            return ({
                ...state,
                list: [...state.list, people]
            })
        } else {
            return ({
                ...state                
            })
        }
    },
    [modifyPeople]: (state, { payload: { people } }) => ({
        ...state,
        list: [...state.list, people]
    }),
    [deletePeople]: (state, { payload: { people } }) => ({
        ...state,
        list: state.list.filter((currentItem) => (currentItem !== people))
    })
}, defaultState);

export {
    defaultState,
    createPeople,
    modifyPeople,
    deletePeople
};

export default reducer;
