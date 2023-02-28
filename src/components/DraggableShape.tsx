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
    >
      <svg
        viewBox={view}
        className={`glow-${color}`}
        width={100 * size}
        height={100 * size}
        style={{ fill: color }}
      >
        {element}
      </svg>
    </motion.div>
  );
  switch (shape) {
    case "star":
      return res(
        "0 0 50 50",
        <>
          <path
            d="M25 5L32 20L48 22L36 34L40 48L25 42L10 48L14 34L2 22L18 20"
            onClick={() => setDraggable(!draggable)}
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
            onClick={() => setDraggable(!draggable)}
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
            onClick={() => setDraggable(!draggable)}
            className="hover:cursor-pointer"
          />
          <ellipse
            cx="15"
            cy="10"
            rx="15"
            ry="3"
            onClick={() => setDraggable(!draggable)}
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
            onClick={() => setDraggable(!draggable)}
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
            onClick={() => setDraggable(!draggable)}
            className="hover:cursor-pointer"
          />
        </>
      );
  }
};

export default DraggableShape;
