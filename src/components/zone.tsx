import { Core } from "./core";

export type Props = {
  children?: any;
  x: number;
  y: number;
};

export function Zone({ children, x, y }: Props) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Core x={x} y={y} size={50} density={0} />
      {children}
    </div>
  );
}
