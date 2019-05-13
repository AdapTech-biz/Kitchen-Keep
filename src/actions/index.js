export const addItem = (item) => {
    return {
        type: 'INSERT_ITEM',
        payload: { key: item }
    };
};
