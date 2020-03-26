import React from 'react';
import { action } from '@storybook/addon-actions';
import { Color } from '@storybook/react/demo';
import ColorField from '../core/components/color-field'
import ColorContent from './components/color'

export default {
  title: 'Color',
  component: Color,
};

export const TestButton = () => (
  <ColorField />
);

export const Button = () => (
  <ColorContent />
);
