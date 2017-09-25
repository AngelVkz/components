import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import CheckBox from '../components/CheckBox'
import SmallCircleInCircle from '../components/Prueba'

const story = storiesOf('CheckButtons')

story.add('PurpleCheck', () => (
  <CheckBox />
))

const story2 = storiesOf('Patterns-React')

story2.add('SmallCircleInCircle', () => (
  <SmallCircleInCircle />
))