const INIT_STATE = { 
    inventory:
        [{ key: 'Milk' }, { key: 'Eggs' },
        { key: 'Bacon' }, { key: 'Fish' },
        { key: 'Pizza' }, { key: 'Bread' },
        { key: 'Cheese' }, { key: 'Ham' }]
    };

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case 'INSERT_ITEM':
            return { ...state, inventory: state.inventory.concat(action.payload) };
        default:
            return { ...state };
    } 
}
