import React from 'react';
import './GridCard.css';
import {AiFillStar} from 'react-icons/ai';
import { Col } from 'antd';

function GridCard(props) {
    if (props.actor) {
        return (
            <Col lg={6} md={8} xs={24} >            {/*style from antd, col in antd width 24 (not same bootstrap)*/}
                <div style={{ position: 'relative' }}  >
                    <img className='movie-image' alt="img" src={props.image} />
                    <div className='title-film'>{props.title}</div>
                    <div className='rating-film'><AiFillStar/>Rating point: {props.ratepoint}/10</div>
                </div>
            </Col>
        )
    } else {
        return (
            <Col lg={6} md={8} xs={24} >            {/*style from antd, col in antd width 24 (not same bootstrap)*/}
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${props.movieId}`}>
                        <img className='movie-image' alt="img" src={props.image} />
                        <div className='title-film'>{props.title}</div>
                        <div className='rating-film'><AiFillStar/>Rating point: {props.ratepoint}/10</div>
                    </a>

                </div>
            </Col>
        )
    }

}

export default GridCard
