import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function MovieCart({ nominatedMovies, handleRemoval }) {
    return (
        <>
            <h4>Nominations</h4>
            <p>{`${nominatedMovies.length} of 5 selected`}</p>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Movie Entry</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {nominatedMovies.map((entry, index) => {
                        const { id, title, year } = entry;
                        return (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td>{`${title} (${year})`}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            handleRemoval(id);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTimesCircle} />
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default MovieCart;
