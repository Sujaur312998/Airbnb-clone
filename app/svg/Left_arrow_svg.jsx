import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      display: "block",
      height: 12,
      width: 12,
      fill: "currentcolor",
    }}
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="m10.55.3 1.42 1.4L5.67 8l6.3 6.3-1.42 1.4-6.59-6.58a1.58 1.58 0 0 1-.1-2.13l.1-.11z" />
  </svg>
)
export default SvgComponent
