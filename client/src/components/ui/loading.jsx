import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <ReactLoading type='spinningBubbles' color='black' height={100} width={100} />
  </div>
);

export default Loading;
