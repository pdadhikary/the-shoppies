import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import Spinner from "react-bootstrap/Spinner";

import { getMovieList } from "../movieService";

function MovieMenu({
    searchQuery,
    movies,
    handleNomination,
    handlePageUpdate,
    isLoading,
    setLoading,
}) {
    const { movieList, numResults, page, query } = movies;

    const maxPageNumber = Math.ceil(numResults / 10);
    const handleNext = () => {
        setLoading(true);
        getMovieList(
            (newMovies) => {
                handlePageUpdate(newMovies);
                setLoading(false);
            },
            query,
            page + 1
        );
    };
    const handlePrev = () => {
        setLoading(true);
        getMovieList(
            (newMovies) => {
                handlePageUpdate(newMovies);
                setLoading(false);
            },
            query,
            page - 1
        );
    };

    return (
        <>
            <h4>Movie Menu</h4>
            <p>
                Showing results for "{query}"...{" "}
                <b className={numResults > 0 ? "text-success" : "text-danger"}>
                    {numResults}
                </b>{" "}
                movies found
            </p>

            <Pagination size="sm" className="justify-content-center">
                <Pagination.Prev
                    onClick={handlePrev}
                    disabled={page === 1 || isLoading}
                />
                <Pagination.Item className="pl-4 pr-4" active>
                    {page}
                </Pagination.Item>
                <Pagination.Next
                    onClick={handleNext}
                    disabled={
                        numResults === 0 || page === maxPageNumber || isLoading
                    }
                />
            </Pagination>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Movie Name</th>
                        <th>Release Year</th>
                        <th>Nominate</th>
                    </tr>
                </thead>
                {isLoading ? (
                    <></>
                ) : (
                    <tbody>
                        {movieList.map((movie, index) => {
                            const { id, title, year, isNominated } = movie;

                            return (
                                <tr key={id}>
                                    <td>{10 * (page - 1) + (index + 1)}</td>
                                    <td>{title}</td>
                                    <td>{year}</td>
                                    <td>
                                        <Button
                                            variant="success"
                                            disabled={isNominated}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNomination(id);
                                            }}
                                        >
                                            Nominate
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                )}
            </Table>
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <Spinner
                        className="mt-4 mb-4"
                        animation="border"
                        variant="info"
                    />
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default MovieMenu;
