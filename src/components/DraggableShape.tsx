import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const res = (view: string, element: JSX.Element) => (
    <motion.div
      className={`absolute z-10 ${x < 0 ? "right-0" : ""}`}
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
      <motion.svg
        viewBox={view}
        className={`glow-${clr}`}
        width="100"
        height="100"
        animate={{ scale: scale, rotate: rotate }}
      >
        {element}
      </motion.svg>
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
  const toggle = () => {
    setDraggable(!draggable);
    setVisible(draggable);
  };
  switch (shape) {
    case "star":
      return res(
        "0 0 50 50",
        <>
          <path
            d="M25 5L32 20L48 22L36 34L40 48L25 42L10 48L14 34L2 22L18 20"
            onClick={toggle}
            className="hover:cursor-pointer"
          />
        </>
      );
    case "star4":
      return res(
        "0 0 50 50",
        <>
          <path
            d="M5 25L20 20L25 5L30 20L45 25L30 30L25 45L20 30"
            onClick={toggle}
            className="hover:cursor-pointer"
          />
        </>
      );
    case "saturn":
      return res(
        "0 0 30 20",
        <>
          <circle
            cx="15"
            cy="10"
            r="9"
            onClick={toggle}
            className="hover:cursor-pointer"
          />
          <ellipse
            cx="15"
            cy="10"
            rx="15"
            ry="3"
            onClick={toggle}
            className="hover:cursor-pointer"
          />
        </>
      );
    case "cresent":
      return res(
        "0 0 35 35",
        <>
          <path
            d="M20 2A1 1 0 0 0 20 32A18 18 0 0 1 20 2z"
            onClick={toggle}
            className="translate-x-2 hover:cursor-pointer"
          />
        </>
      );
    default:
      return res(
        "0 0 10 10",
        <>
          <circle
            cx="5"
            cy="5"
            r="4"
            onClick={toggle}
            className="hover:cursor-pointer"
          />
        </>
      );
  }
};

export default DraggableShape;
