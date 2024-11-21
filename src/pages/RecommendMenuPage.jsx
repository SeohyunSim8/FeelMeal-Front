import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import HappyEmotion from '../assets/images/restaurantInfoPage/happy.png'
import SadEmotion from '../assets/images/restaurantInfoPage/sad.png'
import AngryEmotion from '../assets/images/restaurantInfoPage/angry.png'
import BoredEmotion from '../assets/images/restaurantInfoPage/bored.png'

function RecommendMenuPage() {
    // navigate
    const navigate = useNavigate();

    const handleEmotionInfo = (emotionInfo) => {
      navigate('/recommendMenuResult', {state: emotionInfo});
    };

    return (
        <Wrapper>
            <TitleBoxWrapper>
                <TitleText>지금 어떤 기분인가요?</TitleText>
            </TitleBoxWrapper>
          {/* todo */}
            <MenuBoxWrapper>
              <MenuBox onClick={() => handleEmotionInfo({
                        emotion: 'HAPPY'
                      })}>
                  <MenuIcon src={HappyEmotion} />
                  <MenuText>기쁨</MenuText>
              </MenuBox>
              <MenuBox onClick={() => handleEmotionInfo({
                        emotion: 'SAD'
                      })}>
                  <MenuIcon src={SadEmotion} />
                  <MenuText>슬픔</MenuText>
              </MenuBox>
              <MenuBox onClick={() => handleEmotionInfo({
                        emotion: 'ANGRY'
                      })}>
                  <MenuIcon src={AngryEmotion} />
                  <MenuText>화남</MenuText>
              </MenuBox>
              <MenuBox onClick={() => handleEmotionInfo({
                        emotion: 'BORED'
                      })}>
                  <MenuIcon src={BoredEmotion} />
                  <MenuText>따분함</MenuText>
              </MenuBox>
            </MenuBoxWrapper>
        </Wrapper>
    )
}

export default RecommendMenuPage;

const Wrapper = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const TitleBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TitleText = styled.div`
    color: #E0E0E0;
    font-family: 'esamanru-Medium';
    font-size: 2.7em;
    text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
    text-align: center;
    margin-top: 1.5em;
`;

const MenuBoxWrapper = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const MenuBox = styled.div`
    width: 18em;
    height: 22em;
    background: linear-gradient(to bottom, #FFB0A5 30%, #251E1E 85%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.9375em;
    margin: 2em;
    box-shadow: 0 1em 2em 0 rgba(255, 121, 121, 0.15);
    gap: 2.5em;
    cursor: pointer;
`;

const MenuIcon = styled.img`
    width: 10em;
    height: 10em;
`;

const MenuText = styled.div`
    font-family: 'esamanru-Bold';
    color: #fff;
    font-size: 2.2em;
`;
