/*
 * Author: Tharindu Seneviratne
 * Date: 28/02/2020
 *
 * Skeleton component for render loading & refreshing states
 */

import React from 'react';
import PropTypes from 'prop-types';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Skeleton = ({loading, refreshing, skeltonContent, children}) => {
  if (loading || refreshing) {
    return (
      <SkeletonPlaceholder speed={800}>{skeltonContent}</SkeletonPlaceholder>
    );
  } else {
    return children;
  }
};

Skeleton.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Skeleton;
