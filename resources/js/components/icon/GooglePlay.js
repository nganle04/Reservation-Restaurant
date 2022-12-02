import * as React from "react"

const IconGooglePlay = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props} viewBox="0 0 50 50">
    <defs>
      <linearGradient
        id="a"
        x1={0.915}
        x2={-0.384}
        y1={6.617}
        y2={5.947}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#00a0ff" />
        <stop offset={0.007} stopColor="#00a1ff" />
        <stop offset={0.26} stopColor="#00beff" />
        <stop offset={0.512} stopColor="#00d2ff" />
        <stop offset={0.76} stopColor="#00dfff" />
        <stop offset={1} stopColor="#00e3ff" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={1.076}
        x2={-1.305}
        y1={17.089}
        y2={17.089}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#ffe000" />
        <stop offset={0.409} stopColor="#ffbd00" />
        <stop offset={0.775} stopColor="orange" />
        <stop offset={1} stopColor="#ff9c00" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={0.863}
        x2={-0.502}
        y1={10.864}
        y2={9.095}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#ff3a44" />
        <stop offset={1} stopColor="#c31162" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={-0.188}
        x2={0.421}
        y1={13.585}
        y2={12.794}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#32a071" />
        <stop offset={0.068} stopColor="#2da771" />
        <stop offset={0.476} stopColor="#15cf74" />
        <stop offset={0.801} stopColor="#06e775" />
        <stop offset={1} stopColor="#00f076" />
      </linearGradient>
    </defs>
    <g transform="translate(-753 -5)">
      <circle
        cx={25}
        cy={25}
        r={25}
        fill="var(--theme-footer-appStoreBackground, rgba(255,255,255,1.0))"
        transform="translate(753 5)"
      />
      <path
        fill="url(#a)"
        d="M10.421 7.537a1.927 1.927 0 0 0-.441 1.341v21.183a1.894 1.894 0 0 0 .441 1.341l.067.067 11.865-11.856v-.287L10.488 7.47z"
        transform="translate(758.974 10.53)"
      />
      <path
        fill="url(#b)"
        d="M26.855 23.918 22.9 19.962v-.287l3.955-3.955.086.048 4.683 2.662c1.341.757 1.341 2 0 2.768l-4.683 2.662z"
        transform="translate(758.427 10.181)"
      />
      <path
        fill="url(#c)"
        d="M26.414 24.051 22.373 20 10.44 31.933a1.553 1.553 0 0 0 1.992.057l13.982-7.939"
        transform="translate(758.954 10)"
      />
      <path
        fill="url(#d)"
        d="M26.413 15.414 12.422 7.466a1.553 1.553 0 0 0-1.992.057l11.942 11.933z"
        transform="translate(758.955 10.544)"
      />
      <path
        d="m16.339 16.27-13.905 7.9a1.591 1.591 0 0 1-1.915.01l-.067.067.067.067a1.592 1.592 0 0 0 1.915-.01l13.992-7.949z"
        opacity={0.2}
      />
      <path
        opacity={0.12}
        d="M.451 24.114a1.927 1.927 0 0 1-.441-1.341v.144a1.894 1.894 0 0 0 .441 1.341l.067-.067zM21.118 29.83l-4.779 2.71.086.086 4.683-2.662a1.683 1.683 0 0 0 1.005-1.379 1.742 1.742 0 0 1-.995 1.245z"
        className="cls-7"
      />
      <path
        fill="#fff"
        d="M2.44 16.729 21.117 27.34a1.79 1.79 0 0 1 1.006 1.245 1.671 1.671 0 0 0-1.006-1.379L2.44 16.595C1.102 15.838.01 16.47.01 18.003v.144c0-1.543 1.101-2.175 2.43-1.418z"
        opacity={0.25}
      />
    </g>
  </svg>
)

export default IconGooglePlay
