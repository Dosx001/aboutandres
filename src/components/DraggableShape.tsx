import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MiniShape from "./MiniShape";
import Shape from "./Shape";

const DraggableShape = ({
  drag,
  shape,
  color,
  size,
  x,
  y,
}: {
  drag: boolean;
  shape: string;
  color: string;
  size: number;
  x: number;
  y: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [shaper, setShaper] = useState(shape);
  const [clr, setClr] = useState(color);
  const [scale, setScale] = useState(size);
  const [rotate, setRotate] = useState(0);
  const [draggable, setDraggable] = useState(drag);
  const [fixed, setFixed] = useState({ x: x, y: x });
  const [pointer, setPointer] = useState({ x: x, y: y });
  useEffect(() => setFixed(pointer), [draggable]);
  useEffect(() => {
    const updatePointer = ({ clientX, clientY }: MouseEvent) => {
      const el = ref.current!;
      setPointer({
        x: clientX - el.offsetLeft - el.offsetWidth / 2,
        y: clientY - el.offsetTop - el.offsetHeight / 2,
      });
    };
    window.addEventListener("pointermove", updatePointer);
    return () => window.removeEventListener("pointermove", updatePointer);
  });
  const toggle = () => {
    setDraggable(!draggable);
    setVisible(draggable);
  };
  return (
    <motion.div
      className={"absolute z-10"}
      ref={ref}
      animate={draggable ? pointer : fixed}
      style={{ fill: clr }}
      transition={{
        type: "spring",
        damping: 5,
        stiffness: 50,
        restDelta: 0.001,
      }}
    >
      <Shape
        shape={shaper}
        toggle={toggle}
        color={clr}
        scale={scale}
        rotate={rotate}
      />
      {visible && (
        <div className="relative h-fit rounded bg-[navy] p-1">
          <div className="flex justify-between">
            <div>Settings</div>
            <button onClick={() => setVisible(false)}>
              <svg
                viewBox="0 0 10 10"
                width="20"
                height="20"
                className="rounded bg-red-600 stroke-white stroke-2 p-1"
              >
                <path className="p-1" d="m0 0l10 10M0 10l10 -10" />
              </svg>
            </button>
          </div>
          <div className="flex fill-gray-500">
            {["star", "star4", "saturn", "moon", "cresent"].map((s) => (
              <button className="mx-1" key={s} onClick={() => setShaper(s)}>
                <MiniShape shape={s} />
              </button>
            ))}
          </div>
          <div>
            {[
              "red",
              "orange",
              "yellow",
              "green",
              "blue",
              "indigo",
              "violet",
            ].map((c) => (
              <button
                key={c}
                onClick={() => setClr(c)}
                className="mx-1 h-4 w-4 rounded"
                style={{ background: c }}
              />
            ))}
          </div>
          <div>
            <span>Scale</span>
            <input
              className="ml-[18px] cursor-pointer align-bottom"
              type="range"
              min={0.5}
              max={3}
              value={scale}
              step={0.1}
              onChange={(ev) => setScale(Number(ev.target.value))}
            />
          </div>
          <div>
            <span>Rotate</span>
            <input
              className="ml-2 cursor-pointer align-bottom"
              type="range"
              min={0}
              max={360}
              value={rotate}
              step={1}
              onChange={(ev) => setRotate(Number(ev.target.value))}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DraggableShape;
