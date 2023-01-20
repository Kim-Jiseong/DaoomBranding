import React, { useState, useEffect, useRef } from "react";
import Header from "pages/components/Header/index";
import * as S from "styles/story/style";
import { Fade } from "react-awesome-reveal";
import Footer from "pages/components/Footer/index";
import { useMediaQuery } from "react-responsive";
import Slick from "pages/components/Slick";

function Story() {
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  useEffect(() => {
    if (isMobile || isDesktop) {
      setLoading(false);
    }
  }, [isMobile]);
  if (!loading) {
    return (
      <div>
        <Header isMobile={isMobile} initialColor={true}></Header>
        <S.Container>
          <S.YB></S.YB>
          <S.SectionContent isMobile={isMobile} mode="light">
            <S.ContentWrapper isMobile={isMobile}>
              <S.TextWrapper>
                <Fade cascade direction="left">
                  <span>테스트 제목</span>
                  <p>
                    훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한
                    특권도 이에 따르지 아니한다. 대법원에 대법관을 둔다. 다만,
                    법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다.
                    위원은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는
                    파면되지 아니한다. 모든 국민은 신속한 재판을 받을 권리를
                    가진다. 형사피고인은 상당한 이유가 없는 한 지체없이
                    공개재판을 받을 권리를 가진다. 모든 국민의 재산권은
                    보장된다. 그 내용과 한계는 법률로 정한다. <br />
                    <br />
                    누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지
                    아니한다. 모든 국민은 소급입법에 의하여 참정권의 제한을
                    받거나 재산권을 박탈당하지 아니한다. 국가원로자문회의의
                    조직·직무범위 기타 필요한 사항은 법률로 정한다. 한
                    회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는
                    연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.
                  </p>
                </Fade>
              </S.TextWrapper>
              <S.TextWrapper className="imgWrapper">
                <Fade delay={800} triggerOnce={true}>
                  <img src="https://images.unsplash.com/photo-1588018025171-0581d0189080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                </Fade>
              </S.TextWrapper>
            </S.ContentWrapper>
          </S.SectionContent>
          <S.SectionContent isMobile={isMobile} mode="dark">
            <S.ContentWrapper isMobile={isMobile}>
              <S.TextWrapper className="imgWrapper">
                <Fade delay={800} triggerOnce={true}>
                  <img src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                </Fade>
              </S.TextWrapper>
              <S.TextWrapper>
                <Fade cascade direction="right">
                  <span>테스트 제목</span>
                  <p>
                    훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한
                    특권도 이에 따르지 아니한다. 대법원에 대법관을 둔다. 다만,
                    법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다.
                    위원은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는
                    파면되지 아니한다. 모든 국민은 신속한 재판을 받을 권리를
                    가진다. 형사피고인은 상당한 이유가 없는 한 지체없이
                    공개재판을 받을 권리를 가진다. 모든 국민의 재산권은
                    보장된다. 그 내용과 한계는 법률로 정한다. <br />
                    <br />
                    누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지
                    아니한다. 모든 국민은 소급입법에 의하여 참정권의 제한을
                    받거나 재산권을 박탈당하지 아니한다. 국가원로자문회의의
                    조직·직무범위 기타 필요한 사항은 법률로 정한다. 한
                    회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는
                    연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.
                  </p>
                </Fade>
              </S.TextWrapper>
            </S.ContentWrapper>
          </S.SectionContent>
          <S.SectionContent isMobile={isMobile} mode="light">
            <S.ContentWrapper isMobile={isMobile}>
              <S.TextWrapper>
                <Fade cascade direction="left">
                  <span>테스트 제목</span>
                  <p>
                    훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한
                    특권도 이에 따르지 아니한다. 대법원에 대법관을 둔다. 다만,
                    법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다.
                    위원은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는
                    파면되지 아니한다. 모든 국민은 신속한 재판을 받을 권리를
                    가진다. 형사피고인은 상당한 이유가 없는 한 지체없이
                    공개재판을 받을 권리를 가진다. 모든 국민의 재산권은
                    보장된다. 그 내용과 한계는 법률로 정한다. <br />
                    <br />
                    누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지
                    아니한다. 모든 국민은 소급입법에 의하여 참정권의 제한을
                    받거나 재산권을 박탈당하지 아니한다. 국가원로자문회의의
                    조직·직무범위 기타 필요한 사항은 법률로 정한다. 한
                    회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는
                    연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.
                  </p>
                </Fade>
              </S.TextWrapper>
              <S.TextWrapper className="imgWrapper">
                <Fade delay={800} triggerOnce={true}>
                  <img src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80" />
                </Fade>
              </S.TextWrapper>
            </S.ContentWrapper>
          </S.SectionContent>
        </S.Container>
        <S.YB></S.YB>
        <S.ImgContainer>
          <img src="https://www.vancleefarpels.com/content/dam/vancleefarpels/La-Maison/fragrances/van-cleef-arpels-fragrances-full-bleed-image-1280-721-x3.jpg.transform.vca-w1024-1x.jpg" />
        </S.ImgContainer>
        <S.YB></S.YB>
        {/* <Slick></Slick> */}

        <Footer></Footer>
      </div>
    );
  }
}
export default Story;
