import { b } from './setup.js';
import { render } from './render.js';

// Attach Render to Setup
b.render = render;

export { b };

