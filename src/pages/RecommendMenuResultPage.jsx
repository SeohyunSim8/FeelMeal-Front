import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuRecommendMenu from '../assets/images/mainPage/menuRecommend.png'
import MyPageMenu from '../assets/images/mainPage/myPage.png'
import { useNavigate } from 'react-router-dom'
import HappyEmotion from '../assets/images/restaurantInfoPage/happy.png'
import SadEmotion from '../assets/images/restaurantInfoPage/sad.png'
import AngryEmotion from '../assets/images/restaurantInfoPage/angry.png'
import BoredEmotion from '../assets/images/restaurantInfoPage/bored.png'

function RecommendMenuPage() {
    return (
        <Wrapper>
            <ContentBoxWrapper>
                <ContentText>을 추천할게요</ContentText>
            </ContentBoxWrapper>
        </Wrapper>
    )
}

export default RecommendMenuPage;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const ContentBoxWrapper = styled.div`
    margin-top: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentText = styled.div`
    font-family: 'esamanru-Medium';
    color: #fff;
    font-size: 2.5em;
`;
