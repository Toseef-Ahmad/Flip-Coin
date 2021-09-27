import React, { useState } from 'react';
import { Coin } from './Coin';
import { Button } from './Button';
import { CountClicks } from './CountClicks';
import './FlipCoin.css';

export const FlipCoin = () => {
  const [srcImageFace, setSrcImageFace] = useState(null);
  const [totalFlips, setTotalFlips] = useState(0);
  const [totalTails, setTotalTails] = useState(0);
  const [totalHeads, setTotalHeads] = useState(0);

  const coinFaces = [
    { src: 'https://tinyurl.com/react-coin-heads-jpg', name: 'head' },
    {
      src: 'https://images.freeimages.com/images/small-previews/dcf/chinese-coin-1-1417095.jpg',
      name: 'tail',
    },
  ];

  const getRandomImg = () => {
    const random = Math.floor(Math.random() * 2);
    return coinFaces[random];
  };

  const flipCoin = () => {
    const imgObj = getRandomImg();
    imgObj.name === 'head'
      ? setTotalHeads((prev) => prev + 1)
      : setTotalTails((prev) => prev + 1);
    setTotalFlips((prev) => prev + 1);
    setSrcImageFace(imgObj.src);
  };

  return (
    <>
      <div className="center">
        <Coin coinFace={srcImageFace} />
        <Button flipCoin={flipCoin} />
        <div className="CountClicks">
          <CountClicks
            totalFlips={totalFlips}
            totalHeads={totalHeads}
            totalTails={totalTails}
          />
        </div>
      </div>
    </>
  );
};
