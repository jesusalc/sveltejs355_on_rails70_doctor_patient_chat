import HMR from '@roxi/routify/hmr'
import App from './App.svelte';
import { Router } from "@roxi/routify";
import { routes } from "../../../.routify/routes";
import Counter from "./Counter.svelte";

const app = HMR(App, { target: document.body }, 'routify-app')

import * as socket from './websockets/routes'

export default app;
