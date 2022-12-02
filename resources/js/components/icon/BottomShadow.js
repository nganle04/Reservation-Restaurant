import * as React from "react"

const BottomShadow = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={91} height={9}  viewBox="0 0 91 9" {...props}>
    <defs>
      <radialGradient
        id="a"
        cx={0.5}
        cy={0.5}
        r={0.5}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#3d185c" />
        <stop offset={1} stopColor="#0c0512" stopOpacity={0} />
      </radialGradient>
    </defs>
    <ellipse
      data-name="Ellipse 12"
      cx={45.5}
      cy={4.5}
      rx={45.5}
      ry={4.5}
      opacity={0.5}
      fill="url(#a)"
    />
  </svg>
)

export default BottomShadow
