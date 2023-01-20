import React, { useState, useEffect, useRef } from "react";
import Header from "pages/components/Header/index";
import ImageSection from "pages/components/Section/index";
import * as S from "styles/main/style";
import Slick from "pages/components/Slick/index";
import { Fade } from "react-awesome-reveal";
import Footer from "pages/components/Footer/index";
import { useMediaQuery } from "react-responsive";
function Index() {
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  console.log(isMobile);
  useEffect(() => {
    if (isMobile || isDesktop) {
      setLoading(false);
    }
  }, [isMobile]);
  if (!loading) {
    return (
      <div>
        <Header isMobile={isMobile}></Header>
        <S.MainContainer>
          <S.MainTextContainer>
            <S.MainTextWrapper>
              <span>DAOOM</span>
              <span>perfume</span>
            </S.MainTextWrapper>
          </S.MainTextContainer>
          <img src="https://images.unsplash.com/photo-1544468266-6a8948003cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80" />
        </S.MainContainer>
        <div style={{ maxWidth: "1920px", width: "100%", overflowX: "hidden" }}>
          <ImageSection></ImageSection>
        </div>

        <S.StickyContainer>
          <S.StickyContent isMobile={isMobile}>
            <S.TextWrapper>
              <Fade cascade={true}>
                <span>테스트 제목</span>
                <p>
                  훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한 특권도
                  이에 따르지 아니한다. 대법원에 대법관을 둔다. 다만, 법률이
                  정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다. 위원은
                  탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지
                  아니한다. 모든 국민은 신속한 재판을 받을 권리를 가진다.
                  형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을
                  권리를 가진다. 모든 국민의 재산권은 보장된다. 그 내용과 한계는
                  법률로 정한다. <br />
                  <br />
                  누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지
                  아니한다. 모든 국민은 소급입법에 의하여 참정권의 제한을 받거나
                  재산권을 박탈당하지 아니한다. 국가원로자문회의의 조직·직무범위
                  기타 필요한 사항은 법률로 정한다. 한 회계연도를 넘어 계속하여
                  지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서
                  국회의 의결을 얻어야 한다.
                </p>
              </Fade>
            </S.TextWrapper>
            <S.TextWrapper>
              <Fade delay={800} triggerOnce={true}>
                <img src="https://images.unsplash.com/photo-1622618991746-fe6004db3a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
              </Fade>
            </S.TextWrapper>
          </S.StickyContent>
          <S.Sticky>
            <video autoPlay muted loop src="/assets/video/main0.mp4"></video>
            {/* <img src="https://images.unsplash.com/photo-1618828729232-347c3160c820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" /> */}
          </S.Sticky>
        </S.StickyContainer>
        <Slick></Slick>
        <S.YB></S.YB>
        <Footer></Footer>
      </div>
    );
  }
  // return (

  // );
}

export default Index;
