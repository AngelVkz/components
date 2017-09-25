import { configure } from '@storybook/react';
import './bootstrap.css'

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
