import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      display: "block",
      fill: "none",
      height: 14,
      width: 14,
      stroke: "currentcolor",
      strokeWidth: 3.42857,
      overflow: "visible",
    }}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v21M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13" />
  </svg>
)
export default SvgComponent
