import React from "react";

type ComponentProps = {
  width: string,
  height: string,
}

const ElysiumLabsIcon = ({width, height}: ComponentProps) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width={width} height={height} viewBox="0 0 200.000000 200.000000"
    preserveAspectRatio="xMidYMid meet" >
      <metadata>
      Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
        <path d="M784 1980 c-387 -87 -679 -381 -764 -768 -24 -107 -26 -298 -6 -404
        74 -378 354 -678 726 -780 75 -20 107 -23 265 -22 154 0 192 3 260 22 166 46
        322 137 446 261 124 124 215 280 261 446 19 68 22 106 22 260 1 158 -2 190
        -22 265 -58 210 -179 394 -347 525 -137 107 -269 168 -433 201 -104 20 -306
        17 -408 -6z m762 -437 c-3 -10 -44 -164 -91 -343 -48 -179 -110 -415 -139
        -525 -29 -110 -66 -248 -81 -307 -15 -60 -31 -108 -34 -107 -3 0 -222 213
        -486 473 l-479 474 39 11 c113 33 1252 340 1263 340 8 1 11 -6 8 -16z"/>
        <path d="M1171 1330 c-194 -116 -363 -210 -374 -210 -10 0 -130 18 -265 40
        -135 22 -246 39 -248 37 -2 -2 160 -93 360 -201 l364 -198 87 -249 c48 -137
        90 -249 93 -249 3 0 2 185 -2 410 l-7 410 149 178 c82 97 161 192 176 210 15
        17 26 32 24 32 -1 0 -162 -95 -357 -210z"/>
      </g>
    </svg>
  )
}

export default ElysiumLabsIcon;