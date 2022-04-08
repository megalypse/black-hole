export type CoreProps = {
  x: number;
  y: number;
  size: number;
  density: number;
};

export function Core({ x, y, size: coreSize }: CoreProps) {
  return (
    <div
      style={{
        height: coreSize + "px",
        width: coreSize + "px",
        borderRadius: "50%",
        backgroundColor: "orange",
        position: "absolute",
        top: `${x}px`,
        left: `${y}px`,
      }}
    ></div>
  );
}
