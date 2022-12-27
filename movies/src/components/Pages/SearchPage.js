import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { ServiceAPI } from "../Services/Services";
import { Button, Result, Spin, Pagination, Input } from "antd";
import './css/SearchPage.css'
import {
    StarFilled
} from '@ant-design/icons';

function SearchPage() {
    const { query } = useParams();
    const [movies, setMovies] = useState([])
    const [spin, setSpin] = useState(true)
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const url_img = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        ServiceAPI.searchMovie(query, page).then(result => {
            setSpin(false)
            setMovies(result.results)
            setTotal(result.total_results)
        }).catch(() => {
            // TO DO
        });

    }, [query]);

    const handlePagination = (e) => {
        setPage(e)
        setSpin(true)
        handleSearchMovie(query, page)
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    const handleSearchMovie = (value) => {
        ServiceAPI.searchMovie(value, page).then(result => {
            setMovies(result.results)
            setSpin(false)
        }).catch((e) => {
            setSpin(false)

        });
    }
    return (
        <>
            <Spin spinning={spin}>
                <div className="home-wrap">
                    <div className="search-title"> <strong>{total}</strong> results for <strong>'{query}'</strong> </div>
                    <hr />
                    <div className="movie-container">

                        {
                            movies.map((movie) => {
                                return (
                                    <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id} >
                                        <div className="movie-image">
                                            <img className="movie-img" src={`${url_img}${movie.poster_path}`} alt={movie.original_title} />
                                        </div>
                                        <div className="movie-content">
                                            <div className="star">{movie.vote_average} <StarFilled /></div>
                                            <div className="vote"> {movie.vote_count} votes</div>
                                        </div>
                                        <h3 >
                                            {movie.title}
                                        </h3>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <Pagination showSizeChanger={false}
                        defaultPageSize={20}
                        defaultCurrent={1}
                        current={page}
                        total={total}
                        onChange={handlePagination}
                        className={'pagination'}
                    />
                </div>
            </Spin>
        </>
    )
}

export default SearchPage
