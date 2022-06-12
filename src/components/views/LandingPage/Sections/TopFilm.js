import React from 'react';
import { Col } from 'antd';
import {AiFillStar} from 'react-icons/ai';
function TopFilm(props) {   
        return (
            <Col lg={6} md={8} xs={24} >         
                <div style={{ position: 'relative' }}  >
                    <img className='movie-image' alt="img" src={props.image} />
                    <div className='title-film'>{props.title}</div>
                    <div className='rating-film'><AiFillStar/>Rating point: {props.ratepoint}/10</div>
                </div>
            </Col>
        )
}

export default TopFilm