import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL, IMAGE_URL } from '../../Config';
import './LandingPage.css';
import {AiFillVideoCamera} from 'react-icons/ai';
import { Typography, Row } from 'antd';
import MainImage from './Sections/MainImage';
import GridCard from './Sections/GridCard';
import TopFilm from './Sections/TopFilm';
const { Title } = Typography;


function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [CurrentPage, setCurrentPage] = useState(0)

    useEffect(() => {

        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetchMovies(endpoint)
    }, [])
    
    const fetchMovies = (path) =>{
        

        fetch(path)
        .then(response=> response.json())
        .then(response => {
            console.log(response);
            setMovies([...Movies, ...response.results])     //make Movie as array, use Spread Operator in javascript!!!
            setCurrentPage(response.page)
            console.log('duyy',Movies);
        })
    }

    const handleClick = () => {
        // const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`

        // fetchMovies(endpoint);
    }

    const newMovie = Movies.slice(0,12);
    console.log('new',newMovie);

    return (
        <div style={{ width:'100%', margin: 0 }}>

            {/* Movie Main Image */}
            {Movies[0] &&                   
                <MainImage image={`${IMAGE_URL}w1280${Movies[0].backdrop_path && Movies[0].backdrop_path}`}
                 title={Movies[0].original_title} text={Movies[0].overview} />
            }
            {console.log('duyyyyy',Movies)}
            {/* Body */}
            <div className='landing_body'>
                <Title level={2} ><div className='movie-type-title'> <AiFillVideoCamera className='film-icon'/> Movies Nomitions</div></Title>
                <hr />
                {/* Grid Cards */}
                <Row gutter={[16, 16]}>
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>

                            <GridCard
                                image={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
                                movieId={movie.id}
                                title={movie.original_title}
                                ratepoint={movie.vote_average}
                            />
                        </React.Fragment>
                    ))}
                </Row>
                {/* Load More Button */}
                {/* <br />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button onClick={handleClick}> Load More</button>
                </div> */}

            </div>

            <div className='landing_body'>
                <Title level={2} ><div className='movie-type-title'> <AiFillVideoCamera className='film-icon'/>Top 5</div></Title>
                <hr />
                {/* Grid Cards */}
                <Row gutter={[4, 4]}>
                    {newMovie && newMovie.map((movie, index) => (
                        <React.Fragment key={index}>
                    
                            <TopFilm
                                image={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
                                movieId={movie.id}
                                title={movie.original_title}
                                ratepoint={movie.vote_average}
                            />
                        </React.Fragment>
                    ))}
                </Row>
                {/* Load More Button */}
                {/* <br />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button onClick={handleClick}> Load More</button>
                </div> */}

            </div>

            <div className='landing_body'>
                <Title level={2} ><div className='movie-type-title'> <AiFillVideoCamera className='film-icon'/> Movies Theaters</div></Title>
                <hr />
                {/* Grid Cards */}
                <Row gutter={[16, 16]}>
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCard
                                image={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
                                movieId={movie.id}
                            />
                        </React.Fragment>
                    ))}
                </Row>
                {/* Load More Button */}
                {/* <br />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button onClick={handleClick}> Load More</button>
                </div> */}

            </div>
                
            {/* <div style={{ width:'85%', margin:'1rem auto'}}>
                <Title level={2} ><AiFillVideoCamera/>  Movies Series News</Title>
                <hr />
                Grid Cards
                <Row gutter={[16, 16]}>
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>

                            <GridCard
                                image={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
                                movieId={movie.id}
                            />
                        </React.Fragment>
                    ))}
                </Row>
                Load More Button
                <br />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button onClick={handleClick}> Load More</button>
                </div>
            </div> */}

        </div>
    )
}

export default LandingPage
