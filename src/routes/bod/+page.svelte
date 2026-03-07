<script lang="ts">
  import TroyRaines from "../../assets/board/troy_raines.jpeg";
  import ErnieLucero from "../../assets/board/ernie_lucereo.jpg";
  import JoeDuran from "../../assets/board/joseph_duran.jpeg";
  import MattLongshore from "../../assets/board/matthew_longshore.jpeg";
  import TelaynaLuttrell from "../../assets/board/telayna_luttrell.jpeg";
  import BrettRauzi from "../../assets/board/brett_rauzi.jpeg";
  import BrianMartinez from "../../assets/board/brian_martinez.png";
  import TommyBarella from "../../assets/board/tommy_barrella.png";

  const members = [
    { name: "Detective Troy Raines", title: "President", origin: "Aurora PD", image: TroyRaines },
    { name: "Lieutenant Ernie Lucero", title: "Vice President", origin: "Thornton PD", image: ErnieLucero },
    { name: "Officer Joe Duran", title: "Treasurer Secretary", origin: "Aurora PD", image: JoeDuran },
    { name: "Matt Longshore", title: "Social Media Secretary", origin: "Aurora PD", image: MattLongshore },
    { name: "Deputy Telayna Luttrell", title: "Travel Secretary", origin: "Douglas County SO", image: TelaynaLuttrell },
    {
      name: "Sergeant Brett Rauzi",
      title: "Fundraising Events / Planning Secretary",
      origin: "Aurora PD",
      image: BrettRauzi
    },
    { name: "Detective Brian Martinez", title: "Merchandise / Marketing", origin: "Englewood PD", image: BrianMartinez },
    { name: "Captain Tommy Barella", title: "Agency Representatives", origin: "Douglas County SO", image: TommyBarella }
  ];
</script>

<section class="hero" aria-label="Board of Directors introduction">
  <div class="hero-copy">
    <p class="eyebrow">Brotherhood For The Fallen Colorado</p>
    <h1>Board of Directors</h1>
    <p>These leaders represent agencies across Colorado and guide our mission with professionalism, accountability, and service to families of fallen officers.</p>
  </div>
</section>

<section class="honor-grid" aria-label="Board members">
  {#each members as member, index}
    <article class="card" class:executive={index < 2}>
      <div class="portrait-wrap">
        <img src={member.image} alt={member.name} loading="lazy" />
      </div>

      <div class="card-copy">
        <p class="role">{member.title}</p>
        <h2>{member.name}</h2>
        <p class="agency">{member.origin}</p>
      </div>
    </article>
  {/each}
</section>

<section class="open-role">
  <div class="open-left">
    <h2>Open Leadership Positions</h2>
    <p>Current opportunities to serve on the board:</p>
  </div>
  <div class="open-pills">
    <span class="position">Membership Secretary</span>
  </div>
  <div class="open-note">Contact the chapter if you are interested in serving.</div>
</section>

<style lang="scss">
  .hero {
    border-radius: 1rem;
    border: 1px solid var(--border);
    background: linear-gradient(145deg, color-mix(in oklab, var(--surface) 86%, var(--brand) 14%), color-mix(in oklab, var(--surface) 88%, var(--accent) 12%)), var(--surface);
    box-shadow: var(--shadow);
    padding: 1.1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: start;
  }

  .hero-copy {
    .eyebrow {
      margin: 0;
      color: var(--brand);
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h1 {
      margin: 0.2rem 0 0.38rem;
      font-size: clamp(1.7rem, 2.8vw, 2.45rem);
      line-height: 1.08;
    }

    p {
      margin: 0;
      color: var(--muted);
      line-height: 1.58;
      max-width: 62ch;
    }
  }

  .honor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 0.95rem;
  }

  .card {
    border-radius: 1rem;
    border: 1px solid var(--border);
    background: color-mix(in oklab, var(--surface) 94%, transparent 6%);
    overflow: hidden;
    box-shadow: var(--shadow);
    display: grid;
    grid-template-rows: 260px auto;
    transition:
      transform 180ms ease,
      box-shadow 180ms ease,
      border-color 180ms ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 32px rgba(9, 25, 53, 0.18);
      border-color: color-mix(in oklab, var(--brand) 40%, var(--border) 60%);
    }
  }

  .portrait-wrap {
    position: relative;
    overflow: hidden;
    background: color-mix(in oklab, var(--surface-muted) 78%, var(--surface) 22%);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(8, 20, 44, 0.56), rgba(8, 20, 44, 0.04) 45%);
      z-index: 1;
      pointer-events: none;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--brand), var(--accent));
      z-index: 2;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      padding: 0.4rem;
      transform: none;
    }
  }

  .card.executive .portrait-wrap::after {
    height: 6px;
    background: linear-gradient(90deg, var(--accent), color-mix(in oklab, var(--accent) 65%, white 35%));
  }

  .card-copy {
    display: grid;
    gap: 0.34rem;
    padding: 0.82rem 0.9rem 0.95rem;
  }

  .role {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: color-mix(in oklab, var(--brand) 74%, var(--accent) 26%);
  }

  h2 {
    margin: 0;
    font-size: 1.04rem;
    line-height: 1.3;
  }

  .agency {
    margin: 0.08rem 0 0;
    color: var(--muted);
    font-size: 0.9rem;
    font-weight: 600;
  }

  .open-role {
    margin-top: 0.1rem;
    border-radius: 1rem;
    border: 1px dashed color-mix(in oklab, var(--border) 70%, var(--brand) 30%);
    background: color-mix(in oklab, var(--surface) 90%, transparent 10%);
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.9rem;

    h2 {
      margin: 0;
      font-size: 1.02rem;
      color: var(--brand);
    }

    p {
      margin: 0.25rem 0 0;
      color: var(--muted);
      font-weight: 600;
      font-size: 0.93rem;
    }

    .open-pills {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.65rem;
      margin-top: 0.2rem;
    }

    .position {
      display: inline-block;
      border-radius: 999px;
      border: 1px solid color-mix(in oklab, var(--brand) 30%, var(--border) 70%);
      background: color-mix(in oklab, var(--brand) 13%, transparent 87%);
      color: var(--brand);
      font-size: 0.82rem;
      font-weight: 800;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      padding: 0.4rem 0.75rem;
    }

    .open-note {
      padding-top: 0.7rem;
      border-top: 1px solid color-mix(in oklab, var(--border) 82%, transparent 18%);
      color: var(--muted);
      font-size: 0.87rem;
    }
  }

  @media (max-width: 860px) {
    .open-role {
      gap: 0.85rem;
    }
  }
</style>
