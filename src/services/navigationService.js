/*
 * Author: Tharindu Seneviratne
 * Date: 26/01/2020
 *
 * Main navigation service for routes
 */
import * as React from 'react';

export const navigationRef = React.createRef();
export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};
