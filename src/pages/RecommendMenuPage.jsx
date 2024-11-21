import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import HappyEmotion from '../assets/images/restaurantInfoPage/happy.png'
import SadEmotion from '../assets/images/restaurantInfoPage/sad.png'
import AngryEmotion from '../assets/images/restaurantInfoPage/angry.png'
import BoredEmotion from '../assets/images/restaurantInfoPage/bored.png'
import RecommendMenuResultPage from './RecommendMenuResultPage';

function RecommendMenuPage() {
    // navigate
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false); // 모달 상태 관리

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
              <MenuBox onClick={() => setShowModal(true)}>
                  <MenuIcon src={HappyEmotion} />
                  <MenuText>기쁨</MenuText>
              </MenuBox>
              <MenuBox onClick={() => setShowModal(true)}>
                  <MenuIcon src={SadEmotion} />
                  <MenuText>슬픔</MenuText>
              </MenuBox>
              <MenuBox onClick={() => setShowModal(true)}>
                  <MenuIcon src={AngryEmotion} />
                  <MenuText>화남</MenuText>
              </MenuBox>
              <MenuBox onClick={() => setShowModal(true)}>
                  <MenuIcon src={BoredEmotion} />
                  <MenuText>따분함</MenuText>
              </MenuBox>
            </MenuBoxWrapper>
            
            {/* 모달 */}
            {showModal && (
                <ModalBackground onClick={() => setShowModal(false)}> {/* 모달 닫기 */}
                <ModalContent onClick={(e) => e.stopPropagation()}> {/* 클릭 이벤트 전파 방지 */}
                    <ModalCloseButton onClick={() => setShowModal(false)}>×</ModalCloseButton>
                    <RecommendMenuResultPage /> {/* RecommendMenuPage 컴포넌트 */}
                </ModalContent>
                </ModalBackground>
            )}
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
    width: 15em;
    height: 20em;
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

const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #212121;
  margin-top: 10%;
  width: 50%;
  height: 40%;
  border-radius: 1em;
  overflow: hidden;
  position: relative;
  z-index: 1000;
`;

const ModalCloseButton = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  font-size: 3em;
  font-family: 'esamanru-Bold';
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;