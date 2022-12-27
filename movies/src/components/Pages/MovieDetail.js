import React, { useEffect, useLayoutEffect, useState, useMemo } from 'react';
import Helmet from "../Layout/Helmet";
import { Link, useParams } from 'react-router-dom';
import { ServiceAPI } from '../Services/Services';
import './css/MoviePage.css'
import {
    StarFilled
} from '@ant-design/icons';
import { Result, Spin, Button } from 'antd';
export default function MoviePages() {
    const { id } = useParams();
    const url_img = 'https://image.tmdb.org/t/p/w500'
    const [movie, setMovie] = useState([])
    const [spin, setSpin] = useState(true)
    const [err, setErr] = useState('')

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        ServiceAPI.getMovieById(id).then(result => {
            setMovie(result)
            setSpin(false)
        }).catch((e) => {
            setSpin(false)
            setErr(e)
        });
    }, [id]);

    return (
        <>
            <Helmet title={movie.title || 'Movies Project'}>
                <Spin spinning={spin}>
                    {
                        err ?
                            <div className='container-error'>
                                <Result
                                    status="404"
                                    title={err}
                                    subTitle="Sorry, something went wrong."
                                    extra={<Link to={'/'}><Button type="primary">Back Home</Button></Link>}
                                />
                            </div> :
                            <div className='container'>
                                <img className='img' src={`${url_img}${movie.poster_path}`} alt={movie.original_title} />
                                <div className='info-movie'>
                                    <h3>{movie.title}</h3>
                                    <div className="movie-content">
                                        <div className="star">{movie.vote_average} <StarFilled /></div>
                                        <div className="vote"> {movie.vote_count} votes</div>
                                    </div>
                                    <div className="movie-content">
                                        <span>Genres: </span>
                                        {
                                            movie.genres ? movie.genres.map((item) => {
                                                return (
                                                    <>
                                                        <strong key={item.id}> {item.name}</strong>
                                                    </>
                                                )
                                            }) : ''
                                        }
                                    </div>
                                    <div className="movie-content">
                                        Status: <strong> {movie.status} </strong>
                                    </div>
                                    <div className="movie-content">
                                        Release date:<strong> {movie.release_date} </strong>
                                    </div>
                                    <div className="movie-content">
                                        Run time: <strong> {movie.runtime} </strong> minutes
                                    </div>
                                    <div className="movie-content">
                                        Popularity: <strong> {movie.popularity} </strong>
                                    </div>
                                    <div className="movie-content">
                                        Tagline: <strong> {movie.tagline} </strong>
                                    </div>
                                    <div className="movie-content">
                                        <span>Languages: </span>
                                        {
                                            movie.spoken_languages ? movie.spoken_languages.map((item) => {
                                                return (
                                                    <>
                                                        <strong key={item.iso_639_1}> {item.name} </strong>
                                                    </>
                                                )
                                            }) : ''
                                        }
                                    </div>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                    }
                </Spin>
            </Helmet>
        </>
    )
}