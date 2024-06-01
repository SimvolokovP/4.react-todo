import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={420}
    height={90}
    viewBox="0 0 420 90"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="6" ry="6" width="420" height="90" />
  </ContentLoader>
);