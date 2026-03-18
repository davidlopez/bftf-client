<script lang="ts">
  import { browser } from "$app/environment";
  import favicon from "$lib/assets/favicon.svg";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { onMount } from "svelte";
  import "../app.scss";

  type Theme = "light" | "dark";

  let { children } = $props();
  let theme = $state<Theme>("light");

  const applyTheme = (value: Theme) => {
    if (!browser) return;
    document.documentElement.dataset.theme = value;
    localStorage.setItem("theme", value);
  };

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      theme = savedTheme;
    } else {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    applyTheme(theme);
  });

  const toggleTheme = () => {
    theme = theme === "light" ? "dark" : "light";
    applyTheme(theme);
  };
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Brotherhood for the Fallen Colorado</title>
  <meta name="description" content="Brotherhood for the Fallen Colorado honors fallen officers and supports their families, departments, and communities." />
</svelte:head>

<div class="shell">
  <Nav {theme} onThemeToggle={toggleTheme} />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>

<style lang="scss">
  .shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    margin: 2rem auto 2.5rem;
    width: min(1100px, 94vw);
    display: grid;
    gap: 1.5rem;
  }
</style>
