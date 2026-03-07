<script lang="ts">
  import banner from "../assets/bftfbanner.png";
  import Accordion from "$lib/components/Accordion.svelte";

  const deploymentModules = import.meta.glob("../assets/deployments/*.PNG", {
    eager: true,
    import: "default"
  }) as Record<string, string>;

  const deployments = Object.entries(deploymentModules)
    .sort((a, b) => {
      const aNum = Number(a[0].match(/\/(\d+)\.png$/i)?.[1] ?? 0);
      const bNum = Number(b[0].match(/\/(\d+)\.png$/i)?.[1] ?? 0);
      return aNum - bNum;
    })
    .map(([, src], index) => ({
      src,
      label: `Deployment ${String(index + 1).padStart(2, "0")}`
    }));

  const commitments = [
    {
      title: "Honor At Every Service",
      text: "Officers travel to stand watch, provide respectful presence, and ensure fallen officers receive the full honor they earned."
    },
    {
      title: "Family-First Support",
      text: "We help loved ones navigate the most difficult days with practical support, communication help, and ongoing care after ceremonies end."
    },
    {
      title: "Officer-Led Mission",
      text: "This organization is run by active and retired law enforcement volunteers committed to service, dignity, and accountability."
    }
  ];
</script>

<section class="hero">
  <div class="hero-media">
    <img src={banner} alt="Brotherhood for the Fallen banner" />
  </div>

  <div class="hero-content">
    <p class="eyebrow">Brotherhood For The Fallen Colorado</p>
    <h1>Standing With Families When The Line Of Duty Takes One Of Our Own.</h1>
    <p>
      Brotherhood for the Fallen Colorado is a nonprofit led by officers and deputies from Aurora, Englewood, Thornton, and the Douglas County Sheriff’s Office. We provide
      emotional and financial support to the families of officers killed in the line of duty in Colorado and nationwide.
    </p>
    <div class="hero-actions">
      <a href="https://www.paypal.com/paypalme/brotherhoodaurora" target="_blank" rel="noreferrer">Donate</a>
      <a class="ghost" href="/supporters">Our Supporters</a>
    </div>
  </div>
</section>

<section class="thin-line" aria-hidden="true">
  <span></span>
</section>

<section class="commitments">
  {#each commitments as card}
    <article>
      <h2>{card.title}</h2>
      <p>{card.text}</p>
    </article>
  {/each}
</section>

<section class="about">
  <div>
    <h2>Built By Officers. Powered By Community.</h2>
    <p>From Aurora to agencies across Colorado, our officers coordinate travel, ceremony attendance, and family support efforts so no department faces these moments alone.</p>
    <p>Every contribution supports direct mission operations: officer attendance, memorial support, and family-centered outreach.</p>
  </div>

  <aside>
    <h3>Service Priorities</h3>
    <ul>
      <li>Rapid response presence at services</li>
      <li>Respectful coordination with agencies</li>
      <li>Long-term support for surviving loved ones</li>
      <li>Partnership with trusted community sponsors</li>
    </ul>
  </aside>
</section>

<section class="deployments" aria-label="Past deployments gallery">
  <header>
    <p class="eyebrow">Past Deployments</p>
    <h2>Moments of Service Across Our Mission</h2>
    <p>A look at deployment efforts where members of BFTF Colorado stood with agencies, families, and communities.</p>
  </header>

  <div class="deployment-grid">
    {#each deployments as deployment, index}
      <figure class:featured={index === 0}>
        <img src={deployment.src} alt={deployment.label} loading="lazy" />
      </figure>
    {/each}
  </div>
</section>

<Accordion />

<style lang="scss">
  .hero {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: var(--shadow);
    background: linear-gradient(140deg, var(--hero-top), var(--hero-bottom));
  }

  .hero-media {
    min-height: 320px;
    padding: 1rem;
    background:
      radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.44), rgba(241, 246, 255, 0.34) 55%, rgba(219, 230, 248, 0.24)),
      linear-gradient(130deg, rgba(255, 255, 255, 0.28), rgba(229, 238, 252, 0.2));
    display: grid;
    place-items: center;
    overflow: hidden;

    img {
      width: 100%;
      max-height: 290px;
      object-fit: contain;
      filter: saturate(0.98) contrast(1.03);
    }
  }

  .hero-content {
    color: #f5f8ff;
    padding: 2rem;
    display: grid;
    gap: 0.9rem;
    align-content: center;

    .eyebrow {
      margin: 0;
      color: var(--accent);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.78rem;
    }

    h1 {
      margin: 0;
      line-height: 1.1;
      font-size: clamp(1.65rem, 3.2vw, 2.7rem);
      max-width: 20ch;
    }

    p {
      margin: 0;
      line-height: 1.65;
      color: rgba(240, 247, 255, 0.92);
      max-width: 58ch;
    }
  }

  .hero-actions {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;

    a {
      text-decoration: none;
      border-radius: 0.7rem;
      padding: 0.68rem 1rem;
      font-weight: 750;
      background: linear-gradient(120deg, var(--accent), #f7dca0);
      color: #102349;
      transition: transform 160ms ease;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .ghost {
      background: transparent;
      color: #dfe9ff;
      border: 1px solid rgba(215, 227, 255, 0.45);
    }
  }

  .thin-line {
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--surface);
    padding: 0.35rem;
    box-shadow: var(--shadow-soft);

    span {
      display: block;
      height: 0.5rem;
      border-radius: 999px;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(255, 255, 255, 0.15) 47%,
        #2a76e3 47%,
        #2a76e3 53%,
        rgba(255, 255, 255, 0.15) 53%,
        rgba(255, 255, 255, 0.15) 100%
      );
    }
  }

  .commitments {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.95rem;

    article {
      border: 1px solid var(--border);
      border-radius: 0.95rem;
      background: var(--surface);
      box-shadow: var(--shadow-soft);
      padding: 1rem;
    }

    h2 {
      margin: 0;
      font-size: 1.02rem;
      color: var(--brand);
    }

    p {
      margin: 0.6rem 0 0;
      color: var(--muted);
      line-height: 1.55;
      font-size: 0.96rem;
    }
  }

  .about {
    display: grid;
    grid-template-columns: 1.2fr 0.9fr;
    gap: 1rem;

    div,
    aside {
      border: 1px solid var(--border);
      border-radius: 0.95rem;
      background: var(--surface);
      box-shadow: var(--shadow-soft);
      padding: 1.2rem;
    }

    h2,
    h3 {
      margin: 0;
    }

    p {
      margin: 0.6rem 0 0;
      line-height: 1.62;
      color: var(--muted);
    }

    ul {
      margin: 0.8rem 0 0;
      padding-left: 1rem;
      display: grid;
      gap: 0.45rem;
      color: var(--muted);
      line-height: 1.5;
    }
  }

  .deployments {
    border: 1px solid var(--border);
    border-radius: 1rem;
    background: color-mix(in oklab, var(--surface) 94%, transparent 6%);
    box-shadow: var(--shadow-soft);
    padding: 1rem;
    display: grid;
    gap: 0.9rem;

    header {
      display: grid;
      gap: 0.3rem;
    }

    .eyebrow {
      margin: 0;
      color: color-mix(in oklab, var(--brand) 75%, var(--accent) 25%);
      text-transform: uppercase;
      font-size: 0.73rem;
      font-weight: 800;
      letter-spacing: 0.08em;
    }

    h2 {
      margin: 0;
      font-size: clamp(1.2rem, 2.2vw, 1.6rem);
      line-height: 1.22;
    }

    p {
      margin: 0;
      color: var(--muted);
      line-height: 1.55;
      max-width: 70ch;
    }
  }

  .deployment-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.7rem;

    figure {
      margin: 0;
      border-radius: 0.8rem;
      overflow: hidden;
      display: block;
      height: 170px;
    }

    figure.featured {
      grid-column: span 2;
      grid-row: span 2;
      height: 355px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  @media (max-width: 950px) {
    .hero {
      grid-template-columns: 1fr;

      .hero-media {
        min-height: 280px;

        img {
          max-height: 250px;
        }
      }
    }

    .about {
      grid-template-columns: 1fr;
    }

    .deployment-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      figure {
        height: 170px;
      }

      figure.featured {
        grid-column: span 2;
        grid-row: span 1;
        height: 250px;
      }
    }
  }
</style>
