import styled, { css, keyframes } from "styled-components";
import * as M from "pages/components/animation";
import { motion } from "framer-motion";

export const MainContainer = styled.div`
  display: flex;
  overflow: hidden;
  /* margin-top: 10rem; */
`;

export const SectionContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
  margin: 0;
  background-color: #fff;
  color: #ffffff;
  height: 100vh;
  width: 400vw;
  max-width: 7680px;
  /* &::before {
    width: 50%;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.6)
    );
  }
  &::after {
    width: 50%;
    height: 400px;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.6)
    );
  } */
`;
export const Section = styled(motion.section)`
  display: flex;
  max-width: 1920px;
  z-index: 1;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: transparent;
  align-items: center;
  width: 100%;
  height: 100%;
  & img {
    /* min-width: 430px; */
    max-width: 70vw;
    max-height: 60vh;
    object-fit: contain;
    margin: 0 auto;
    animation: ${M.Color};
  }
`;
