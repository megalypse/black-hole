import styled, { keyframes } from "styled-components";
import { generateGravityAnimation } from "../engines/gravity-animation";
import { CoreProps } from "./core";

type Props = {
  x: number;
  y: number;
  coreData: CoreProps;
};

export const generateAffectedChild = ({ x, y, coreData }: Props) => {
  const axisCompensation = coreData.size / 2;
  const x0 = x + (coreData.x - x) + axisCompensation;
  const y0 = y + (coreData.y - y) + axisCompensation;
  const delay = Math.random() * 0.5;

  const fall = keyframes`
    0% {
      top: ${x}px;
      left: ${y}px;
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }

    100% {
      top: ${x0}px;
      left: ${y0}px;
      transform: scale(0);
    }
  `;

  return styled.div`
    top: ${x}px;
    left: ${y}px;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: blue;
    animation: ${fall} 1s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};
