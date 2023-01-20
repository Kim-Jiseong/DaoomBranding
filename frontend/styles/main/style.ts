import styled, { css, keyframes } from "styled-components";
import * as M from "pages/components/animation";
import { motion } from "framer-motion";
export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${M.Color} 2s forwards;
  }
`;

export const MainTextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100vh;
`;

export const MainTextWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  color: #000;
  font-size: 5rem;
  letter-spacing: 1.6rem;
  padding: 4rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 1)
  );
  /* backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px); */
  flex-direction: column;
  opacity: 0;
  animation: ${M.FadeIn} 2s 1s forwards;
  & span:last-child {
    font-size: 2rem;
  }
`;

export const ImageSectionContainer = styled.div`
  position: relative;
`;
export const StickyContainer = styled.div`
  width: 100%;
  height: calc(100vh + 1000px + 12rem);
  position: relative;
  /* background-color: grey; */
  max-width: 1920px;
  /* position: absolute;
  z-index: -1;
  top: 0;
  left: 0; */
`;
export const Sticky = styled.div`
  width: 100%;
  height: 100vh;
  top: 0px;
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  & video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;
export const StickyContent = styled.div<{ isMobile: boolean }>`
  width: 100%;
  height: auto;
  padding: 6rem;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
      justify-content: center;
      & div {
        width: 100%;
      }
    `}
`;
export const TextWrapper = styled.div`
  width: 40%;
  font-size: 2rem;
  word-break: keep-all;
  color: #fff;
  overflow: hidden;
  position: relative;

  & div span {
    font-size: 4rem;
    font-weight: 600;
  }
  &:last-child:after {
    content: "";
    display: block;
    padding-bottom: 120%;
  }
  &:last-child img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`;
export const YB = styled.div`
  height: 10rem;
`;
