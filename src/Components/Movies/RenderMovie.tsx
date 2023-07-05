import { Link } from 'react-router-dom'
import style from './Movie.module.css'
import { PropsMovie } from './getMovies'

export const RenderMovie = (props: { film: PropsMovie }) => {
    return <>
        <Link to={'/' + props.film.imdbID} >
            <div className={style.movieItem_wrapper}>
                <div className={style.movieItem_item}>
                    <div>
                        <img className={style.movieItem_img} src={props.film.Poster} alt="poster" />
                    </div>
                    <p className={style.movie_title}>{props.film.Title}</p>
                </div>
            </div>
        </Link>
    </>
}
