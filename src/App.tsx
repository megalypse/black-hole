import { generateAffectedChild } from "./components/child";
import { Zone } from "./components/zone";

const coreProps = { x: 500, y: 900, density: 0.5, size: 50 };
const generateFloatingBodies = () => {
  const bodies = [];
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * 1000;
    const y = Math.random() * 1800;
    bodies.push(generateAffectedChild({ x, y, coreData: coreProps }));
  }
  return bodies;
};

function App() {
  const bodies = generateFloatingBodies();
  const Child = bodies[0];
  return (
    <Zone {...coreProps}>
      {bodies.map((Body) => (
        <Body />
      ))}
    </Zone>
  );
}

export default App;
