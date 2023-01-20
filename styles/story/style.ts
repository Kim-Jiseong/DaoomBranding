import styled, { css, keyframes } from "styled-components";
import * as M from "pages/components/animation";
import { motion } from "framer-motion";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
`;
export const ContentWrapper = styled.div<{ isMobile: boolean }>`
  width: 80%;
  margin: 0 auto;
  display: flex;
  /* padding: 6rem; */
  justify-content: space-around;
  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
      justify-content: center;
      & div {
        width: 100%;
      }
      & div:first-child {
        margin-bottom: 6rem;
      }
    `}
`;

export const SectionContent = styled.div<{ isMobile: boolean; mode: string }>`
  width: 100%;
  height: auto;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: white;
  color: black;
  align-items: center;

  ${(props) =>
    props.mode === "dark" &&
    css`
      background-color: black;
      color: white;
    `}
`;
export const YB = styled.div`
  height: 10rem;
`;

export const TextWrapper = styled.div`
  width: 40%;
  font-size: 2rem;
  word-break: keep-all;
  overflow: hidden;
  position: relative;

  & div span {
    font-size: 4rem;
    font-weight: 600;
  }
  &.imgWrapper:after {
    content: "";
    display: block;
    padding-bottom: 120%;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  & img {
    object-fit: cover;
    width: 100%;
  }
`;
