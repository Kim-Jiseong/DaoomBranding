import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as S from "styles/components/header/style";
import Fade from "react-awesome-reveal";
export default function Header(props: { isMobile: boolean }) {
  const [click, setClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [fullscreen, setFullscreen] = useState<number>();
  const router = useRouter();
  const menuClick = () => {
    setClick(!click);
    console.log(click);
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    setFullscreen(window.innerHeight);
    window.addEventListener("scroll", updateScroll);
  }, []);
  return (
    <div>
      {fullscreen && (
        <S.HeaderContainer scroll={scrollPosition > fullscreen ? true : false}>
          {/* {props.isMobile && ( */}
          <S.HeaderWrapper>
            <div style={{ width: "5rem" }}></div>
            <S.Logo
              color={scrollPosition > fullscreen ? "black" : "transparent"}
            >
              DAOOM
            </S.Logo>
            <S.HamburgerContainer
              onClick={() => {
                setClick(!click);
                console.log(click);
              }}
              click={click}
              color={scrollPosition > fullscreen ? "black" : "white"}
            >
              <span></span>
              <span></span>
              <span></span>
            </S.HamburgerContainer>
          </S.HeaderWrapper>
          {/* )} */}

          <S.HeaderPage click={click}>
            <S.MenuContainer isMobile={props.isMobile}>
              <Fade cascade={true}>
                <div>Detail</div>
                <div>Story</div>
                <div>Detail</div>
                <div>Detail</div>
              </Fade>
            </S.MenuContainer>
          </S.HeaderPage>
        </S.HeaderContainer>
      )}
    </div>
  );
}
