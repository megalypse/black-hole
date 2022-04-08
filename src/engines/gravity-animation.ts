import { CoreProps } from "../components/core";

export function generateGravityAnimation(
  x: number,
  y: number,
  coreData: CoreProps
) {
  const axisCompensation = coreData.size / 2;
  const x0 = x + (coreData.x - x) + axisCompensation;
  const y0 = y + (coreData.y - y) + axisCompensation;

  return {
    "@keyframes gravity-animation": {
      from: {
        top: `${y}px`,
        left: `${x}px`,
      },
      to: {
        top: `${y0}px`,
        left: `${x0}px`,
      },
    },
  };
}
