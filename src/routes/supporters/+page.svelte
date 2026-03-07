<script lang="ts">
  import { onMount } from "svelte";

  const logos = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Colorado_Avalanche_logo.svg/1200px-Colorado_Avalanche_logo.svg.png",
    "https://www.coloradobrewerylist.com/wp-content/uploads/2014/06/launch-pad.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/ff/SONIC_New_Logo_2020.svg",
    "https://img1.wsimg.com/isteam/ip/6834fc73-1a14-41b7-b4fd-266e793aeee2/golden%20flame%20logo%20w-namenew.png",
    "https://nexgenroof.com/wp-content/uploads/2022/07/nexgenroofsolar-800.png",
    "https://download.logo.wine/logo/JetBlue/JetBlue-Logo.wine.png",
    "https://1000logos.net/wp-content/uploads/2020/03/Frontier-Airlines-Logo.png",
    "https://assets.website-files.com/639006682100a014c29a6da3/63900f84cc27e9125ffabb6e_AuroraFOPLogo_1.png",
    "https://images.squarespace-cdn.com/content/v1/5eb2f5532d212a0e2b3f2102/1593628793604-3JU90EQG6SBYV31N9VOD/anthonys-logo-tm.png",
    "https://www.majesticrealty.com/wp-content/uploads/2021/12/majestic-foundation.png",
    "https://logos-world.net/wp-content/uploads/2021/03/Charles-Schwab-Symbol.png",
    "https://frannet.com/wp-content/uploads/2022/05/D842854E-97DD-4846-A239AA937B8CE670.gif"
  ];

  const rowHeight = 84;
  const outerPad = 0;
  const cardWidth = 180;
  const baseSpacing = cardWidth - 26;
  const speed = 48;

  let flowEl = $state<HTMLElement | null>(null);
  let flowWidth = $state(0);
  let tickSeconds = $state(0);

  const laneWidth = $derived.by(() => Math.max(flowWidth - outerPad * 2, 260));
  const flowHeight = outerPad * 2 + rowHeight;
  const spacing = $derived.by(() => Math.max(baseSpacing, Math.ceil((laneWidth + cardWidth + baseSpacing) / logos.length)));

  const logoStyle = (index: number) => {
    const loopDistance = logos.length * spacing;

    const d = (((tickSeconds * speed + index * spacing) % loopDistance) + loopDistance) % loopDistance;
    const y = outerPad + rowHeight / 2;
    const x = -cardWidth / 2 + d + outerPad;

    return `left:${x}px;top:${y}px;`;
  };

  onMount(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new ResizeObserver((entries) => {
      flowWidth = entries[0]?.contentRect.width ?? 0;
    });

    if (flowEl) observer.observe(flowEl);

    if (reducedMotion) {
      return () => observer.disconnect();
    }

    let frame = 0;
    const start = performance.now();
    const loop = (now: number) => {
      tickSeconds = (now - start) / 1000;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  });

  const tiers = [
    {
      name: "$10,000+",
      entries: [
        "jetBlue",
        "Lane and Carla Maeurer of Englewood, CO",
        "Mr. Harry Glidden, Satellite Beach, FL (Formerly of Denver, CO)",
        "Geoffrey and Nancy Goble of McLeod, MT",
        "Carrie Slinkard of Front Line LAW LLC",
        "Gary and Staci of Alpine Carstar"
      ]
    },
    {
      name: "$5,000-$9,999",
      entries: ["Wes Crespi - Coffee Cabin, Parker, CO"]
    },
    {
      name: "$2,500-$4,999",
      entries: [
        "In loving memory of Mrs. Angie Dziurgot",
        "Scott Johnson of Johnson's Automotive Repair of Aurora Kellory & Co",
        "McCoy Family",
        "Puscian Family",
        "Jeffrey Family"
      ]
    },
    {
      name: "$1,000-$2,499",
      entries: [
        "Centennial Gun Club",
        "The Godwin Family Aurora, CO",
        "Bruno, Colin & Lowe P.C.",
        "Sara Metz of Code-4 Counseling, LLC",
        "Manheim Auto Auction",
        "5280 Laser Creations"
      ]
    },
    {
      name: "Up to $999",
      entries: [
        "Aurora Citizen Police Academy Alumni Association",
        "Mrs. Joan Barchetti",
        "Nikki Baker in memory of Mr. Hugh E. Baker",
        "Bowers Tactical",
        "Brotherhood for the Fallen (NYC)",
        "Brotherhood for the Fallen (Chicago)",
        "Jeremy Bryant",
        "Amy Chavez",
        "Ms. Sandra Fisher",
        "HOME DEPOT",
        "Mile High Harley-Davidson",
        "Skate City Colorado Inc."
      ]
    }
  ];

  const totalSupporters = tiers.reduce((count, tier) => count + tier.entries.length, 0);
</script>

<section class="supporters-stage">
  <section class="headline">
    <div class="logos" aria-hidden="true">
      <div class="logo-flow" bind:this={flowEl} style={`height:${flowHeight}px`}>
        {#each logos as logo, index}
          <article style={logoStyle(index)}>
            <img src={logo} alt="" loading="lazy" />
          </article>
        {/each}
      </div>
    </div>

    <h1>Supporters</h1>
    <p>Businesses and community members who make our mission possible.</p>
  </section>

  <section class="tiers" aria-label="Supporter contribution levels">
    <header class="tiers-header">
      <h2>Supporter Honor Roll</h2>
      <p>{totalSupporters} recognized supporters across all contribution levels.</p>
    </header>

    <div class="tier-grid">
      {#each tiers as tier, index}
        <article class="tier-card" class:prestige={index < 2}>
          <div class="tier-top">
            <p class="tier-label">Contribution Tier</p>
            <h3>{tier.name}</h3>
            <span>{tier.entries.length} supporters</span>
          </div>

          <div class="tier-body">
            <ul class="tier-list">
              {#each tier.entries as entry}
                <li>{entry}</li>
              {/each}
            </ul>
          </div>
        </article>
      {/each}
    </div>
  </section>
</section>

<style lang="scss">
  .supporters-stage {
    position: relative;
    isolation: isolate;
    display: grid;
    gap: 1.2rem;
    padding-top: 0.8rem;
  }

  .headline {
    position: relative;
    z-index: 2;
    overflow: visible;
    border-radius: 1rem;
    min-height: 120px;
    padding: 1.1rem;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    background:
      linear-gradient(145deg, color-mix(in oklab, var(--surface) 86%, var(--brand) 14%), color-mix(in oklab, var(--surface) 88%, var(--accent) 12%)),
      color-mix(in oklab, var(--surface) 90%, transparent 10%);

    h1 {
      margin: 0;
      font-size: clamp(1.8rem, 2.8vw, 2.4rem);
    }

    p {
      margin: 0.4rem 0 0;
      color: var(--muted);
    }
  }

  .logos {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100vw;
    transform: translate(-50%, -50%);
    z-index: 1;
    pointer-events: none;
    opacity: 0.22;
  }

  .logo-flow {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .logo-flow article {
    position: absolute;
    transform: translate(-50%, -50%);
    width: clamp(150px, 18vw, 180px);
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.35rem;
    overflow: hidden;
  }

  .logo-flow img {
    width: auto;
    height: 100%;
    max-width: none;
    max-height: none;
    min-height: 100%;
    object-position: center;
    display: block;
  }

  .tiers {
    position: relative;
    z-index: 2;
    display: grid;
    gap: 0.9rem;
  }

  .tiers-header {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    justify-content: space-between;
    gap: 0.5rem 1rem;

    h2 {
      margin: 0;
      font-size: clamp(1.2rem, 2vw, 1.6rem);
      color: var(--brand);
      letter-spacing: 0.01em;
    }

    p {
      margin: 0;
      color: var(--muted);
      font-size: 0.94rem;
    }
  }

  .tier-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.85rem;
  }

  .tier-card {
    border-radius: 1rem;
    background: color-mix(in oklab, var(--surface) 94%, transparent 6%);
    border: 1px solid var(--border);
    overflow: hidden;
    box-shadow: var(--shadow);
    backdrop-filter: blur(1px);
    display: grid;
    grid-template-rows: auto 1fr;
    transition:
      transform 180ms ease,
      box-shadow 180ms ease,
      border-color 180ms ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 32px rgba(9, 25, 53, 0.16);
      border-color: color-mix(in oklab, var(--brand) 40%, var(--border) 60%);
    }
  }

  .tier-card.prestige {
    border-color: color-mix(in oklab, var(--accent) 40%, var(--border) 60%);
  }

  .tier-top {
    padding: 0.8rem 0.9rem 0.75rem;
    border-bottom: 1px solid color-mix(in oklab, var(--border) 85%, transparent 15%);
    background: linear-gradient(145deg, color-mix(in oklab, var(--surface) 84%, var(--brand) 16%), color-mix(in oklab, var(--surface) 90%, var(--accent) 10%)), var(--surface);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--brand), var(--accent));
      opacity: 0.95;
    }

    .tier-label {
      margin: 0;
      font-size: 0.7rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: color-mix(in oklab, var(--brand) 75%, var(--accent) 25%);
    }

    h3 {
      margin: 0.2rem 0 0.32rem;
      font-size: 1.1rem;
      color: var(--brand);
      line-height: 1.3;
    }

    span {
      flex-shrink: 0;
      border-radius: 999px;
      background: color-mix(in oklab, var(--brand) 14%, transparent 86%);
      border: 1px solid color-mix(in oklab, var(--brand) 30%, var(--border) 70%);
      color: var(--brand);
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.01em;
      padding: 0.23rem 0.52rem;
    }
  }

  .tier-body {
    padding: 0.84rem 0.9rem 0.95rem;
  }

  .tier-list {
    margin: 0;
    padding-left: 0;
    color: var(--muted);
    display: grid;
    gap: 0.42rem;
    line-height: 1.45;
    list-style: none;

    li {
      position: relative;
      padding-left: 1rem;
      font-size: 0.93rem;
    }

    li::before {
      content: "";
      position: absolute;
      left: 0.1rem;
      top: 0.53rem;
      width: 0.38rem;
      height: 0.38rem;
      border-radius: 999px;
      background: color-mix(in oklab, var(--brand) 72%, var(--accent) 28%);
    }
  }

  @media (max-width: 680px) {
    .tier-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
