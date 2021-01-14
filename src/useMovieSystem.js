import { useReducer } from "react";
import { movieSystemReducer, actionTypes } from "./movieSystemReducer.js";

export const useMovieSystem = (reducer = movieSystemReducer) => {
    const defaultState = {
        searchQuery: "",
        movies: { query: "", movieList: [], numResults: 0, page: 1 },
    };

    const [{ searchQuery, movies }, dispatch] = useReducer(
        reducer,
        defaultState
    );

    const setSearchQuery = (newQuery) =>
        dispatch({ type: actionTypes.queryChange, payload: newQuery });

    const setMovies = (newMovies) =>
        dispatch({ type: actionTypes.updateMovies, payload: newMovies });

    return [searchQuery, setSearchQuery, movies, setMovies];
};
