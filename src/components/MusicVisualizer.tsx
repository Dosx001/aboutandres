import type { KeyboardEvent as KeyEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const MusicVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioContext, setAudioContext] = useState(new AudioContext());
  const [track, setTrack] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const tracks = [
    "Count What You Have Now",
    "Bay City",
    "Crazy for You",
    "Fly Away",
    "Sunset",
  ];
  window.onresize = () => {
    const canvas = canvasRef.current!;
    canvas.width = canvas.parentElement!.clientWidth;
  };
  useEffect(() => {
    setAudioContext(new AudioContext());
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = canvas.parentElement!.clientWidth;
    canvas.height = window.innerHeight;
    const analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = 512;
    const audio = audioRef.current!;
    audio.volume = volume;
    audioContext.createMediaElementSource(audio).connect(analyserNode);
    analyserNode.connect(audioContext.destination);
    const frequencyData = new Uint8Array(analyserNode.frequencyBinCount);
    const renderFrame = () => {
      requestAnimationFrame(renderFrame);
      analyserNode.getByteFrequencyData(frequencyData);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "pink";
      ctx.shadowColor = "black";
      ctx.shadowBlur = 2;
      for (let i = 0; i < frequencyData.length; i++) {
        const barHeight = frequencyData[i]!;
        ctx.fillRect(i * 7, canvas.height - barHeight, 6, barHeight);
      }
    };
    renderFrame();
    return () => {
      audioContext.close().catch((err) => console.debug(err));
      setAudioContext(new AudioContext());
    };
  }, []);
  useEffect(() => {
    setCurrentTime(0);
    const audio = audioRef.current!;
    audio.src = `music/${tracks[track]!}.mp3`;
    audio.load();
    setDuration(audio.duration);
    audio
      .play()
      .then(() => setPlaying(true))
      .catch((err) => console.debug(err));
  }, [track]);
  const next = () => setTrack(track === tracks.length - 1 ? 0 : track + 1);
  const prev = () => setTrack(track === 0 ? tracks.length - 1 : track - 1);
  const play = () => {
    playing
      ? audioRef.current!.pause()
      : audioRef.current!.play().catch((err) => console.debug(err));
    setPlaying(!playing);
  };
  const disable = (ev: KeyEvent) => ev.preventDefault();
  const mute = () => {
    audioRef.current!.muted = !muted;
    if (volume === 0 && muted) {
      setVolume(0.25);
      audioRef.current!.volume = 0.25;
    }
    setMuted(!muted);
  };
  const formatTime = (seconds: number) => {
    const secs = Math.floor(seconds % 60);
    return `${Math.floor(seconds / 60)}:${secs < 10 ? `0${secs}` : secs}`;
  };
  const volumeCtrl = (vol: number) => {
    vol += volume;
    if (1 < vol) vol = 1;
    else if (vol < 0) vol = 0;
    audioRef.current!.volume = vol;
    setVolume(vol);
    if (vol === 0) setMuted(true);
    else if (muted) setMuted(false);
  };
  const timeCtrl = (time: number) => {
    time += currentTime;
    if (time < 0) time = 0;
    audioRef.current!.currentTime = time;
    setCurrentTime(time);
  };
  const up = () => volumeCtrl(0.05);
  const down = () => volumeCtrl(-0.05);
  const left = () => timeCtrl(-5);
  const right = () => timeCtrl(5);
  useHotkeys("m", mute);
  useHotkeys("p", prev);
  useHotkeys("n", next);
  useHotkeys("up", up);
  useHotkeys("down", down);
  useHotkeys("left", left);
  useHotkeys("right", right);
  useHotkeys("space", play);
  const arrow = (ev: KeyEvent) => {
    ev.preventDefault();
    document.dispatchEvent(new KeyboardEvent("keydown", { key: ev.key }));
  };
  return (
    <div className="fixed bottom-10 w-11/12 whitespace-nowrap md:w-3/4 3xl:w-1/2">
      <audio
        ref={audioRef}
        onEnded={next}
        onLoadedMetadata={() => setDuration(audioRef.current!.duration)}
        onTimeUpdate={() => setCurrentTime(audioRef.current!.currentTime)}
      />
      <canvas ref={canvasRef} />
      <div className="rounded-b bg-[#2e2e2e] px-2 py-1 shadow shadow-black">
        <div>
          Track {track + 1}/{tracks.length} : {tracks[track]!}
        </div>
        <div className="flex">
          <button
            className="fill-white hover:fill-LightBlue"
            onClick={prev}
            onKeyDown={disable}
            title="Previous (p)"
          >
            <svg width="15" height="15" viewBox="0 0 12 12">
              <path d="M2 1v10h-2v-10h1zm9 0l-8 5 8 5-10z" />
            </svg>
          </button>
          <button
            className="fill-white hover:fill-LightBlue"
            onClick={play}
            onKeyDown={disable}
            title="Play/Pause (space)"
          >
            <svg width="25" height="25" viewBox="0 0 20 20">
              {playing ? (
                <path d="M5 4H7V16H5ZM13 4H15V16H13Z" />
              ) : (
                <path d="M6 4L16 10L6 16Z" />
              )}
            </svg>
          </button>
          <button
            className="rotate-180 fill-white hover:fill-LightBlue"
            onClick={next}
            onKeyDown={disable}
            title="Next (n)"
          >
            <svg width="15" height="15" viewBox="0 0 12 12">
              <path d="M2 1v10h-2v-10h1zm9 0l-8 5 8 5-10z" />
            </svg>
          </button>
          <input
            className="ml-2 w-20 cursor-pointer"
            title="Volume (up/down)"
            type="range"
            min={0}
            max={1}
            value={volume}
            step={0.01}
            onKeyDown={arrow}
            onChange={(ev) => {
              const val = Number(ev.target.value);
              audioRef.current!.volume = val;
              setVolume(val);
              if (val === 0) setMuted(true);
              else if (muted) setMuted(false);
            }}
          />
          <button
            className="mx-2 fill-white stroke-white stroke-[4] hover:fill-LightBlue hover:stroke-LightBlue"
            onClick={mute}
            onKeyDown={disable}
            title="Mute (m)"
          >
            <svg width="25" height="25" viewBox="0 0 75 75">
              <path d="M39.389 13.769L22.235 28.606L6 28.606L6 47.699L21.989 47.699L39.389 62.75L39.389 13.769z" />
              {muted ? (
                <path className="fill-none" d="m49 26 20 24m0-24-20 24" />
              ) : (
                <path
                  className="fill-none"
                  d="M48 27.6a19.5 19.5 0 0 1 0 21.4M55.1 20.5a30 30 0 0 1 0 35.6M61.6 14a38.8 38.8 0 0 1 0 48.6"
                />
              )}
            </svg>
          </button>
          <input
            className="w-full cursor-pointer"
            title="Playback (left/right)"
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            step={0.1}
            onKeyDown={arrow}
            onChange={(ev) => {
              setCurrentTime(parseFloat(ev.target.value));
              audioRef.current!.currentTime = parseFloat(ev.target.value);
            }}
          />
          <div className="ml-2">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicVisualizer;
