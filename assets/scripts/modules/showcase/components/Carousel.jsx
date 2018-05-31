import React from 'react'
import Slider from 'react-slick'
import TextImage from './TextImage'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class Carousel extends React.Component{
    constructor(){
        super()
    }
    renderImages(){
        return this.props.posts.map((post,i) => {
            return (
                <div key={i} className="slider-item">
                    <TextImage post={post} overlay={true}/>
                </div>
            )
        })
    }
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: this.props.posts_per_row,
            slidesToScroll: 1
        }
        return(
            <Slider {...settings}>
                {this.renderImages()}
            </Slider>
        )
    }
}