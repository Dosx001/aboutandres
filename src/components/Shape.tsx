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
    case "comet":
      return (
        <motion.svg
          viewBox="0 0 24 24"
          className={`glow-${color}`}
          width="100"
          height="100"
          animate={{ scale: scale, rotate: rotate }}
        >
          <path
            d="M22.601 4.961l1.399 1.414-3.264 3.278c-1.551 1.551-2.536 4.262-2.801 6.44-.53 4.378-4.259 7.907-8.935 7.907-4.971 0-9-4.029-9-9 0-4.668 3.523-8.405 7.906-8.937 2.184-.265 4.889-1.245 6.444-2.801l3.278-3.262 1.414 1.399-3.277 3.277c-1.857 1.858-5.004 3.056-7.618 3.372-3.504.426-6.147 3.414-6.147 6.952 0 3.86 3.14 7 7 7 1.922 0 3.682-.78 4.956-2.055 3.192-3.192.865-7.206 5.366-11.707l3.279-3.277zm1.399-3.547l-1.414-1.414-9.458 9.461 1.414 1.414 9.458-9.461zm-9.5 13.586c0 3.038-2.463 5.5-5.5 5.5-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.037 0 5.5 2.462 5.5 5.5zm-7.25-.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75.336.75.75.75.75-.336.75-.75zm2.75 2.5c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm2-3.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5 1.5.671 1.5 1.5 1.5 1.5-.671 1.5-1.5z"
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
    case "ufo":
      return (
        <motion.svg
          viewBox="0 0 16 16"
          className={`glow-${color}`}
          width="100"
          height="100"
          animate={{ scale: scale, rotate: rotate }}
        >
          <rect onClick={toggle} className="hover:cursor-pointer" />
          <path
            d="M6,13L3,15L3.889,12.333L0,10L16,10L12.111,12.333L13,15L10,13L6,13ZM16,9L0,9L0,8L3,6C3,3.24 5.24,1 8,1C10.76,1 13,3.24 13,6L16,8L16,9Z"
            onClick={toggle}
            className="hover:cursor-pointer"
          />
        </motion.svg>
      );
    case "rocket":
      return (
        <motion.svg
          viewBox="0 0 16 16"
          className={`glow-${color}`}
          width="100"
          height="100"
          animate={{ scale: scale, rotate: rotate }}
        >
          <path
            d="M16 0c0 0-3.5-0.4-6.7 2.8-1.6 1.5-2.9 3.5-3.9 5.3l-2.5-0.6-1.6 1.6 2.8 1.4c-0.3 0.6-0.4 1-0.4 1l0.8 0.8c0 0 0.4-0.2 1-0.4l1.4 2.8 1.6-1.6-0.5-2.5c1.7-1 3.8-2.3 5.3-3.8 3.1-3.2 2.7-6.8 2.7-6.8zM12.8 4.8c-0.4 0.4-1.1 0.4-1.6 0-0.4-0.4-0.4-1.1 0-1.6 0.4-0.4 1.1-0.4 1.6 0 0.4 0.4 0.4 1.1 0 1.6z"
            onClick={toggle}
            className="hover:cursor-pointer"
          />
          <path
            d="M4 14.2c-0.8 0.8-2.6 0.4-2.6 0.4s-0.4-1.8 0.4-2.6c0.8-0.8 1.5-0.9 1.5-0.9s-1.3-0.3-2.1 0.6c-1.6 1.6-1 4.2-1 4.2s2.6 0.6 4.2-1c0.9-0.9 0.6-2.2 0.6-2.2s-0.2 0.7-1 1.5z"
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
    case "star":
      return (
        <motion.svg
          viewBox="0 0 100 100"
          className={`glow-${color}`}
          width="100"
          height="100"
          animate={{ scale: scale, rotate: rotate }}
        >
          <path
            d="M50 10L64 37L93 43L72 67L77 97L50 83L23 97L28 67L7 43L36 37Z"
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
    default:
      return (
        <motion.svg
          viewBox="0 0 504 504"
          className={`glow-${color}`}
          width="100"
          height="100"
          animate={{ scale: scale, rotate: rotate }}
        >
          <path
            d="M504,252c0-89.228-46.656-167.716-116.816-212.504c0.964-3.852,0.276-8.188-2.084-12.552 c-2.752-5.08-7.512-9.68-13.408-12.964c-12.412-6.908-25.74-5.868-31.212,2.096C312.936,5.716,283.128,0,252,0 C184.164,0,122.552,26.988,77.2,70.74c-3.744-2.012-8.416-2.264-13.476-0.632c-5.492,1.772-10.892,5.608-15.192,10.804 c-8.448,10.204-10.276,22.468-4.96,29.624C16.088,150.896,0,199.6,0,252c0,138.952,113.048,252,252,252 c41.436,0,80.532-10.34,115.052-28.136c2.924,3.024,7.172,4.512,12.388,4.512c0.116,0,0.24,0,0.348,0 c5.776,0,12.064-1.936,17.7-5.636c5.644-3.696,10.06-8.524,12.432-13.784c2.208-4.88,2.46-9.528,0.84-13.488 C467.604,401.22,504,330.82,504,252z M132.736,369.96c-7.748,7.748-22.708,5.348-33.416-5.364 c-10.708-10.708-13.104-25.668-5.36-33.416c7.744-7.748,22.708-5.348,33.416,5.36S140.48,362.216,132.736,369.96z M161.252,253.012c-26.46,0-47.912-21.448-47.912-47.908c0-26.46,21.448-47.912,47.912-47.912 c26.456,0,47.908,21.448,47.908,47.912C209.16,231.564,187.712,253.012,161.252,253.012z M267.74,342.732 c-17.42,0-31.544-14.12-31.544-31.544c0-17.416,14.12-31.54,31.544-31.54s31.54,14.12,31.54,31.54 C299.276,328.608,285.16,342.732,267.74,342.732z M338.6,196.42c-15.14,0-27.416-12.276-27.416-27.42 c0-15.14,12.276-27.416,27.416-27.416c15.144,0,27.416,12.276,27.416,27.416C366.02,184.144,353.748,196.42,338.6,196.42z M411.772,364.596c-10.704,10.712-25.66,13.108-33.416,5.364c-7.748-7.748-5.348-22.712,5.36-33.416 c10.716-10.708,25.672-13.104,33.416-5.36C424.888,338.928,422.488,353.892,411.772,364.596z"
            onClick={toggle}
            className="hover:cursor-pointer"
          />
        </motion.svg>
      );
  }
};

export default Shape;
