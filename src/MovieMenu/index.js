import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";

const movieList = [
    {
        title: "Star Wars: Episode IV - A New Hope",
        year: "1977",
        imdbID: "tt0076759",
        isNominated: true,
        poster:
            "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        year: "1980",
        imdbID: "tt0080684",
        isNominated: false,
        poster:
            "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        title: "Star Wars: Episode VI - Return of the Jedi",
        year: "1983",
        imdbID: "tt0086190",
        isNominated: false,
        poster:
            "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
        title: "Star Wars: Episode VII - The Force Awakens",
        year: "2015",
        imdbID: "tt2488496",
        isNominated: true,
        poster:
            "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    },
    {
        title: "Star Wars: Episode I - The Phantom Menace",
        year: "1999",
        imdbID: "tt0120915",
        isNominated: false,
        poster:
            "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
        title: "Star Wars: Episode III - Revenge of the Sith",
        year: "2005",
        imdbID: "tt0121766",
        isNominated: false,
        poster:
            "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    },
    {
        title: "Star Wars: Episode II - Attack of the Clones",
        year: "2002",
        imdbID: "tt0121765",
        isNominated: false,
        poster:
            "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },
    {
        title: "Star Trek",
        year: "2009",
        imdbID: "tt0796366",
        isNominated: false,
        poster:
            "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg",
    },
    {
        title: "Star Wars: Episode VIII - The Last Jedi",
        year: "2017",
        imdbID: "tt2527336",
        isNominated: false,
        poster:
            "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    },
    {
        title: "Rogue One: A Star Wars Story",
        year: "2016",
        imdbID: "tt3748528",
        isNominated: true,
        poster:
            "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
    },
];

function MovieMenu() {
    return (
        <>
            <h4>Movie Menu</h4>
            <p>Showing results for "Star Wars"... 42 found</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Movie Name</th>
                        <th>Release year</th>
                        <th>Nominate</th>
                    </tr>
                </thead>
                <tbody>
                    {movieList.map((movie, index) => {
                        const { title, year, imdbID, isNominated } = movie;

                        return (
                            <tr key={imdbID}>
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
                <Pagination.Item active>{1}</Pagination.Item>
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
