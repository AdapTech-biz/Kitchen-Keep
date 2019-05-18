const INIT_STATE = { search: false };

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'SEARCH_INVENTORY':
            return { ...state, search: action.payload };
        default:
            return state;
    }
};
