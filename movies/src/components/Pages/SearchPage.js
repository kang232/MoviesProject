import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { ServiceAPI } from "../Services/Services";
import { Spin, Pagination, notification } from "antd";
import './css/SearchPage.css'
import {
    StarFilled
} from '@ant-design/icons';
import { SearchContext } from '../ContextProvider/SearchContextProvider';

function SearchPage() {
    const [movies, setMovies] = useState([])
    const [spin, setSpin] = useState(true)
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const url_img = 'https://image.tmdb.org/t/p/w500'
    const { data } = React.useContext(SearchContext);

    useEffect(() => {
        handleSearchMovie(data)
    }, [data]);

    const handlePagination = (e) => {
        setSpin(true)
        setPage(e)
        handleSearchMovie(data, page)
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    const handleSearchMovie = (value) => {
        setSpin(true)
        ServiceAPI.searchMovie(value, page).then(result => {
            setMovies(result.results)
            setTotal(result.total_results)
            setSpin(false)
        }).catch((e) => {
            setSpin(false)
            notification.error({ message: e.errors[0] })
        });
    }
    return (
        <>
            <Spin spinning={spin}>
                <div className="home-wrap">
                    <div className="search-title"> <strong>{total}</strong> results for <strong>'{data}'</strong> </div>
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
