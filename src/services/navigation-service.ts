import { NavigationContainerRef } from '@react-navigation/core';
import * as React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: Record<string, unknown>): void {
  navigationRef.current?.navigate(name, params);
}

export function goBack(): void {
  navigationRef.current?.goBack();
}

export function isFocused(): boolean {
  return navigationRef.current?.isFocused() || false;
}
export function canGoBack(): boolean {
  return navigationRef.current?.canGoBack() || false;
}
