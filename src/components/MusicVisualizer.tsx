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
    setAudioContext(new AudioContext())
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
      <canvas ref={canvasRef} />
      <div className="flex w-fit whitespace-nowrap rounded-b shadow shadow-black">
        <div className="bg-[#2e2e2e] pt-2 pl-3 md:pr-0">
          Track: {track + 1}/{tracks.length}
        </div>
        <button
          className="bg-[#2e2e2e] pl-3 hover:cursor-default"
          onClick={() => setTrack(track === 0 ? tracks.length - 1 : track - 1)}
        >
          <svg
            width="15"
            height="15"
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
            width="15"
            height="15"
            viewBox="0 0 12 12"
            className="rotate-180 fill-white hover:fill-[#00b6f0]"
          >
            <path d="M2 1v10h-2v-10h1zm9 0l-8 5 8 5-10z" />
          </svg>
        </button>
        <audio
          controls
          ref={audioRef}
          className="w-[60vw] md:w-[40vw]"
          onEnded={next}
        />
        <div className="hidden rounded-br bg-[#2e2e2e] pt-2 pr-3 md:block">
          {tracks[track]!}
        </div>
      </div>
    </div>
  );
};

export default MusicVisualizer;
