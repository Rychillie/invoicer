type Props = {
  width?: number;
  height?: number;
};

export default function Plus({ width = 16, height = 16, ...props }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.460938 6.85938C0.460938 6.38281 0.859375 5.98438 1.33594 5.98438H6.125V1.19531C6.125 0.71875 6.52344 0.320312 7 0.320312C7.47656 0.320312 7.875 0.71875 7.875 1.19531V5.98438H12.6641C13.1406 5.98438 13.5391 6.38281 13.5391 6.85938C13.5391 7.34375 13.1406 7.73438 12.6641 7.73438H7.875V12.5234C7.875 13 7.47656 13.3984 7 13.3984C6.52344 13.3984 6.125 13 6.125 12.5234V7.73438H1.33594C0.859375 7.73438 0.460938 7.34375 0.460938 6.85938Z"
        fill="currentColor"
      />
    </svg>
  );
}
