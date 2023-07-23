// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "./components";
import HMR from '@roxi/routify/hmr'
import App from './svelte/App.svelte';

const app = HMR(App, { target: document.body }, 'routify-app')

import * as socket from './svelte/websockets/routes'

export default app;
