import { useReducer } from "react";
import { movieSystemReducer, actionTypes } from "./movieSystemReducer.js";

import store from "store";

export const useMovieSystem = (reducer = movieSystemReducer) => {
    const prevSearchQuery = store.get("searchQuery");
    const prevNominatedMovies = store.get("nominatedMovies");

    const defaultState = {
        searchQuery: prevSearchQuery ? prevSearchQuery : "",
        movies: { query: "", movieList: [], numResults: 0, page: 1 },
        nominatedMovies: prevNominatedMovies ? prevNominatedMovies : [],
        showCompletionModal: false,
    };

    const [
        { searchQuery, movies, nominatedMovies, showCompletionModal },
        dispatch,
    ] = useReducer(reducer, defaultState);

    const setSearchQuery = (newQuery) =>
        dispatch({ type: actionTypes.queryChange, payload: newQuery });

    const setMovies = (newMovies) =>
        dispatch({ type: actionTypes.updateMovies, payload: newMovies });

    const nominateMovie = (movieId) =>
        dispatch({ type: actionTypes.nominateMovie, payload: movieId });

    const removeMovie = (movieId) =>
        dispatch({ type: actionTypes.removeMovie, payload: movieId });

    const closeCompletionModal = () =>
        dispatch({ type: actionTypes.closeCompletionModal });

    return [
        searchQuery,
        setSearchQuery,
        movies,
        setMovies,
        nominatedMovies,
        nominateMovie,
        removeMovie,
        showCompletionModal,
        closeCompletionModal,
    ];
};
