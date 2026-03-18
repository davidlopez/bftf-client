<script lang="ts">
  const donationOptions = [
    {
      name: "PayPal",
      description: "Make a secure one-time or recurring donation through PayPal.",
      href: "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=BFTFAPD%40gmail.com&currency_code=USD",
      icon: "paypal"
    },
    {
      name: "Venmo",
      description: "Send support directly through our official Venmo profile.",
      href: "https://venmo.com/u/Brotherhood-Colorado-38",
      icon: "venmo"
    }
  ];
</script>

<section class="support">
  <header>
    <p class="eyebrow">Support BFTF Colorado</p>
    <h1>Support Us</h1>
    <p>Your contribution helps us serve families and agencies during the most difficult moments.</p>
  </header>

  <div class="cards">
    {#each donationOptions as option}
      <article class="card">
        <h2>{option.name}</h2>
        <p>{option.description}</p>
        <a href={option.href} target="_blank" rel="noreferrer">
          {#if option.icon === "paypal"}
            <svg class="icon icon-paypal" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z"
              />
            </svg>
          {:else if option.icon === "venmo"}
            <svg class="icon icon-venmo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M19.9876 1.44H3.1626C2.2433 1.44 1.44 2.1015 1.44 3.0101V19.872C1.44 20.7859 2.2433 21.6 3.1626 21.6H19.9827C20.907 21.6 21.6 20.781 21.6 19.8725V3.0101C21.6054 2.1015 20.907 1.44 19.9876 1.44ZM12.51 17.415H7.8444L5.9737 6.2298l4.0838-.3879.99 7.9592c.9238-1.5052 2.0646-3.87 2.0646-5.4841 0-.8829-.1512-1.485-.3875-1.98L16.443 5.5845c.4302.7101.6237 1.44.6237 2.3657C17.0663 10.8977 14.5503 14.7267 12.51 17.415Z"
              />
            </svg>
          {/if}
          <span>Donate with {option.name}</span>
        </a>
      </article>
    {/each}
  </div>
</section>

<style lang="scss">
  .support {
    display: grid;
    gap: 1rem;

    header {
      border: 1px solid var(--border);
      border-radius: 1rem;
      padding: 1.2rem;
      box-shadow: var(--shadow-soft);
      background:
        linear-gradient(145deg, color-mix(in oklab, var(--surface) 86%, var(--brand) 14%), color-mix(in oklab, var(--surface) 88%, var(--accent) 12%)),
        color-mix(in oklab, var(--surface) 90%, transparent 10%);
    }

    .eyebrow {
      margin: 0;
      color: var(--brand);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.78rem;
    }

    h1 {
      margin: 0.35rem 0 0;
      font-size: clamp(1.7rem, 2.8vw, 2.4rem);
    }

    header p {
      margin: 0.45rem 0 0;
      color: var(--muted);
      max-width: 65ch;
      line-height: 1.6;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .card {
    border: 1px solid var(--border);
    border-radius: 1rem;
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    padding: 1rem;
    display: grid;
    gap: 0.7rem;

    h2 {
      margin: 0;
      font-size: 1.3rem;
    }

    p {
      margin: 0;
      color: var(--muted);
      line-height: 1.55;
    }

    a {
      justify-self: start;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      text-decoration: none;
      font-weight: 800;
      color: #fff;
      background: linear-gradient(120deg, var(--brand), var(--brand-strong));
      border: 1px solid transparent;
      border-radius: 0.7rem;
      padding: 0.62rem 0.9rem;

      .icon {
        width: 1.8rem;
        height: 1.8rem;
        flex: 0 0 auto;
        fill: currentColor;
        overflow: visible;
        color: currentColor;
      }

      &:hover {
        filter: brightness(1.08);
      }
    }
  }

  @media (max-width: 760px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }
</style>
