import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { getProficiencyListAPI } from '../apis/theme/getProficiencyListAPI'; // api 파일

export default function RestaurantPage() {
//todo
  // state 관리
  const [profName, setProfName] = useState([]);
  const [profDescription, setProfDescription] = useState([]);
  const [cafeLists, setCafeLists] = useState([]);
  const [page,] = useState('1');

  // useLocation
  const location = useLocation();
  const {level} = location.state || {};

  
  // const roomData = [
  //   {
  //     id: 1,
  //     region: '서울',
  //     detailRegion: '강남',
  //     shopName: '미스터리룸 이스케이프',
  //     themeName: '인형괴담',
  //   },
  //   {
  //     id: 2,
  //     region: '서울',
  //     detailRegion: '강남',
  //     shopName: '미스터리룸 이스케이프',
  //     themeName: '인형괴담',
  //   },
  //   {
  //     id: 3,
  //     region: '서울',
  //     detailRegion: '강남',
  //     shopName: '미스터리룸 이스케이프',
  //     themeName: '인형괴담',
  //   },
  //   {
  //     id: 4,
  //     region: '서울',
  //     detailRegion: '강남',
  //     shopName: '미스터리룸 이스케이프',
  //     themeName: '인형괴담',
  //   },
  //   {
  //     id: 5,
  //     region: '서울',
  //     detailRegion: '강남',
  //     shopName: '미스터리룸 이스케이프',
  //     themeName: '인형괴담',
  //   },
  //   {
  //     id: 6,
  //     region: '서울',
  //     detailRegion: '강남',
  //     shopName: '미스터리룸 이스케이프',
  //     themeName: '인형괴담',
  //   },
  //   {
  //     id: 7,
  //     region: '서울',
  //     detailRegion: '강남',
  //     shopName: '미스터리룸 이스케이프',
  //     themeName: '인형괴담',
  //   },
  //   {
  //     id: 8,
  //     region: '서울',
  //     detailRegion: '강남',
  //     shopName: '미스터리룸 이스케이프',
  //     themeName: '인형괴담',
  //   },
  //   {
  //     id: 9,
  //     region: '서울',
  //     detailRegion: '강남',
  //     shopName: '미스터리룸 이스케이프',
  //     themeName: '인형괴담',
  //   },
  //   {
  //     id: 10,
  //     region: '서울',
  //     detailRegion: '강남',
  //     shopName: '미스터리룸 이스케이프',
  //     themeName: '인형괴담',
  //   },
  //   {
  //     id: 11,
  //     region: '서울',
  //     detailRegion: '강남',
  //     shopName: '미스터리룸 이스케이프',
  //     themeName: '인형괴담',
  //   },
  // ];

  // 임시 
  // const page = '1';

  // 방탈출 정보 불러오기
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
        {/* 식당 목록 조회 */}
        <RestaurantListWrapper>
          <RestaurantList>
            <RestaurantHeader>식당 목록 (내 위치에서 가까운 순)</RestaurantHeader>
            <TableHeaderWrapper>
              <TableHeader1>식당 이름</TableHeader1>
              <TableHeader2>주소</TableHeader2>
              <TableHeader3>좋아요 취소</TableHeader3>
              <TableHeader4>메뉴 보기</TableHeader4>
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
          </RestaurantList>
        </RestaurantListWrapper>
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

const RestaurantListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RestaurantList = styled.div`
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

const RestaurantHeader = styled.div`
    margin-top: 0.7em;
    color: #fff;
    font-family: 'Pretendard-Medium';
    font-size: 1.5em;
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
  width: 100%; /* 부모 요소의 너비를 꽉 채움 */
  margin-top: 1em; /* 상단 간격 조정 */
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
  width: 42%;
`;

const TableHeader3 = styled.div`
  padding: 0.6em;
  background-color: rgba(56, 50, 50, 0.7);
  color: #fff;
  font-family: 'Pretendard-Medium';
  font-size: 1.3em;
  text-align: center;
  border-radius: 0.9615em;
  width: 13%;
`;

const TableHeader4 = styled.div`
  padding: 0.6em;
  background-color: rgba(56, 50, 50, 0.7);
  color: #fff;
  font-family: 'Pretendard-Medium';
  font-size: 1.3em;
  text-align: center;
  border-radius: 0.9615em;
  width: 10%;
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