import { useReducer } from "react";
import { movieSystemReducer, actionTypes } from "./movieSystemReducer.js";

export const useMovieSystem = (reducer = movieSystemReducer) => {
    const defaultState = {
        searchQuery: "",
        movies: { query: "", movieList: [], numResults: 0, page: 1 },
        nominatedMovies: [],
    };

    const [{ searchQuery, movies, nominatedMovies }, dispatch] = useReducer(
        reducer,
        defaultState
    );

    const setSearchQuery = (newQuery) =>
        dispatch({ type: actionTypes.queryChange, payload: newQuery });

    const setMovies = (newMovies) =>
        dispatch({ type: actionTypes.updateMovies, payload: newMovies });

    const nominateMovie = (movieId) =>
        dispatch({ type: actionTypes.nominateMovie, payload: movieId });

    const removeMovie = (movieId) =>
        dispatch({ type: actionTypes.removeMovie, payload: movieId });

    return [
        searchQuery,
        setSearchQuery,
        movies,
        setMovies,
        nominatedMovies,
        nominateMovie,
        removeMovie,
    ];
};
