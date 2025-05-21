import React from 'react'
import PropTypes from 'prop-types';

const TriangleIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 550 495"
      className={`${className}`} >
      <g transform="translate(0.000000,495.000000) scale(0.04297,-0.04297)">
        <path d="M6300 11519 c-423 -46 -838 -228 -1114 -490 -118 -111 -201 -217
        -289 -364 -216 -364 -4708 -8206 -4742 -8280 -208 -444 -205 -916 9 -1361 226
        -470 672 -835 1179 -965 225 -57 -205 -53 5032 -56 3271 -3 4831 0 4898 7 494
        52 915 308 1198 729 156 231 256 484 306 776 21 124 24 452 5 570 -28 172 -78
        338 -160 535 -202 484 -448 929 -992 1795 -507 806 -375 581 -2120 3630 -821
        1436 -1520 2655 -1553 2710 -86 146 -145 221 -260 331 -231 222 -515 359 -873
        420 -109 18 -409 26 -524 13z"/>
      </g>
    </svg>
  )
}

TriangleIcon.propTypes = {
  className: PropTypes.string
};

export default TriangleIcon
