export const addItem = (item) => {
    return {
        type: 'INSERT_ITEM',
        payload: { key: item }
    };
};

export function selectedItem(name) {
    return {
        type: 'SELECTED_ITEM',
        payload: name
    };
}

export const isDisplayingDetails = () => {
    return {
        type: 'DISPLAY_DETAILS'
    };
};

export function filterInventory(name) {
    return {
        type: 'FILTER_INVENTORY',
        payload: name
    };
}

export const searchInventory = (flag) => {
    return {
        type: 'SEARCH_INVENTORY',
        payload: flag
    };
};
