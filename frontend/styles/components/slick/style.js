import styled, { css, keyframes } from "styled-components";
import * as M from "pages/components/animation";
import { motion } from "framer-motion";

export const MainContainer = styled.div`
  /* margin-top: 4rem; */
  margin-bottom: 4rem;
  padding: 6rem;
  width: 100%;
`;
export const ElementWrapper = styled.div`
  width: 40%;
  padding: 2rem;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  &:after {
    content: "";
    padding-bottom: 100%;
    display: block;
    background-color: green;
  }
  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ElementInfo = styled.div`
  font-size: 1.6rem;
  margin-top: 2rem;
  & p {
    margin: 0;
    margin-top: 0.5rem;
  }
`;
