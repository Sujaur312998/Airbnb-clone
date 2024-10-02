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
    <path d="M5.41.3 4 1.7 10.3 8 4 14.3l1.41 1.4 6.6-6.58c.57-.58.6-1.5.1-2.13l-.1-.11z" />
  </svg>
)
export default SvgComponent
