const initialProduct = {
    products: []
};

const removeProduct = (state, action) => {
    const newProds = [...state.products];

    const idx = newProds.findIndex(prod => prod.slug == action.slug);
    newProds.splice(idx, 1);

    return newProds;
}

const removeProductCategory = (state, action) => {
    const newProds = [...state.products];

    const idx = newProds.findIndex(prod => prod.slug == action.slug);
    newProds.splice(idx, 1);

    return newProds;
}

function reducer(state = initialProduct, action) {
    console.log("pre", state);
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.data]
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                products: removeProduct(state, action)
            };
        case "REMOVE_PRODUCT_CATEGORY":
            return {
                ...state,
                products: removeProductCategory(state, action)
            };
        default:
            return state;
    }
}

export default reducer;