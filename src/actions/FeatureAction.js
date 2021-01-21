export const addFeatures = item => {
    return { type: "ADD_FEATURES", payload: item}
}

export const removeFeatures = item => { 
    return { type: "REMOVE_FEATURES", payload: item }
}