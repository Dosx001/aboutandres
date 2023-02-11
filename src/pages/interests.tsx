import { useEffect, useRef, useState } from "react";

const Interests = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioContext, setAudioContext] = useState(new window.AudioContext());

  useEffect(() => {
    const canvas = canvasRef.current!;
    const audio = audioRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setAudioContext(new window.AudioContext());
    const sourceNode = audioContext.createMediaElementSource(audio);
    const analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = 256;
    sourceNode.connect(analyserNode);
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
      if (audioContext) {
        audioContext.close().catch((err) => console.debug(err));
        setAudioContext(new window.AudioContext());
      }
    };
  }, []);
  return (
    <>
      <div className="absolute h-full w-full bg-black"></div>
      <div className="box relative z-10">
        <h1>Interests</h1>
        <canvas className="fixed bottom-0" ref={canvasRef} />
        <audio ref={audioRef} src="Count What You Have Now.mp3" />
      </div>
    </>
  );
};

export default Interests;
