import * as React from "react"

const FootballField = (props) => (
  <svg
    width={75}
    height={115}
    viewBox="0 0 75 115"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      style={{
        fill: "#01935c",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.75835,
      }}
      width={75}
      height={115}
      rx={0}
      ry={0}
    />
    <path
      className="cls-1"
      d="M25.935 12.966h7.184a6.074 6.619 0 0 0 8.762 0h7.185A.937 1.02 0 0 0 50 11.95V0h-.467V11.95a.468.51 0 0 1-.467.508H25.935a.468.51 0 0 1-.468-.508V0H25v11.949a.937 1.02 0 0 0 .935 1.017zm15.269 0a5.598 6.1 0 0 1-7.407 0zM31.659 0h.467v4.322a.468.51 0 0 0 .468.509h9.813a.468.51 0 0 0 .467-.509V0h.467v4.322a.937 1.02 0 0 1-.934 1.017h-9.813a.937 1.02 0 0 1-.935-1.017Z"
      style={{
        fill: "#ccc",
        fillOpacity: 0.63921571,
        strokeWidth: 0.0825829,
        opacity: 1,
      }}
    />
    <path
      className="cls-1"
      d="M25.935 102.034h7.184a6.074 6.619 0 0 1 8.762 0h7.185A.937 1.02 0 0 1 50 103.05V115h-.467V103.05a.468.51 0 0 0-.467-.508H25.935a.468.51 0 0 0-.468.508V115H25v-11.949a.937 1.02 0 0 1 .935-1.017zm15.269 0a5.598 6.1 0 0 0-7.407 0zM31.659 115h.467v-4.322a.468.51 0 0 1 .468-.509h9.813a.468.51 0 0 1 .467.509V115h.467v-4.322a.937 1.02 0 0 0-.934-1.017h-9.813a.937 1.02 0 0 0-.935 1.017z"
      style={{
        fill: "#ccc",
        fillOpacity: 0.638618,
        strokeWidth: 0.0825829,
      }}
    />
    <rect
      style={{
        opacity: 1,
        fill: "#ccc",
        fillOpacity: 0.639216,
        stroke: "none",
        strokeWidth: 0.625082,
        strokeOpacity: 1,
      }}
      width={75}
      height={0.5}
      x={0.213}
      y={57.75}
      rx={0}
      ry={0}
    />
    <path
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 0.639216,
        stroke: "#000",
        strokeWidth: 1.284,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      d="M56.803 58.133a16.837 12.712 0 0 1 0 .097"
    />
    <path
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 0.639216,
        stroke: "#ccc",
        strokeWidth: 0.445841,
        strokeDasharray: "none",
        strokeOpacity: 0.686275,
      }}
      d="M44.777 58.29a7.277 7.238 0 0 1-3.65 6.275 7.277 7.238 0 0 1-7.288-.02 7.277 7.238 0 0 1-3.616-6.294"
    />
    <path
      style={{
        fill: "none",
        fillOpacity: 0.639216,
        stroke: "#ccc",
        strokeWidth: 0.445831,
        strokeDasharray: "none",
        strokeOpacity: 0.686275,
      }}
      d="M44.777-57.71a7.277 7.237 0 0 1-3.65 6.274 7.277 7.237 0 0 1-7.288-.02 7.277 7.237 0 0 1-3.616-6.293"
      transform="scale(1 -1)"
    />
  </svg>
)

export default FootballField
