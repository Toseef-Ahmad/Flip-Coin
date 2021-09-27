import React from 'react';
import './CountClicks';

export const CountClicks = (props) => {
  const countTotalFlips = props.totalFlips;
  const countTotalHeads = props.totalHeads;
  const countTotalTils = props.totalTails;

  return (
    <>
      <p>
        Out of {countTotalFlips} flips, There have been {countTotalHeads} heads
        and {countTotalTils} tails
      </p>
    </>
  );
};

CountClicks.defaultProps = {
  totalFlips: 0,
  totalHeads: 0,
  totalTails: 0,
};
