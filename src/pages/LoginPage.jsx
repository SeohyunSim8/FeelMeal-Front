import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useDevice from "../hooks/useDevice";
import BackgroundImg from "../assets/images/loginPage/background2.png";
import KakaoLogo from "../assets/icons/loginPage/kakaoLogo.svg?react";
import GoogleLogo from "../assets/icons/loginPage/googleLogo.svg?react";

function LoginPage() {
    // state 관리
    const [isCheck, setIsCheck] = useState(false);

    // navigate
    const navigate = useNavigate();

    // 로그인 상태 유지 함수
    const handleCheckBox = () => {
        setIsCheck(!isCheck);
    }

    // 반응형 함수
    const { isDesktop, isTablet, isMobile } = useDevice();
    
    return (
        <PageWrapper>
            {/* PC 버전 */}
            { isDesktop &&
                <ContentWrapper>
                    {/* 좌측 영역 */}
                    <LeftWrapper>
                        후기와 예약까지<br/>
                        한 번에 살필 수 있는,
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
                            {/* 로그인상태유지 버튼 */}
                            <LoginStateWrapper>
                                    <StyledCheckbox onClick={handleCheckBox} isCheck={isCheck}>✓</StyledCheckbox>
                                    <CheckboxText onClick={handleCheckBox}>로그인 상태 유지하기</CheckboxText>
                            </LoginStateWrapper>
                        </UpWrapper>
                        <DownWrapper>
                            <SocialLoginButton onClick={() => navigate("/")}><StyledKakaoLogo/>카카오로 시작하기</SocialLoginButton>
                            <SocialLoginButton onClick={() => navigate("/")}><StyledGoogleLogo/>구글로 시작하기</SocialLoginButton>
                            <LoginButton onClick={() => navigate("/")}>로그인</LoginButton>
                            <SignupText onClick={() => navigate("/signup")}>
                                회원가입 하기
                            </SignupText>
                        </DownWrapper>
                    </RightWrapper>
                </ContentWrapper>
                }


            {/* 태블릿 버전 */}
            { isTablet &&
                <TabletContentWrapper>
                    {/* 좌측 영역 */}
                    <TabletLeftWrapper>
                        후기와 예약까지<br/>
                        한 번에 살필 수 있는,
                    </TabletLeftWrapper>
                    
                    {/* 우측 영역 */}
                    <TabletRightWrapper>
                        <UpWrapper>
                            {/* 아이디 */}
                            <InputWrapper>
                                <InputText>
                                    아이디
                                </InputText>
                                <TabletStyledInput/>
                            </InputWrapper>
                            {/* 비밀번호 */}
                            <InputWrapper>
                                <InputText>
                                    비밀번호
                                </InputText>
                                <TabletStyledInput type="password"/>
                            </InputWrapper>
                            {/* 로그인상태유지 버튼 */}
                            <LoginStateWrapper>
                                    <StyledCheckbox onClick={handleCheckBox} isCheck={isCheck}>✓</StyledCheckbox>
                                    <CheckboxText onClick={handleCheckBox}>로그인 상태 유지하기</CheckboxText>
                            </LoginStateWrapper>
                        </UpWrapper>
                        <DownWrapper>
                            <LoginButton onClick={() => navigate("/")}>로그인</LoginButton>
                            <SignupText onClick={() => navigate("/signup")}>
                                회원가입 하기
                            </SignupText>
                        </DownWrapper>
                    </TabletRightWrapper>
                </TabletContentWrapper>
                }


            {/* 모바일 버전 */}
            { isMobile &&
                <MobileContentWrapper>
                    {/* 좌측 영역 */}
                    <MobileLeftWrapper>
                        후기와 예약까지<br/>
                        한 번에 살필 수 있는,
                    </MobileLeftWrapper>
                    
                    {/* 우측 영역 */}
                    <MobileRightWrapper>
                        <UpWrapper>
                            {/* 아이디 */}
                            <InputWrapper>
                                <InputText>
                                    아이디
                                </InputText>
                                <MobileStyledInput/>
                            </InputWrapper>
                            {/* 비밀번호 */}
                            <InputWrapper>
                                <InputText>
                                    비밀번호
                                </InputText>
                                <MobileStyledInput type="password"/>
                            </InputWrapper>
                            {/* 로그인상태유지 버튼 */}
                            <LoginStateWrapper>
                                    <StyledCheckbox onClick={handleCheckBox} isCheck={isCheck}>✓</StyledCheckbox>
                                    <CheckboxText onClick={handleCheckBox}>로그인 상태 유지하기</CheckboxText>
                            </LoginStateWrapper>
                        </UpWrapper>
                        <DownWrapper>
                            <MobileLoginButton onClick={() => navigate("/")}>로그인</MobileLoginButton>
                            <SignupText onClick={() => navigate("/signup")}>
                                회원가입 하기
                            </SignupText>
                        </DownWrapper>
                    </MobileRightWrapper>
                </MobileContentWrapper>
                }
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
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1A1A1A;
`;

const UpWrapper = styled.div`
    // 필요 시 작성
`;

const InputWrapper = styled.div`
    width: 100%;
`;

const InputText = styled.div`
    margin-top: 1em;
    color: #FBE8E9;
    font-family: 'Pretendard-Medium';
    font-size: 0.9em;
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

const LoginStateWrapper = styled.div`
    height: 2em;
    display: flex;
    flex-directon: column;
    align-items: center;
`;

const StyledCheckbox = styled.div`
    border: 1px solid white;
    border: ${(props) => (props.isCheck ? '1px solid #940000' : '1px solid white')};;
    border-radius: 3px;
    width: 0.9em;
    height: 0.9em;
    text-align: center;
    background-color: ${(props) => (props.isCheck ? '#940000' : 'transparent')};
    color: ${(props) => (props.isCheck ? 'white' : 'transparent')};;
    transition: all 0.2s ease;
    cursor: pointer;
`;

const CheckboxText = styled.div`
    margin-left: 0.6em;
    color: white;
    font-family: 'Pretendard-Regular';
    font-weight: 400;
    font-size: 0.75em;
    cursor: pointer;
`;

const DownWrapper = styled.div`
    text-align: center;
`;

const StyledKakaoLogo = styled(KakaoLogo)`
    margin-right: 0.5em;
    width: 0.9em;
    height: 0.9em;
`;

const StyledGoogleLogo = styled(GoogleLogo)`
    margin-right: 0.4em;
    width: 1.1em;
    height: 1.1em;
`;

const SocialLoginButton = styled.div`
    margin: 1em 0;
    border: none;
    border-radius: 0.5em;
    width: 100%;
    height: 3em;
    line-height: 3em;
    text-align: center;
    background-color: #252525;
    color: white;
    font-family: 'Pretendard-Medium';
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        filter: brightness(85%);
    }
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        filter: brightness(80%);
    }
`;

const SignupText = styled.div`
    margin-top: 1em;
    color: white;
    font-family: 'Pretendard-regular';
    font-size: 0.85em;
    font-weight: 400;
    cursor: pointer;
`;

// 태블릿 반응형
const TabletContentWrapper = styled.div`
    margin-top: 1em;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    width: 40em;
    height: 36em;
    background-color: #030303;
    background-image: url(${BackgroundImg});
    background-size: 30em;
    background-position: right -10em top -4em;
    background-repeat: no-repeat;
`;

const TabletLeftWrapper = styled(LeftWrapper)`
    font-size: 2em;
`;

const TabletRightWrapper = styled.div`
    padding: 2em 3em 3em 3em;
    box-sizing: border-box;
    margin: 3em auto;
    border-radius: 0.7em;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1A1A1A;
    font-size: 0.8125em;
`;

const TabletStyledInput = styled(StyledInput)`
    height: 2.8em;
`;

// 모바일 반응형
const MobileContentWrapper = styled.div`
    margin-top: 1em;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20em;
    height: 36em;
    background-color: #030303;
    background-image: url(${BackgroundImg});
    background-size: 28em;
    background-repeat: no-repeat;
`;

const MobileLeftWrapper = styled(LeftWrapper)`
    font-size: 1.5em;
`;

const MobileRightWrapper = styled(RightWrapper)`
    padding: 1em 2em;
    width: 70%;
    height: 26em;
    font-size: 0.7em;
`;

const MobileStyledInput = styled(StyledInput)`
    height: 2.3em;
`;

const MobileLoginButton = styled(LoginButton)`
    // height: 2.8em;
    // line-height: 2.8em;
`;