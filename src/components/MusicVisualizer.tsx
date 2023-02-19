import { useEffect, useRef, useState } from "react";

const MusicVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioContext, setAudioContext] = useState(new AudioContext());
  const [track, setTrack] = useState(0);
  const tracks = [
    "Count What You Have Now",
    "Bay City",
    "Crazy for You",
    "Fly Away",
    "Sunset",
  ];
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
    audio.src = `music/${tracks[track]!}.mp3`;
    audio.load();
    audio.play().catch((err) => console.debug(err));
    renderFrame();
    return () => {
      audioContext.close().catch((err) => console.debug(err));
      setAudioContext(new AudioContext());
    };
  }, [track]);
  const next = () => setTrack(track === tracks.length - 1 ? 0 : track + 1);
  return (
    <div className="fixed bottom-10">
      <div>
        <canvas ref={canvasRef} />
        <div className="flex w-96 rounded shadow shadow-black">
          <button
            className="bg-[#2e2e2e] pl-3 hover:cursor-default"
            onClick={() =>
              setTrack(track === 0 ? tracks.length - 1 : track - 1)
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 12 12"
              className="fill-white hover:fill-[#00b6f0]"
            >
              <path d="M2 1v10h-2v-10h1zm9 0l-8 5 8 5-10z" />
            </svg>
          </button>
          <button
            className="bg-[#2e2e2e] pl-3 hover:cursor-default"
            onClick={next}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 12 12"
              className="rotate-180 fill-white hover:fill-[#00b6f0]"
            >
              <path d="M2 1v10h-2v-10h1zm9 0l-8 5 8 5-10z" />
            </svg>
          </button>
          <audio controls ref={audioRef} className="w-96" onEnded={next} />
        </div>
      </div>
    </div>
  );
};

export default MusicVisualizer;
