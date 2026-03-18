<script lang="ts">
  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/BrotherhoodColorado/", brand: "facebook" },
    { label: "X", href: "https://twitter.com/BFTFAURORA", brand: "x" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/brotherhoodaurora", brand: "linkedin" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UC5Rx_RPnURGRIm5HIvnPXwQ?view_as=subscriber", brand: "youtube" },
    { label: "Instagram", href: "https://www.instagram.com/bftfcolorado", brand: "instagram" }
  ];
</script>

<footer>
  <div class="inner">
    <div>
      <h2>BFTF Colorado</h2>
      <p><strong>501(c)(3)</strong> Brotherhood for the Fallen Colorado, Inc.</p>
      <p>All rights reserved.</p>
    </div>

    <div class="socials">
      <h3>Social</h3>
      <div>
        {#each socialLinks as social}
          <a class={`brand-chip ${social.brand}`} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} title={social.label}>
            {#if social.brand === "facebook"}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.4 20v-6.7h2.2l.4-2.8h-2.6V8.7c0-.8.2-1.3 1.3-1.3h1.4V5h-2.1c-2.5 0-3.6 1.1-3.6 3.4v2.1H8.3v2.8h2.1V20h3z" fill="currentColor" />
              </svg>
            {:else if social.brand === "x"}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 4 5.5 7.4L4.4 20h2.5l4.8-6.6L16.6 20H20l-5.8-7.8L19.8 4h-2.5l-4.3 5.9L8.6 4H5z" fill="currentColor" />
              </svg>
            {:else if social.brand === "linkedin"}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6.1 8.2a1.6 1.6 0 1 1 0-3.1 1.6 1.6 0 0 1 0 3.1zM4.7 19.6h2.8V9.5H4.7v10.1zm4.4-10.1v10.1h2.8V14c0-1.5.5-2.6 2.1-2.6s1.9 1.3 1.9 2.7v5.5h2.8v-6c0-3.2-1.7-4.6-4-4.6-1.8 0-2.6 1-3 1.7v-1.2H9.1z"
                  fill="currentColor"
                />
              </svg>
            {:else if social.brand === "youtube"}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M20.5 8.4a2.8 2.8 0 0 0-2-2C16.8 6 12 6 12 6s-4.8 0-6.5.4a2.8 2.8 0 0 0-2 2C3 10.1 3 12 3 12s0 1.9.5 3.6a2.8 2.8 0 0 0 2 2c1.7.4 6.5.4 6.5.4s4.8 0 6.5-.4a2.8 2.8 0 0 0 2-2c.5-1.7.5-3.6.5-3.6s0-1.9-.5-3.6zM10.5 14.9V9.1l5 2.9-5 2.9z"
                  fill="currentColor"
                />
              </svg>
            {:else}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z" fill="currentColor" />
                <path
                  d="M17.4 3.8H6.6A2.8 2.8 0 0 0 3.8 6.6v10.8a2.8 2.8 0 0 0 2.8 2.8h10.8a2.8 2.8 0 0 0 2.8-2.8V6.6a2.8 2.8 0 0 0-2.8-2.8zm1.1 13.6a1.1 1.1 0 0 1-1.1 1.1H6.6a1.1 1.1 0 0 1-1.1-1.1V6.6c0-.6.5-1.1 1.1-1.1h10.8c.6 0 1.1.5 1.1 1.1v10.8z"
                  fill="currentColor"
                />
                <circle cx="17.8" cy="6.2" r="1.1" fill="currentColor" />
              </svg>
            {/if}
          </a>
        {/each}
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    margin-top: auto;
    border-top: 1px solid rgba(16, 35, 73, 0.08);
    background: var(--header-bg);
    backdrop-filter: blur(10px);
  }

  .inner {
    margin: 0 auto;
    width: min(1100px, 94vw);
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1.6rem 0;
  }

  h2 {
    margin: 0 0 0.2rem;
    font-size: 1.3rem;
    font-weight: 800;
    background: linear-gradient(112deg, #5f98ff, #f2828a 56%, #f4cd72);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.45);
    display: inline-block;
    width: fit-content;
  }

  :global(html[data-theme="dark"]) h2 {
    background: linear-gradient(112deg, var(--brand), var(--danger) 56%, var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-stroke: 0 transparent;
  }

  p {
    margin: 0.18rem 0;
    color: var(--muted);
    font-size: 0.93rem;
  }

  .socials {
    h3 {
      margin: 0 0 0.45rem;
      font-size: 0.95rem;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .brand-chip {
      text-decoration: none;
      color: #fff;
      border: 1px solid transparent;
      border-radius: 999px;
      width: 2rem;
      height: 2rem;
      display: grid;
      place-items: center;
      transition:
        color 150ms ease,
        border-color 150ms ease,
        filter 150ms ease,
        transform 150ms ease;

      svg {
        width: 1.05rem;
        height: 1.05rem;
      }

      &:hover {
        color: #fff;
        filter: brightness(1.08);
        transform: translateY(-1px);
      }
    }

    .facebook {
      background: #1877f2;
    }

    .x {
      background: #111;
    }

    .linkedin {
      background: #0a66c2;
    }

    .youtube {
      background: #ff0000;
    }

    .instagram {
      background: linear-gradient(135deg, #f58529 0%, #dd2a7b 45%, #8134af 75%, #515bd4 100%);
    }
  }

  @media (max-width: 760px) {
    .inner {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
