import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImg from "../assets/images/loginPage/background2.png";

function LoginPage() {
    // navigate
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <ContentWrapper>
                {/* 좌측 영역 */}
                <LeftWrapper>
                    로그인
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
                                비밀번호
                            </InputText>
                            <StyledInput type="password"/>
                        </InputWrapper>
                    </UpWrapper>
                    <DownWrapper>
                        <LoginButton onClick={() => navigate("/")}>로그인</LoginButton>
                        <SignupText onClick={() => navigate("/signup")}>
                            회원가입 하기
                        </SignupText>
                    </DownWrapper>
                </RightWrapper>
            </ContentWrapper>
        </PageWrapper>
    )
}

export default LoginPage;

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
    margin-top: 2em;
    margin-left: 0.5em;
    color: #FBE8E9;
    font-family: 'Pretendard-Medium';
    font-size: 1em;
    font-weight: 500;
`;

const StyledInput = styled.input`
    padding: 0 1em;
    box-sizing: border-box;
    margin: 1em 0;
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

const LoginButton = styled.div`
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

const SignupText = styled.div`
    margin-top: 1.7em;
    margin-bottom: 1.2em;
    color: white;
    font-family: 'Pretendard-regular';
    font-size: 1em;
    font-weight: 400;
    cursor: pointer;
`;
