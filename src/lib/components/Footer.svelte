<script lang="ts">
  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/BrotherhoodColorado/" },
    { label: "X", href: "https://twitter.com/BFTFAURORA" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/brotherhoodaurora" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UC5Rx_RPnURGRIm5HIvnPXwQ?view_as=subscriber" },
    { label: "Instagram", href: "https://www.instagram.com/bftfcolorado" }
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
          <a href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
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

    a {
      text-decoration: none;
      color: var(--muted);
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 0.35rem 0.65rem;
      font-size: 0.86rem;
      background: var(--surface);
      transition:
        color 150ms ease,
        border-color 150ms ease,
        transform 150ms ease;

      &:hover {
        color: var(--brand);
        border-color: var(--brand);
        transform: translateY(-1px);
      }
    }
  }

  @media (max-width: 760px) {
    .inner {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
