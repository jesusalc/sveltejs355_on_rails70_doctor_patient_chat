<script>
  	import { Router } from "@roxi/routify";
  	//import { routes } from "../.routify/routes";
  import Counter from "./Counter.svelte";
</script>
<style global>
  	/* @import "../assets/global.css"; */
</style>

<div class="flex flex-col items-center justify-center h-screen">
  <h1 class="text-4xl font-bold text-blue-700">Svelte App</h1>
  <Counter />
</div>
<!-- <Router {routes} /> -->