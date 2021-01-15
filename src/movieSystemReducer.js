const MAX_NOMINAIONS = 5;

export const actionTypes = {
    queryChange: "QUERY_CHANGE",
    updateMovies: "UPDATE_MOVIES",
    nominateMovie: "NOMINATE",
    removeMovie: "REMOVE",
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
        const nominatedMovieIds = state.nominatedMovies.map(
            (movie) => movie.id
        );
        const newMovies = action.payload;
        newMovies.movieList = newMovies.movieList.map((entry) => {
            return {
                ...entry,
                isNominated: nominatedMovieIds.includes(entry.id),
            };
        });
        console.log(newMovies);
        return {
            ...state,
            movies: newMovies,
        };
    }

    if (action.type === actionTypes.nominateMovie) {
        let newMovies = state.movies;
        let newNominatedMovies = state.nominatedMovies;

        if (newNominatedMovies.length < MAX_NOMINAIONS) {
            const newMovieId = action.payload;
            const newMovieList = state.movies.movieList.map((movie) => {
                return {
                    ...movie,
                    isNominated: movie.isNominated || movie.id === newMovieId,
                };
            });
            newMovies = { ...state.movies, movieList: newMovieList };
            const newlyNominated = newMovieList.filter(
                (entry) => entry.id === newMovieId
            );
            newNominatedMovies = [...newlyNominated, ...state.nominatedMovies];
            console.log({ newMovies, newNominatedMovies });
        }
        return {
            ...state,
            movies: newMovies,
            nominatedMovies: newNominatedMovies,
        };
    }

    if (action.type === actionTypes.removeMovie) {
        const movieId = action.payload;
        const newNominatedMovies = state.nominatedMovies.filter(
            (entry) => entry.id !== movieId
        );
        const newMovies = { ...state.movies };
        newMovies.movieList = state.movies.movieList.map((entry) => {
            return {
                ...entry,
                isNominated: entry.id !== movieId && entry.isNominated,
            };
        });

        console.log(`remove movie: with id ${movieId}`);
        return {
            ...state,
            movies: newMovies,
            nominatedMovies: newNominatedMovies,
        };
    }

    throw new Error(`Unhandled type: ${action.type}`);
};
