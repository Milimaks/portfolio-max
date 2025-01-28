import { ComponentPropsWithoutRef } from "react";

export const SiteIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size || 414}
      height={props.size || 221}
      viewBox="0 0 414 221"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M338.917 68L413.522 99.4547V121.312L338.917 152.329L333 130.832L388.169 110.128L333 89.3439L338.917 68Z"
        fill="#111111"
      />
      <path
        d="M74.6051 67.7485L0 99.204L0 121.062L74.6051 152.079L80.5222 130.582L25.353 109.877L80.5222 89.0932L74.6051 67.7485Z"
        fill="#111111"
      />
      <path
        d="M143.866 25H169.53L112.516 192.111H85.5222L143.866 25Z"
        fill="#111111"
      />
      <path
        d="M293.31 162.32C293.183 163.84 292.993 165.423 292.74 167.07C292.487 168.717 292.043 170.237 291.41 171.63C290.777 173.15 289.953 174.29 288.94 175.05C287.547 176.317 285.9 177.013 284 177.14C282.227 177.773 280.517 177.963 278.87 177.71C277.223 177.457 275.703 177.013 274.31 176.38C272.537 175.24 271.207 173.91 270.32 172.39C269.56 170.743 268.99 169.033 268.61 167.26C268.23 165.487 268.04 163.65 268.04 161.75C268.04 159.85 268.04 158.077 268.04 156.43V141.61L267.85 112.54C267.85 110.513 267.85 108.93 267.85 107.79C267.85 106.65 267.85 105.637 267.85 104.75C267.85 103.737 267.787 102.66 267.66 101.52C267.66 100.253 267.66 98.48 267.66 96.2C267.66 95.82 267.66 95.1867 267.66 94.3C267.787 93.2867 267.723 90.69 267.47 86.51C262.53 94.7433 258.413 101.393 255.12 106.46C251.953 111.4 249.23 115.263 246.95 118.05C244.797 120.71 242.897 122.547 241.25 123.56C239.603 124.447 237.893 124.953 236.12 125.08C235.107 125.207 234.093 125.017 233.08 124.51C232.067 124.003 231.053 123.37 230.04 122.61C229.153 121.85 228.267 121.09 227.38 120.33C226.62 119.443 225.987 118.62 225.48 117.86C222.44 114.06 219.02 109.5 215.22 104.18C211.42 98.86 207.493 92.4 203.44 84.8C203.44 84.9267 203.377 87.0167 203.25 91.07C203.25 95.1233 203.25 100.19 203.25 106.27C203.25 112.223 203.187 118.683 203.06 125.65C203.06 132.49 202.997 138.887 202.87 144.84C202.87 150.793 202.807 155.797 202.68 159.85C202.553 163.777 202.427 165.74 202.3 165.74C202.3 167.893 201.793 169.92 200.78 171.82C199.767 173.593 198.373 175.05 196.6 176.19C194.953 177.33 192.99 177.963 190.71 178.09C188.43 178.217 185.96 177.583 183.3 176.19C181.653 175.177 180.387 173.72 179.5 171.82C178.74 169.92 178.233 168.147 177.98 166.5C177.853 164.727 177.727 163.017 177.6 161.37C177.6 159.723 177.6 158.013 177.6 156.24L177.79 141.42L177.98 112.16V86.7C177.98 75.68 178.36 64.85 179.12 54.21C179.12 52.8167 179.247 51.55 179.5 50.41C179.88 49.1433 180.323 47.94 180.83 46.8C181.843 44.7733 183.173 43.2533 184.82 42.24C186.72 41.1 188.747 40.53 190.9 40.53C191.787 40.53 192.61 40.5933 193.37 40.72C194.257 40.72 195.08 40.7833 195.84 40.91C198.373 41.4167 200.527 42.9367 202.3 45.47C204.2 47.8767 205.973 49.9667 207.62 51.74C208.633 52.88 209.71 54.2733 210.85 55.92C211.99 57.5667 213.13 59.2767 214.27 61.05C215.41 62.8233 216.487 64.5333 217.5 66.18C218.513 67.8267 219.4 69.2833 220.16 70.55C223.453 75.87 226.367 80.7467 228.9 85.18C231.56 89.6133 234.03 93.4133 236.31 96.58C236.69 96.2 237.133 95.6933 237.64 95.06C238.147 94.3 238.653 93.54 239.16 92.78C239.793 91.8933 240.3 91.07 240.68 90.31C241.187 89.55 241.567 88.9167 241.82 88.41C243.087 86.3833 244.353 84.42 245.62 82.52C246.887 80.4933 248.217 78.4033 249.61 76.25C251.13 73.97 252.65 71.5 254.17 68.84C255.817 66.18 257.717 63.14 259.87 59.72C260.757 58.2 261.897 56.3633 263.29 54.21C264.683 52.0567 266.267 49.9667 268.04 47.94C269.813 45.9133 271.65 44.2033 273.55 42.81C275.577 41.29 277.603 40.53 279.63 40.53C280.643 40.53 281.53 40.5933 282.29 40.72C283.05 40.72 283.81 40.7833 284.57 40.91C286.09 41.0367 287.547 41.7333 288.94 43C289.953 44.0133 290.713 45.09 291.22 46.23C291.727 47.8767 292.043 49.27 292.17 50.41C292.297 51.2967 292.36 52.12 292.36 52.88C292.487 53.64 292.55 54.4 292.55 55.16C292.55 62.2533 292.613 69.2833 292.74 76.25C292.867 83.2167 292.93 90.2467 292.93 97.34C292.93 105.953 292.93 114.82 292.93 123.94C293.057 133.06 293.12 141.927 293.12 150.54C293.12 152.313 293.183 154.213 293.31 156.24C293.437 158.267 293.437 160.293 293.31 162.32Z"
        fill="black"
      />
    </svg>
  );
};
