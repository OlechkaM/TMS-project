import { useParams } from 'react-router-dom'
import style from './OneMovie.module.css'
import { useEffect, useState } from 'react'
import { PropsOneMovie, getOneMovie } from '../Movies/getMovies'

export const OneMovie = () => {
    const { movieID } = useParams()
    const [movie, setMovie] = useState<PropsOneMovie>()

    useEffect(() => { movieID && getOneMovie(movieID).then(mov => setMovie(mov)) }, [movieID])

    if (!movie) return null
    return <>
        <div className={style.movieItem_item}>
            <img className={style.movieItem_img} src={movie.Poster} alt="poster" />
            <div className={style.movieItem_rate}>{movie.imdbRating}</div>
            <p className={style.movie_title}>{movie.Title}</p>
            <p className={style.movie_genre}>{movie.Genre}</p>
        </div>
    </>
}
