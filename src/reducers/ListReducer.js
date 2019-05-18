const inventory = [
    { title: 'Dairy', data: ['Milk', 'Eggs'] },
    { title: 'Meats', data: ['Bacon', 'Fish', 'Ham'] },
    { title: 'Veggies', data: ['Carrots', 'Green Beans'] },
    { title: 'Fruits', data: ['Apple'] }
];

const INIT_STATE = { 
    inventory,
    meats: findGroupCount('Meats'),
    veggies: findGroupCount('Veggies'),
    fruits: findGroupCount('Fruits'),
    dairy: findGroupCount('Dairy'),
    selectedItem: '',
    };

 function findGroupCount(name) {
    const found = inventory.find(foodGroup => { return foodGroup.title === name; });
    return found.data.length;
 }

 function filterInventory(name) {
     return inventory.find(foodGroup => { return foodGroup.title === name; });
 }

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case 'INSERT_ITEM':
            return { ...state, inventory: state.inventory.concat(action.payload) };
        case 'FILTER_INVENTORY':
            return { ...state, inventory: [filterInventory(action.payload)] };
        case 'SELECTED_ITEM':
            return { ...state, 
                    selectedItem: action.payload === state.selectedItem ? '' : action.payload };
        default:
            return { ...state };
    } 
}
