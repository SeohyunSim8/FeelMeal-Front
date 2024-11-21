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
        {/* 주소 */}
        <AddressWrapper>
            <Address>
                <AddressHeader>내 위치 수정하기</AddressHeader>
                <AddressContent>
                    <AddressText>내 위치 (복정동, 태평동을 포함한 지번주소)</AddressText>
                    <StyledAddress />
                </AddressContent>
                {/* todo */}
                <AddressButton onClick={() => navigate("/mypage")}> 
                    수정
                </AddressButton>
            </Address>
        </AddressWrapper>
        <LikeListWrapper>
          <LikeList>
            <LikeHeader>좋아요 한 식당 목록</LikeHeader>
            <TableHeaderWrapper>
              <TableHeader1>식당 이름</TableHeader1>
              <TableHeader2>주소</TableHeader2>
              <TableHeader3>좋아요 취소</TableHeader3>
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
          </LikeList>
        </LikeListWrapper>
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

const AddressWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Address = styled.div`
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

const AddressHeader = styled.div`
    color: #fff;
    font-family: 'Pretendard-Medium';
    font-size: 1.3em;
    text-align: center;
    border-radius: 0.9615em;
    width: auto;
    margin-left: 1.5em;
`;

const AddressContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    gap: 0.1em;
    padding: 0.5em;
`;

const AddressText = styled.div`
    color: #fff;
    font-family: 'Pretendard-Medium';
    font-size: 1.2em;
    font-weight: 500;
    padding: 0.5em;
`;

const StyledAddress = styled.input`
    padding: 0 1em;
    box-sizing: border-box;
    margin: 0.5em 0;
    border: none;
    border-radius: 0.6em;
    width: 100%;
    height: 3.2em;
    background-color: #322F35;
    color: #FBE8E9;
    outline: none;
`;

const AddressButton = styled.div`
    margin-right: 1em;
    border: none;
    border-radius: 0.5em;
    width: 4em;
    height: 2.5em;
    line-height: 2.5em;
    text-align: center;
    background-color: #940000;
    color: white;
    font-family: 'Pretendard-Medium';
    font-size: 1.2em;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        filter: brightness(80%);
    }
`;

const LikeListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LikeList = styled.div`
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

const LikeHeader = styled.div`
    margin-top: 1em;
    color: #fff;
    font-family: 'Pretendard-Medium';
    font-size: 1.3em;
    text-align: center;
    border-radius: 0.9615em;
    width: auto;
    margin-left: 1.5em;
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
  width: 80%;
  margin-top: 2.5%;
  position: absolute;
`;

const TableHeader1 = styled.div`
  padding: 0.6em;
  background-color: rgba(56, 50, 50, 0.7);
  color: #fff;
  font-family: 'Pretendard-Medium';
  font-size: 1.3em;
  text-align: center;
  border-radius: 0.9615em;
  width: 35%;
`;

const TableHeader2 = styled.div`
  padding: 0.6em;
  background-color: rgba(56, 50, 50, 0.7);
  color: #fff;
  font-family: 'Pretendard-Medium';
  font-size: 1.3em;
  text-align: center;
  border-radius: 0.9615em;
  width: 50%;
`;

const TableHeader3 = styled.div`
  padding: 0.6em;
  background-color: rgba(56, 50, 50, 0.7);
  color: #fff;
  font-family: 'Pretendard-Medium';
  font-size: 1.3em;
  text-align: center;
  border-radius: 0.9615em;
  width: 15%;
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