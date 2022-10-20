import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';

import JeepImg from '../../../assets/images/jeep.png';

const AboutUsContainer = styled.div`
    ${tw`
    flex 
    flex-wrap 
    items-center 
    w-full 
    pt-4 
    pb-4 
    bg-white 
    justify-center 
    pr-7 
    pl-7 
    md:pl-0 
    md:pr-0`
    };
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -30px;

    img {
        width:auto;
        height:100%;
    }
    
    @media(min-width: ${SCREENS.md}){        
        height: 28em;
    }
    @media(min-width: ${SCREENS.lg}){
        height: 30em;
    }
    @media(min-width: ${SCREENS["2xl"]}){
        height: 35em;
        margin-left: 0;
    }
`;

const InfoContainer = styled.div`
    ${tw` 
    flex 
    flex-col 
    md:w-1/2 
    md:ml-6 
    2xl:ml-16
    `}
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal        
    `};
`;

const InfoText = styled.p`
    ${tw`  
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `};
`;

export function AboutUs(){
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} />
            </CarContainer>
            <InfoContainer>
                <Title>Fell The Best Experience With Our Rental Deals</Title>
                <InfoText>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Optio deleniti ullam dolorum totam consequatur dolores soluta adipisci, 
                    odit voluptates dolore nihil culpa placeat. Similique corporis, 
                    architecto perferendis non id ullam?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Optio deleniti ullam dolorum totam consequatur dolores soluta adipisci, 
                    odit voluptates dolore nihil culpa placeat. Similique corporis, 
                    architecto perferendis non id ullam?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Optio deleniti ullam dolorum totam consequatur dolores soluta adipisci, 
                    odit voluptates dolore nihil culpa placeat. Similique corporis, 
                    architecto perferendis non id ullam?
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>

    );
}