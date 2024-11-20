import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Korean from '../assets/images/levelPage/korean.png';
import Japanese from '../assets/images/levelPage/japanese.png';
import Chinese from '../assets/images/levelPage/chinese.png';
import American from '../assets/images/levelPage/american.png';
import CardBack1 from '../assets/images/levelPage/cardback1.png';
import CardBack2 from '../assets/images/levelPage/cardback2.png';
import CardBack3 from '../assets/images/levelPage/cardback3.png';
import Table from '../assets/images/levelPage/table.png';

export default function MenuCategoryPage() {
  const navigate = useNavigate();

  //Todo
  const handleMenuCategory = (levelInfo) => {
    navigate('/levelInfo', {state: levelInfo});
  };

  return (
    <PageWrapper>
      {/* <OvalBackground/>
      <HalfOval />
      <HalfOval2 />
      <BlurOverlay /> */}
      <ImgWrapper>
        <GroupImg src={Table} />
      
      <LayOut>
        <MainTitle>음식 종류</MainTitle>
        <MenuCategoryWrapper>
          <MenuCategoryBox>
            <CardBoxHover>
              <CardInner>
                <CardFront src={Korean} alt="한식" />
                <CardBack $backgroundImage={CardBack3}>
                  <TextWrapper>
                    <MenuCategoryText>한식</MenuCategoryText>
                    <MenuCategoryTextBottom>
                      김치찌개, 제육,
                      <br />
                      칼국수, 삼계탕 등
                    </MenuCategoryTextBottom>
                  </TextWrapper>
                  <ButtonWrapper>
                    <SelectButton onClick={() => handleMenuCategory({
                      category: 'KOREAN'
                    })}>선택</SelectButton>
                  </ButtonWrapper>
                </CardBack>
              </CardInner>
            </CardBoxHover>
          </MenuCategoryBox>
          <MenuCategoryBox>
            <CardBoxHover>
              <CardInner>
                <CardFront src={Japanese} alt="일식" />
                <CardBack $backgroundImage={CardBack1}>
                  <TextWrapper>
                    <MenuCategoryText>일식</MenuCategoryText>
                    <MenuCategoryTextBottom>
                      초밥, 돈까스,
                      <br />
                      라멘, 덮밥 등
                    </MenuCategoryTextBottom>
                  </TextWrapper>
                  <ButtonWrapper>
                    <SelectButton onClick={() => handleMenuCategory({
                      category: 'JAPANESE'
                    })}>선택</SelectButton>
                  </ButtonWrapper>
                </CardBack>
              </CardInner>
            </CardBoxHover>
          </MenuCategoryBox>
          <MenuCategoryBox>
            <CardBoxHover>
              <CardInner>
                <CardFront src={Chinese} alt="중식" />
                <CardBack $backgroundImage={CardBack2}>
                  <TextWrapper>
                    <MenuCategoryText>중식</MenuCategoryText>
                    <MenuCategoryTextBottom>
                      짜장면, 마라탕,
                      <br />
                      우육면, 양꼬치 등
                    </MenuCategoryTextBottom>
                  </TextWrapper>
                  <ButtonWrapper>
                    <SelectButton onClick={() => handleMenuCategory({
                      category: 'CHINESE'
                    })}>선택</SelectButton>
                  </ButtonWrapper>
                </CardBack>
              </CardInner>
            </CardBoxHover>
          </MenuCategoryBox>
          <MenuCategoryBox>
            <CardBoxHover>
              <CardInner>
                <CardFront src={American} alt="양식" />
                <CardBack $backgroundImage={CardBack3}>
                  <TextWrapper>
                    <MenuCategoryText>양식</MenuCategoryText>
                    <MenuCategoryTextBottom>
                      햄버거, 파스타,
                      <br />
                      피자, 스테이크 등
                    </MenuCategoryTextBottom>
                  </TextWrapper>
                  <ButtonWrapper>
                    <SelectButton onClick={() => handleMenuCategory({
                      category: 'AMERICAN'
                    })}>선택</SelectButton>
                  </ButtonWrapper>
                </CardBack>
              </CardInner>
            </CardBoxHover>
          </MenuCategoryBox>
        </MenuCategoryWrapper>
      </LayOut>
      </ImgWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 6em);
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 100%;
`;

const GroupImg = styled.img`
  width: 100%;
  height: 85vh;
  position: absolute;
  bottom: 0em;
`;

const LayOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MainTitle = styled.div`
  color: #251E1E;
  position: absolute;
  top: 2.8em;
  font-size: 4em;
  font-family: 'Vitro-Core';
  z-index: 1000;
`;

const MenuCategoryWrapper = styled.div`
  gap: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 11em;
  padding-left: 1em;
  padding-right:1em;
  width: 100%;
  height: 100%;

  scroll-behavior: smooth;

  &::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
      background: none;
  }

  &:hover::-webkit-scrollbar-thumb {
    border-radius: 1.875em;
    background-color: #B01814;
  }

  @media (max-width: 90em) {
    width: 60em;
    height: 25em;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    justify-content: flex-start;
  }

  @media (max-width: 65em) {
    width: 38em;
    height: 25em;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    justify-content: flex-start;
    padding-left: 3em;
  }

  @media (max-width: 45em) {
    width: 16em;
    height: 25em;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    justify-content: flex-start;
    padding-left: 3em;
  }
`;

const MenuCategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 23em;
`;

const CardBox = styled.div`
  width: 13.049375em;
  height: 17.9375em;
  position: relative;
  perspective: 62.5em;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

const CardFront = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
`;

const CardBack = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: 85%;
  backface-visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
`;

const MenuCategoryText = styled.div`
  font-family: 'Vitro-Core';
  font-size: 2.5em;
  text-align: center;
  position: absolute;
  top: 2.5em;
  text-shadow: 0 0.08em 0.08em rgba(0, 0, 0, 0.3);
`;

const MenuCategoryTextBottom = styled.div`
  font-family: 'Vitro-Inspire';
  font-size: 1.14em;
  text-align: center;
  position: absolute;
  top: 9.5em;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 10.85em;
  height: 3em;
  opacity: 0;
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  position: absolute;
  bottom: -2.5em;
  backface-visibility: hidden;
`;

const SelectButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 0.375em;
  border: none;
  background-color: #fff;
  color: #000000;
  font-size: 2em;
  font-family: 'Vitro-Core';
  box-shadow: 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const CardBoxHover = styled(CardBox)`
  &:hover ${CardInner} {
    transform: rotateY(180deg);
  }

  &:hover ${TextWrapper}, &:hover ${ButtonWrapper} {
    opacity: 1;
  }
`;