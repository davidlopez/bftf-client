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
    { name: "Matt Longshore", title: "Social Media Secretary", origin: "Aurora", image: MattLongshore },
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

<section class="headline">
  <h1>Board of Directors</h1>
  <p>Leadership team serving Brotherhood for the Fallen Colorado.</p>
</section>

<section class="grid">
  {#each members as member}
    <article>
      <img src={member.image} alt={member.name} loading="lazy" />
      <div>
        <h2>{member.name}</h2>
        <p>{member.title}</p>
        <span>{member.origin}</span>
      </div>
    </article>
  {/each}
</section>

<section class="open-role">
  <h2>Available Position</h2>
  <p>Membership Secretary</p>
</section>

<style lang="scss">
  .headline {
    h1 {
      margin: 0;
      font-size: clamp(1.8rem, 2.8vw, 2.4rem);
    }

    p {
      margin: 0.4rem 0 0;
      color: var(--muted);
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;

    article {
      border-radius: 1rem;
      border: 1px solid var(--border);
      background: var(--surface);
      overflow: hidden;
      display: grid;
      grid-template-columns: 116px 1fr;
      box-shadow: var(--shadow);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      min-height: 150px;
    }

    div {
      padding: 0.85rem 0.9rem;
      display: grid;
      gap: 0.25rem;
      align-content: start;
    }

    h2 {
      margin: 0;
      font-size: 1.05rem;
      line-height: 1.3;
    }

    p {
      margin: 0;
      color: var(--muted);
      font-weight: 600;
    }

    span {
      margin-top: 0.25rem;
      width: fit-content;
      border-radius: 999px;
      background: var(--surface-muted);
      border: 1px solid var(--border);
      padding: 0.25rem 0.65rem;
      font-size: 0.84rem;
      color: var(--brand-strong);
      font-weight: 700;
    }
  }

  .open-role {
    margin-top: 0.4rem;
    border-radius: 1rem;
    border: 1px dashed var(--border);
    background: rgba(255, 255, 255, 0.55);
    padding: 1rem;

    h2 {
      margin: 0;
      font-size: 1.05rem;
    }

    p {
      margin: 0.4rem 0 0;
      color: var(--muted);
      font-weight: 600;
    }
  }

  @media (max-width: 580px) {
    .grid article {
      grid-template-columns: 1fr;

      img {
        max-height: 220px;
      }
    }
  }
</style>
