import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-screen w-full bg-yellow-200">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 30 },
            color: { value: "#ff0000" },
            shape: { type: "circle" },
            opacity: { value: 1 },
            size: { value: 5 },
            move: { enable: true, speed: 1 }
          }
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
