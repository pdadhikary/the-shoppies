import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";

function MovieMenu({ movies }) {
    const { movieList, numResults, page, query } = movies;
    return (
        <>
            <h4>Movie Menu</h4>
            <p>
                Showing results for "{query}"... {numResults} found
            </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Movie Name</th>
                        <th>Release Year</th>
                        <th>Nominate</th>
                    </tr>
                </thead>
                <tbody>
                    {movieList.map((movie, index) => {
                        const { id, title, year, isNominated } = movie;

                        return (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td>{title}</td>
                                <td>{year}</td>
                                <td>
                                    <Button
                                        variant="success"
                                        disabled={isNominated}
                                    >
                                        Nominate
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Pagination className="justify-content-center">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </>
    );
}

export default MovieMenu;
