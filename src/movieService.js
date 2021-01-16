import { OMDB_API_KEY, OMDB_URL } from "./constants.js";

export const getMovieList = async (callback, query, page = 1) => {
    const q = query.trim();
    let result = { query: query, movieList: [], numResults: 0, page: 1 };

    if (q) {
        const url = `${OMDB_URL}apikey=${OMDB_API_KEY}&type=movie&s=${q}&page=${page}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                result.query = query;
                result.movieList = data.Search.map((entry) => {
                    return {
                        id: entry.imdbID,
                        title: entry.Title,
                        year: entry.Year,
                        isNominated: false,
                    };
                });

                result.numResults = data.totalResults;
                result.page = page;
            }
        } catch (err) {
            console.log("Could not fetch data!");
        }
    }

    callback(result);
};
