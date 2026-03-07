<script lang="ts">
  import { page } from "$app/state";

  type Theme = "light" | "dark";

  const links = [
    { href: "/", label: "Home" },
    { href: "/supporters", label: "Supporters" },
    { href: "/bod", label: "Board of Directors" }
  ];

  const partnerLinks = [
    { href: "http://www.bitnermemorialfund.org/", label: "Bitner Memorial 5K/10K" },
    { href: "http://www.odmp.org/", label: "ODMP" }
  ];

  let mobileOpen = $state(false);
  let partnerOpen = $state(false);
  let { theme = "light", onThemeToggle } = $props<{ theme?: Theme; onThemeToggle: () => void }>();

  const isActive = (href: string) => (href === "/" ? page.url.pathname === "/" : page.url.pathname.startsWith(href));

  const closeMenus = () => {
    mobileOpen = false;
    partnerOpen = false;
  };
</script>

<header class="site-header">
  <nav class="desktop-nav" aria-label="Primary navigation">
    <a class="brand" href="/">BFTF Colorado</a>

    {#each links as link}
      <a class:active={isActive(link.href)} href={link.href}>{link.label}</a>
    {/each}

    <div class="dropdown" role="presentation" onmouseenter={() => (partnerOpen = true)} onmouseleave={() => (partnerOpen = false)}>
      <button aria-expanded={partnerOpen} type="button" onclick={() => (partnerOpen = !partnerOpen)}>
        Events &amp; Partners
        <span class:chevOpen={partnerOpen}>⌄</span>
      </button>
      {#if partnerOpen}
        <div class="dropdown-menu">
          {#each partnerLinks as partner}
            <a href={partner.href} target="_blank" rel="noreferrer">{partner.label}</a>
          {/each}
        </div>
      {/if}
    </div>

    <button class="theme-toggle" type="button" onclick={onThemeToggle} aria-label="Toggle light and dark mode">
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>

    <a class="donate" href="https://www.paypal.com/paypalme/brotherhoodaurora" target="_blank" rel="noreferrer"> Support Us </a>
  </nav>

  <nav class="mobile-nav" aria-label="Mobile navigation">
    <a class="brand" href="/" onclick={closeMenus}>BFTF Colorado</a>
    <button class="hamburger" aria-expanded={mobileOpen} type="button" onclick={() => (mobileOpen = !mobileOpen)}> ☰ </button>

    {#if mobileOpen}
      <div class="mobile-panel">
        {#each links as link}
          <a class:active={isActive(link.href)} href={link.href} onclick={closeMenus}>{link.label}</a>
        {/each}

        <div class="mobile-group">Events &amp; Partners</div>
        {#each partnerLinks as partner}
          <a class="partner-link" href={partner.href} target="_blank" rel="noreferrer">{partner.label}</a>
        {/each}

        <button class="theme-toggle mobile-theme" type="button" onclick={onThemeToggle}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

        <a class="donate" href="https://www.paypal.com/paypalme/brotherhoodaurora" target="_blank" rel="noreferrer"> Support Us </a>
      </div>
    {/if}
  </nav>
</header>

<style lang="scss">
  .site-header {
    position: sticky;
    top: 0;
    z-index: 40;
    backdrop-filter: blur(10px);
    background: var(--header-bg);
    border-bottom: 1px solid rgba(16, 35, 73, 0.08);
  }

  .desktop-nav,
  .mobile-nav {
    margin: 0 auto;
    width: min(1100px, 94vw);
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.85rem 0;
  }

  .brand {
    margin-right: auto;
    font-size: 1.35rem;
    font-weight: 800;
    text-decoration: none;
    letter-spacing: 0.02em;
    background: linear-gradient(112deg, #5f98ff, #f2828a 56%, #f4cd72);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.45);
  }

  :global(html[data-theme="dark"]) .brand {
    background: linear-gradient(112deg, var(--brand), var(--danger) 56%, var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-stroke: 0 transparent;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: var(--muted);
    transition: color 160ms ease;

    &:hover,
    &.active {
      color: var(--brand);
    }
  }

  .dropdown {
    position: relative;

    button {
      border: 0;
      background: transparent;
      font: inherit;
      color: var(--muted);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      font-weight: 600;
    }
  }

  .dropdown-menu {
    position: absolute;
    right: 0;
    top: calc(100% + 0.6rem);
    width: max-content;
    display: grid;
    gap: 0.5rem;
    padding: 0.8rem;
    border: 1px solid var(--border);
    border-radius: 0.8rem;
    background: var(--surface);
    box-shadow: var(--shadow);

    a {
      padding: 0.2rem 0.4rem;
    }
  }

  .donate {
    background: linear-gradient(120deg, var(--brand), var(--brand-strong));
    color: #fff;
    border-radius: 0.65rem;
    padding: 0.65rem 0.95rem;

    &:hover {
      color: #fff;
      filter: brightness(1.08);
    }
  }

  .theme-toggle {
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--brand);
    border-radius: 0.65rem;
    padding: 0.62rem 0.8rem;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
    transition:
      color 150ms ease,
      border-color 150ms ease,
      transform 150ms ease;

    &:hover {
      color: var(--brand-strong);
      border-color: var(--brand);
      transform: translateY(-1px);
    }
  }

  .mobile-theme {
    width: 100%;
    text-align: center;
  }

  .chevOpen {
    transform: rotate(180deg);
  }

  .mobile-nav {
    display: none;
  }

  .hamburger {
    border: 1px solid var(--border);
    border-radius: 0.65rem;
    background: var(--surface);
    width: 2.35rem;
    height: 2.35rem;
    font-size: 1.2rem;
  }

  .mobile-panel {
    position: absolute;
    left: 3vw;
    right: 3vw;
    top: calc(100% + 0.5rem);
    display: grid;
    gap: 0.8rem;
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: 1rem;
    background: var(--surface);
    box-shadow: var(--shadow);

    .mobile-group {
      margin-top: 0.2rem;
      color: var(--text);
      font-weight: 700;
      font-size: 0.92rem;
    }

    .partner-link {
      font-size: 0.94rem;
    }

    .donate {
      text-align: center;
    }
  }

  @media (max-width: 920px) {
    .desktop-nav {
      display: none;
    }

    .mobile-nav {
      display: flex;
      position: relative;
    }
  }
</style>
