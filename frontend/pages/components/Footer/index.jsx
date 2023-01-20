import { useEffect, useRef } from "react";
import * as S from "styles/components/footer/style";
function Footer() {
  return (
    <S.Container>
      <S.Wrapper>
        <span>DAOOM</span>
        <p>
          피코랩스 | 대표: 한재상 | 사업자등록번호:000-00-00000 | 주소: 서울시
          동작구 상도동 OOO | 메일: xxxxxx@picolabs.com
        </p>
      </S.Wrapper>
    </S.Container>
  );
}

export default Footer;
