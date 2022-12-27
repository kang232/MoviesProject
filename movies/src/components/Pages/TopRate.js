import React, { useEffect, useCallback, useState, useNavigatt, useRef } from "react";
import { ServiceAPI } from "../Services/Services";
import { notification, Result, Spin, Pagination, Input } from "antd";
import './css/HomePage.css'
import { Link } from 'react-router-dom';
import Helmet from "../Layout/Helmet";
import PullToRefresh from 'pulltorefreshjs';
import {
    StarFilled
} from '@ant-design/icons';
const { Search } = Input

function TopRate() {
    const [movies, setMovies] = useState([])
    const [spin, setSpin] = useState(true)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const url_img = 'https://image.tmdb.org/t/p/w500'
    useEffect(() => {
        handleSearch(page)
        PullToRefresh.init({
            mainElement: '#wrap',
            onRefresh: function () {
                handleSearch(1)
                setPage(1)
            }
        });
    }, [])
    const handlePagination = (e) => {
        setPage(e)
        setSpin(true)
        handleSearch(e)
        window.scroll({ top: 0, behavior: 'smooth' })
    }
    const handleSearch = (page) => {
        ServiceAPI.searchTopRate(page).then(result => {
            setMovies(result.results)
            setTotal(result.total_results)
            setSpin(false)
        }).catch((e) => {
            notification.error({message: e.errors[0]})
            setSpin(false)
        });
    }


    return (
        <>
            <Helmet title={'Current Movies'}>
                <Spin spinning={spin}>
                    <div className="home-wrap" id="wrap">
                        <h2>List of the top rate movies</h2>
                        <hr />
                        <div className="movie-container">
                            {
                                movies.map((movie) => {
                                    return (
                                        <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id} >
                                            <div className="movie-image">
                                                <img loading="lazy" id='image' className="movie-img" src={`${url_img}${movie.poster_path}`} alt={movie.original_title} />
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
            </Helmet>
        </>
    )
}

export default TopRate
