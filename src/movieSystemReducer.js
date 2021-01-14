export const actionTypes = {
    queryChange: "QUERY_CHANGE",
    updateMovies: "UPDATE_MOVIES",
};

export const movieSystemReducer = (state, action) => {
    if (action.type === actionTypes.queryChange) {
        const newQuery = action.payload;
        // console.log(newQuery);
        return {
            ...state,
            searchQuery: newQuery,
        };
    }

    if (action.type === actionTypes.updateMovies) {
        const newMovies = action.payload;
        // console.log(newMovies);
        return {
            ...state,
            movies: newMovies,
        };
    }
    throw new Error(`Unhandled type: ${action.type}`);
};
