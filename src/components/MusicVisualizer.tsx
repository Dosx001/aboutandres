import { useEffect, useRef, useState } from "react";

const MusicVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioContext, setAudioContext] = useState(new AudioContext());
  useEffect(() => {
    const canvas = canvasRef.current!;
    const audio = audioRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = 256;
    audioContext.createMediaElementSource(audio).connect(analyserNode);
    analyserNode.connect(audioContext.destination);
    const frequencyData = new Uint8Array(analyserNode.frequencyBinCount);
    const renderFrame = () => {
      requestAnimationFrame(renderFrame);
      analyserNode.getByteFrequencyData(frequencyData);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "pink";
      for (let i = 0; i < frequencyData.length; i++) {
        const barHeight = frequencyData[i]!;
        ctx.fillRect(i * 8, canvas.height - barHeight, 7, barHeight);
      }
    };
    audio.play().catch((err) => console.debug(err));
    renderFrame();
    return () => {
      audioContext.close().catch((err) => console.debug(err));
      setAudioContext(new AudioContext());
    };
  }, []);
  return (
    <>
      <div className="fixed bottom-12">
        <div>
          <canvas ref={canvasRef} />
          <audio ref={audioRef} src="Count What You Have Now.mp3" />
        </div>
        <div>
          <button
            className="muBtn"
            onClick={() => {
              audioContext.resume().catch((err) => console.debug(err));
            }}
          >
            Play
          </button>
          <button
            className="muBtn"
            onClick={() => {
              audioContext.suspend().catch((err) => console.debug(err));
            }}
          >
            Pause
          </button>
        </div>
      </div>
    </>
  );
};

export default MusicVisualizer;
