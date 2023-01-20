import { useEffect, useRef } from "react";
import * as S from "styles/components/slick/style";
import Slider from "react-slick";
function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <S.MainContainer>
      <p style={{ fontSize: "2rem" }}>Signature Line</p>
      <Slider {...settings}>
        <S.ElementWrapper>
          <S.ImageWrapper>
            <img src="https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          </S.ImageWrapper>
          <S.ElementInfo>
            <p>향수 1번</p>
            <p>29800원</p>
          </S.ElementInfo>
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.ImageWrapper>
            <img src="https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          </S.ImageWrapper>
          <S.ElementInfo>
            <p>향수 2번</p>
            <p>29800원</p>
          </S.ElementInfo>
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.ImageWrapper>
            <img src="https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          </S.ImageWrapper>
          <S.ElementInfo>
            <p>향수 3번</p>
            <p>29800원</p>
          </S.ElementInfo>
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.ImageWrapper>
            <img src="https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          </S.ImageWrapper>
          <S.ElementInfo>
            <p>향수 4번</p>
            <p>29800원</p>
          </S.ElementInfo>
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.ImageWrapper>
            <img src="https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          </S.ImageWrapper>
          <S.ElementInfo>
            <p>향수 5번</p>
            <p>29800원</p>
          </S.ElementInfo>
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.ImageWrapper>
            <img src="https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          </S.ImageWrapper>
          <S.ElementInfo>
            <p>향수 6번</p>
            <p>29800원</p>
          </S.ElementInfo>
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.ImageWrapper>
            <img src="https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          </S.ImageWrapper>
          <S.ElementInfo>
            <p>향수 7번</p>
            <p>29800원</p>
          </S.ElementInfo>
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.ImageWrapper>
            <img src="https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          </S.ImageWrapper>
          <S.ElementInfo>
            <p>향수 8번</p>
            <p>29800원</p>
          </S.ElementInfo>
        </S.ElementWrapper>
      </Slider>
    </S.MainContainer>
  );
}

export default Slick;
