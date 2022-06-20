
const local = JSON.parse(localStorage.getItem("data"));
const initialProduct = {
    products: local ? local.products : []
};

const removeProduct = (state, action) => {
    const newProds = [...state.products];

    const idx = newProds.findIndex(prod => prod.slug === action.slug);
    newProds.splice(idx, 1);

    return newProds;
}

const removeProductCategory = (state, action) => {
    const newProds = [...state.products];

    return newProds.filter(prod => prod.slug !== action.slug);
}

const saveToLocalStorage = (products) => {
    localStorage.setItem("data", JSON.stringify({ products }));
}

function reducer(state = initialProduct, action) {
    switch (action.type) {
        case "ADD_PRODUCT":
            const updatedState = [...state.products, action.data];
            saveToLocalStorage(updatedState);

            return {
                ...state,
                products: updatedState
            };
        case "REMOVE_PRODUCT":
            const removedState = removeProduct(state, action);
            saveToLocalStorage(removedState);

            return {
                ...state,
                products: removedState
            };
        case "REMOVE_PRODUCT_CATEGORY":
            const removedStateAll = removeProductCategory(state, action);
            saveToLocalStorage(removedStateAll);

            return {
                ...state,
                products: removedStateAll
            };
        default:
            return state;
    }
}

export default reducer;