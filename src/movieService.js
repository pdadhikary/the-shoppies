const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const URL = "http://www.omdbapi.com/?";

export const getMovieList = async (callback, query, page = 1) => {
    const q = query.trim();
    let result = { query: query, movieList: [], numResults: 0, page: 1 };

    if (q) {
        const url = `${URL}apikey=${OMDB_API_KEY}&type=movie&s=${q}&page=${page}`;
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
