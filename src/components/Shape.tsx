import { motion } from "framer-motion";

const Shape = ({
  shape,
  toggle,
  color,
  scale,
  rotate,
}: {
  shape: string;
  toggle: () => void;
  color: string;
  scale: number;
  rotate: number;
}) => {
  switch (shape) {
    case "star":
      return (
        <motion.svg
          viewBox="0 0 50 50"
          className={`glow-${color}`}
          width="100"
          height="100"
          animate={{ scale: scale, rotate: rotate }}
        >
          <path
            d="M25 5L32 20L48 22L36 34L40 48L25 42L10 48L14 34L2 22L18 20"
            onClick={toggle}
            className="hover:cursor-pointer"
          />
        </motion.svg>
      );
    case "star4":
      return (
        <motion.svg
          viewBox="0 0 50 50"
          className={`glow-${color}`}
          width="100"
          height="100"
          animate={{ scale: scale, rotate: rotate }}
        >
          <path
            d="M5 25L20 20L25 5L30 20L45 25L30 30L25 45L20 30"
            onClick={toggle}
            className="hover:cursor-pointer"
          />
        </motion.svg>
      );
    case "saturn":
      return (
        <motion.svg
          viewBox="0 0 30 20"
          className={`glow-${color}`}
          width="100"
          height="100"
          animate={{ scale: scale, rotate: rotate }}
        >
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
        </motion.svg>
      );
    case "cresent":
      return (
        <motion.svg
          viewBox="0 0 35 35"
          className={`glow-${color}`}
          width="100"
          height="100"
          animate={{ scale: scale, rotate: rotate }}
        >
          <path
            d="M20 2A1 1 0 0 0 20 32A18 18 0 0 1 20 2z"
            onClick={toggle}
            className="translate-x-2 hover:cursor-pointer"
          />
        </motion.svg>
      );
    default:
      return (
        <motion.svg
          viewBox="0 0 10 10"
          className={`glow-${color}`}
          width="100"
          height="100"
          animate={{ scale: scale, rotate: rotate }}
        >
          <circle
            cx="5"
            cy="5"
            r="4"
            onClick={toggle}
            className="hover:cursor-pointer"
          />
        </motion.svg>
      );
  }
};

export default Shape;
