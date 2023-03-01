const MiniShape = ({ shape }: { shape: string }) => {
  switch (shape) {
    case "star":
      return (
        <svg viewBox="0 0 50 50" width="25" height="25">
          <path d="M25 5L32 20L48 22L36 34L40 48L25 42L10 48L14 34L2 22L18 20" />
        </svg>
      );
    case "star4":
      return (
        <svg viewBox="0 0 50 50" width="25" height="25">
          <path d="M5 25L20 20L25 5L30 20L45 25L30 30L25 45L20 30" />
        </svg>
      );
    case "saturn":
      return (
        <svg viewBox="0 0 30 20" width="25" height="25">
          <circle cx="15" cy="10" r="9" />
          <ellipse cx="15" cy="10" rx="15" ry="3" />
        </svg>
      );
    case "cresent":
      return (
        <svg viewBox="0 0 35 35" width="25" height="25">
          <path d="M20 2A1 1 0 0 0 20 32A18 18 0 0 1 20 2z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 10 10" width="25" height="25">
          <circle cx="5" cy="5" r="4" />
        </svg>
      );
  }
};

export default MiniShape;
