import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

const HomeBlock = styled.div`
    .sl {
        margin-top: 100px;
    }

    .mouse {
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .mouse .mouse-over {
        margin: 50px 30px;
        overflow: hidden;
    }

    .mouse .mouse-over img:hover {
        transform: scale(1.1); transition: transform .8s;
    }

    .section3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .section4 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

export default class Header extends Component {

    render () {
    return (
        <HomeBlock>
        <Carousel variant="dark" className='sl'>
             <Carousel.Item>
                <img
                className="d-block w-100"
                img src={require('./img/banner11.png')}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                img src={require('./img/banner12.png')}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                img src={require('./img/banner13.png')}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <section className="section2">
        <div className="pdds">

            <div className="mouse">
                <div className="mouse-over">
                    <img src={require('./img/main1_plan.png')} 
                       onMouseOver={e => (e.currentTarget.src = require('./img/main1_plan_over.png'))}
                       onMouseOut={e => (e.currentTarget.src = require('./img/main1_plan.png'))}
                    />

                </div>
                <div className="mouse-over">
                    <img src={require('./img/main1_deliv.png')} 
                        onMouseOver={e => (e.currentTarget.src = require('./img/main1_deliv_over.png'))}
                        onMouseOut={e => (e.currentTarget.src = require('./img/main1_deliv.png'))}
                    />
                </div>
                <div className="mouse-over">
                    <img src={require('./img/main1_design.png')}
                        onMouseOver={e => (e.currentTarget.src = require('./img/main1_design_over.png'))}
                        onMouseOut={e => (e.currentTarget.src = require('./img/main1_design.png'))}
                    />
                </div>
                <div className="mouse-over">
                    <img src={require('./img/main1_struct.png')} 
                        onMouseOver={e => (e.currentTarget.src = require('./img/main1_struct_over.png'))}
                        onMouseOut={e => (e.currentTarget.src = require('./img/main1_struct.png'))}
                    />
                </div>
            </div>

        </div>
        </section>

        <section class="section3">
            <div class="about">
                <img src={require('./img/main2_contents2.png')} alt="about" />
            </div>
            <div class="button">
                <a href="/" type="button">
                    <img src={require('./img/main_contents2_link.png')} alt="button" />
                </a>
            </div>
        </section>

        <section class="section4">
            <div class="service"><img src={require('./img/main2_contents3.png')} alt="service" /></div>
            <div class="map"><img src={require('./img/main2_contents4.png')} alt="map" /></div>
        </section>
        </HomeBlock>
     );
    }
  }