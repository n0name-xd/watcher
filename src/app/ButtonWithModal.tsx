"use client";
import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import DVRPlayer from './player';

export const ButtonWithModal = ({
  name,
  token,
  index,
}: {
  name: string;
  token: string;
  index: number;
}) => {
  const [showCamera, setShowCamera] = useState(false);

  const toggleCamera = () => {
    setShowCamera(!showCamera);
  };

  const hideCamera = () => {
    setShowCamera(false);
  };

  return (
    <React.Fragment>
      <button
        style={{ marginLeft: 8, marginRight: 8, width: 300 }}
        onClick={toggleCamera}
      >{`show camera ${name}`}</button>
      {showCamera ? (
        <Drawer anchor="right" open={showCamera} onClose={hideCamera}>
          <DVRPlayer
            options={
              {
                dvr: true,
                locale: 'ru',
                name,
                streamer_http: 'https://watcher.mayak-system.ru',
                query: `token=${token}`,
              } as any
            }
          />
        </Drawer>
      ) : null}
    </React.Fragment>
  );
};
