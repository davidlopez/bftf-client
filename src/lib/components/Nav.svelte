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
  let partnerCloseTimer: ReturnType<typeof setTimeout> | null = null;
  let { theme = "light", onThemeToggle } = $props<{ theme?: Theme; onThemeToggle: () => void }>();

  const isActive = (href: string) => (href === "/" ? page.url.pathname === "/" : page.url.pathname.startsWith(href));

  const closeMenus = () => {
    mobileOpen = false;
    partnerOpen = false;
  };

  const openPartners = () => {
    if (partnerCloseTimer) {
      clearTimeout(partnerCloseTimer);
      partnerCloseTimer = null;
    }
    partnerOpen = true;
  };

  const closePartnersWithDelay = () => {
    if (partnerCloseTimer) clearTimeout(partnerCloseTimer);
    partnerCloseTimer = setTimeout(() => {
      partnerOpen = false;
      partnerCloseTimer = null;
    }, 140);
  };
</script>

<header class="site-header">
  <div class="header-inner">
    <button
      class="theme-toggle"
      class:is-dark={theme === "dark"}
      type="button"
      onclick={onThemeToggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span class="icon sun" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
        </svg>
      </span>
      <span class="icon moon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.2 14.8a8.4 8.4 0 0 1-10-10A9.2 9.2 0 1 0 21 16.6a7.6 7.6 0 0 1-1.8-1.8z" />
        </svg>
      </span>
    </button>

    <nav class="desktop-nav" aria-label="Primary navigation">
      <a class="brand" href="/">BFTF Colorado</a>

      {#each links as link}
        <a class:active={isActive(link.href)} href={link.href}>{link.label}</a>
      {/each}

      <div class="dropdown" role="presentation" onmouseenter={openPartners} onmouseleave={closePartnersWithDelay}>
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

      <a class="donate" href="https://www.paypal.com/paypalme/brotherhoodaurora" target="_blank" rel="noreferrer"> Support Us </a>
    </nav>

    <nav class="mobile-nav" aria-label="Mobile navigation">
      <a class="brand" href="/" onclick={closeMenus}>BFTF Colorado</a>
      <button
        class="hamburger"
        class:is-open={mobileOpen}
        aria-expanded={mobileOpen}
        type="button"
        onclick={() => (mobileOpen = !mobileOpen)}
        aria-label="Toggle navigation menu"
      >
        <span class="bar bar-1"></span>
        <span class="bar bar-2"></span>
        <span class="bar bar-3"></span>
      </button>

      {#if mobileOpen}
        <div class="mobile-panel">
          {#each links as link}
            <a class:active={isActive(link.href)} href={link.href} onclick={closeMenus}>{link.label}</a>
          {/each}

          <div class="mobile-group">Events &amp; Partners</div>
          {#each partnerLinks as partner}
            <a class="partner-link" href={partner.href} target="_blank" rel="noreferrer">{partner.label}</a>
          {/each}

          <a class="donate" href="https://www.paypal.com/paypalme/brotherhoodaurora" target="_blank" rel="noreferrer"> Support Us </a>
        </div>
      {/if}
    </nav>
  </div>
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

  .header-inner {
    width: 100%;
    position: relative;
  }

  .desktop-nav,
  .mobile-nav {
    margin: 0 auto;
    width: min(1100px, 94vw);
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.85rem 3.5rem 0.85rem 0;
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

      span {
        transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
      }
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
    position: absolute;
    top: 50%;
    right: max(0.65rem, env(safe-area-inset-right));
    transform: translateY(-50%);
    z-index: 30;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--brand);
    box-shadow: var(--shadow-soft);
    cursor: pointer;
    display: grid;
    place-items: center;
    overflow: hidden;
    isolation: isolate;
    transition:
      border-color 180ms ease,
      transform 180ms ease,
      color 180ms ease;

    &::before {
      content: "";
      position: absolute;
      inset: -55%;
      background: conic-gradient(from 0deg, transparent, rgba(95, 152, 255, 0.35), transparent 42%);
      opacity: 0;
      transform: rotate(0deg);
      transition: opacity 200ms ease;
      animation: spin 1.8s linear infinite;
      z-index: -1;
    }

    &:hover {
      transform: translateY(calc(-50% - 1px));
      border-color: var(--brand);
      color: var(--brand-strong);

      &::before {
        opacity: 1;
      }
    }

    .icon {
      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      display: grid;
      place-items: center;
      transition:
        opacity 260ms ease,
        transform 360ms cubic-bezier(0.22, 1, 0.36, 1);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    .sun {
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }

    .moon {
      opacity: 0;
      transform: rotate(-80deg) scale(0.35);
    }

    &.is-dark {
      .sun {
        opacity: 0;
        transform: rotate(90deg) scale(0.32);
      }

      .moon {
        opacity: 1;
        transform: rotate(0deg) scale(1);
      }
    }
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
    background: var(--surface-muted);
    color: var(--text);
    width: 2.35rem;
    height: 2.35rem;
    padding: 0;
    display: grid;
    place-items: center;

    .bar {
      grid-area: 1 / 1;
      width: 0.95rem;
      height: 2px;
      border-radius: 2px;
      background: currentColor;
      transition:
        transform 220ms ease,
        opacity 180ms ease;
      transform-origin: center;
    }

    .bar-1 {
      transform: translateY(-3px);
    }

    .bar-3 {
      transform: translateY(3px);
    }

    &.is-open {
      .bar-1 {
        transform: translateY(0) rotate(45deg);
      }

      .bar-2 {
        opacity: 0;
      }

      .bar-3 {
        transform: translateY(0) rotate(-45deg);
      }
    }
  }

  .mobile-panel {
    position: absolute;
    left: 3vw;
    right: 3vw;
    top: calc(100% + 0.5rem);
    z-index: 20;
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

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }

  @media (max-width: 920px) {
    .desktop-nav {
      display: none;
    }

    .mobile-nav {
      display: flex;
      position: relative;
      padding-right: 3.2rem;
    }

    .theme-toggle {
      top: 50%;
      width: 2.3rem;
      height: 2.3rem;
    }
  }
</style>
