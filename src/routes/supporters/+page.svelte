<script lang="ts">
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
</script>

<section class="headline">
  <h1>Supporters</h1>
  <p>Businesses and community members who make our mission possible.</p>
</section>

<section class="logos" aria-label="Supporter logos">
  {#each logos as logo}
    <article>
      <img src={logo} alt="Supporter logo" loading="lazy" />
    </article>
  {/each}
</section>

<section class="tiers">
  {#each tiers as tier}
    <article>
      <h2>{tier.name}</h2>
      <ul>
        {#each tier.entries as entry}
          <li>{entry}</li>
        {/each}
      </ul>
    </article>
  {/each}
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

  .logos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.9rem;

    article {
      border-radius: 0.9rem;
      background: var(--surface);
      border: 1px solid var(--border);
      height: 102px;
      padding: 0.7rem;
      display: grid;
      place-items: center;
      box-shadow: var(--shadow);
    }

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .tiers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;

    article {
      border-radius: 0.9rem;
      background: var(--surface);
      border: 1px solid var(--border);
      padding: 1rem;
      box-shadow: var(--shadow);
    }

    h2 {
      margin: 0 0 0.55rem;
      font-size: 1.05rem;
      color: var(--brand);
    }

    ul {
      margin: 0;
      padding-left: 1rem;
      color: var(--muted);
      display: grid;
      gap: 0.3rem;
      line-height: 1.45;
    }
  }
</style>
