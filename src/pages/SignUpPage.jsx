import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImg from "../assets/images/loginPage/background.png";

function SignUpPage() {
    // navigate
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <ContentWrapper>
                {/* 좌측 영역 */}
                <LeftWrapper>
                    회원가입
                </LeftWrapper>
                
                {/* 우측 영역 */}
                <RightWrapper>
                    <UpWrapper>
                        {/* 아이디 */}
                        <InputWrapper>
                            <InputText>
                                아이디
                            </InputText>
                            <StyledInput/>
                        </InputWrapper>
                        {/* 비밀번호 */}
                        <InputWrapper>  
                            <InputText>
                                비밀번호 (영어 대소문자와 숫자로 구성)
                            </InputText>
                            <StyledInput type="password"/>
                        </InputWrapper>
                        {/* 이름(닉네임) */}
                        <InputWrapper>
                            <InputText>
                                이름(닉네임)
                            </InputText>
                            <StyledInput/>
                        </InputWrapper>
                        {/* 주소 */}
                        <InputWrapper>
                            <InputText>
                                내 위치 (복정동/태평동 + 지번)<br />예) 복정동 495
                            </InputText>
                            <StyledInput/>
                        </InputWrapper>
                    </UpWrapper>
                    <DownWrapper>
                        <SignUpButton onClick={() => navigate("/login")}>회원가입</SignUpButton>
                    </DownWrapper>
                </RightWrapper>
            </ContentWrapper>
        </PageWrapper>
    )
}

export default SignUpPage;

// CSS
const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentWrapper = styled.div`
    margin-top: 1em;
    border-radius: 1em;
    display: flex;
    justify-content: space-between;
    width: 65em;
    height: 36em;
    background-color: #030303;
    background-image: url(${BackgroundImg});
    background-size: 55em;
    background-repeat: no-repeat;
`;

const LeftWrapper = styled.div`
    margin: 1.5em;
    width: 10em;
    color: #EAEAEA;
    font-family: 'Pretendard-SemiBold';
    font-weight: 600;
    font-size: 2.3em;
`;

const RightWrapper = styled.div`
    padding: 1.5em 2.5em 2.5em 2.5em;
    box-sizing: border-box;
    margin: 3.45em;
    border-radius: 0.7em;
    height: 85%;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1A1A1A;
`;

const UpWrapper = styled.div`
    
`;

const InputWrapper = styled.div`
    
`;

const InputText = styled.div`
    margin-top: 0.5em;
    margin-left: 0.3em;
    color: #FBE8E9;
    font-family: 'Pretendard-Medium';
    font-size: 1em;
    font-weight: 500;
`;

const StyledInput = styled.input`
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

const DownWrapper = styled.div`
    text-align: center;
`;

const SignUpButton = styled.div`
    margin-top: 1.7em;
    border: none;
    border-radius: 0.5em;
    width: 100%;
    height: 3em;
    line-height: 3em;
    text-align: center;
    background-color: #940000;
    color: white;
    font-family: 'Pretendard-Medium';
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        filter: brightness(80%);
    }
`;
