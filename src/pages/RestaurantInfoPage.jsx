import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { getProficiencyListAPI } from '../apis/theme/getProficiencyListAPI'; // api 파일

export default function MypagePage() {
//todo
  // state 관리
  const [profName, setProfName] = useState([]);
  const [profDescription, setProfDescription] = useState([]);
  const [cafeLists, setCafeLists] = useState([]);
  const [page,] = useState('1');

  // useLocation
  const location = useLocation();
  const {level} = location.state || {};

  useEffect(() => {
    const fetchStudies = async () => {
        try {
            const response = await getProficiencyListAPI(level, page);
            console.log('받은 데이터:', response);
            setProfName(response.profName);  // 레벨
            setProfDescription(response.profDescription);  // 설명
            setCafeLists(response.contents);  // 리스트
        } catch (error) {
            console.error('카페 목록 데이터를 불러오는 중 오류 발생:', error);
        }
    };
    fetchStudies();
  }, [level, page]);


  return (
    <Wrapper>
      <Container>
        {/* 식당 정보 */}
        <InfoWrapper>
            <Info>
              {/* todo */}
                <InfoContent>
                    <InfoText>내 위치내 위치내 위치</InfoText>
                </InfoContent>
                <InfoContent>
                    <InfoText>내 위치내 위치내 위치</InfoText>
                </InfoContent>
                <InfoContent>
                    <InfoText>내 위치</InfoText>
                </InfoContent>
            </Info>
        </InfoWrapper>
        {/* 메뉴 */}
        <MenuListWrapper>
          <MenuList>
            <RecommendButton>지금 감정에 먹기 좋은 메뉴 추천받기</RecommendButton>
            <TableHeaderWrapper>
              <TableHeader1>메뉴</TableHeader1>
            </TableHeaderWrapper>
            <Table>
              <tbody>
                {/* todo */}
                {cafeLists.map((cafe) => (
                  <TableRow key={cafe.themeId}>
                    <TableData>{cafe.cityName}</TableData>
                    <TableData>{cafe.townName}</TableData>
                    <TableData>{cafe.pointName}</TableData>
                    <TableData>{cafe.themeName}</TableData>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </MenuList>
        </MenuListWrapper>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 85%;
  height: 100%;
  border-radius: 1.25em;
  background-color: #373737;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  padding: 3em;
  margin: 1.5em;
`;

const InfoWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Info = styled.div`
  background-color: #787878;
  border-radius: 0.9375em;
  padding: 0.5em;
  overflow-y: auto;
  display: flex;
  align-items: center;
  gap: 1em;
  width: 100%;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8x;
    background: none;
  }
  &:hover::-webkit-scrollbar-thumb {
      border-radius: 30px;
      background-color: darkgray;
  }
`;

const InfoHeader = styled.div`
    color: #fff;
    font-family: 'Pretendard-Medium';
    font-size: 1.3em;
    text-align: center;
    border-radius: 0.9615em;
    width: auto;
    margin-left: 1.5em;
`;

const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    gap: 0.1em;
    padding: 0.5em;
`;

const InfoText = styled.div`
    color: #fff;
    font-family: 'Pretendard-Medium';
    font-size: 1.2em;
    font-weight: 500;
    padding: 0.5em;
`;

const RecommendButton = styled.div`
    margin-right: 1em;
    border: none;
    border-radius: 0.5em;
    width: 100%;
    height: 2.5em;
    line-height: 2.5em;
    text-align: center;
    background-color: #940000;
    color: white;
    font-family: 'Pretendard-Medium';
    font-size: 1.3em;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        filter: brightness(80%);
    }
`;

const MenuListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuList = styled.div`
  width: 100%;
  height: 28em;
  background-color: #787878;
  border-radius: 0.9375em;
  padding: 0.5em;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8x;
    background: none;
  }
  &:hover::-webkit-scrollbar-thumb {
      border-radius: 30px;
      background-color: darkgray;
  }
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  margin-top: 3em;
`;

const TableRow = styled.tr``;

const TableHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1em;
`;

const TableHeader1 = styled.div`
  padding: 0.6em;
  background-color: rgba(56, 50, 50, 0.7);
  color: #fff;
  font-family: 'Pretendard-Medium';
  font-size: 1.3em;
  text-align: center;
  border-radius: 0.9615em;
  width: 100%;
`;

const TableData = styled.td`
  color: #fff;
  font-family: 'Pretendard-Medium';
  font-size: 1.3em;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
  border-bottom: 1px solid #fff;
  height: 2.375em;
`;