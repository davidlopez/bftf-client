<script lang="ts">
  type Section = {
    title: string;
    body: string;
  };

  const sections: Section[] = [
    {
      title: "Our mission",
      body: "Is to honorably attend the services of Fallen Officers across the country who made the ultimate sacrifice in the performance of duty. Our goal is to support the families, departments, and communities these officers served."
    },
    {
      title: "Origin of the Brotherhood",
      body: "The first chapter was formed by the Chicago Police Department in 2010, followed by NYPD in June 2015. Colorado organized in July 2015 through Aurora PD members, and additional chapters followed nationwide in the years after."
    },
    {
      title: "About BFTF Colorado",
      body: "Brotherhood for the Fallen Colorado was the third chapter in the nation. Members include Aurora PD, Thornton PD, and the Douglas County Sheriff's Office, with participation open to all Colorado law enforcement agencies."
    },
    {
      title: "You can help us",
      body: "We are a certified 501(c)(3) non-profit in Colorado, funded through dues, donations, fundraising events, and partnerships that reduce operating costs."
    }
  ];

  let openIndex = $state(0);
</script>

<div class="accordion" role="list">
  {#each sections as section, index}
    <section class="item" role="listitem">
      <button type="button" class="trigger" class:open={openIndex === index} aria-expanded={openIndex === index} onclick={() => (openIndex = openIndex === index ? -1 : index)}>
        <span>{section.title}</span>
        <span class="chevron" class:open={openIndex === index} aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none">
            <path d="M4 7 L10 13 L16 7" />
          </svg>
        </span>
      </button>

      {#if openIndex === index}
        <div class="content">{section.body}</div>
      {/if}
    </section>
  {/each}
</div>

<style lang="scss">
  .accordion {
    border: 1px solid var(--border);
    border-radius: 1rem;
    overflow: hidden;
    background: var(--surface);
    box-shadow: var(--shadow);
  }

  .item + .item {
    border-top: 1px solid var(--border);
  }

  .trigger {
    width: 100%;
    border: 0;
    background: linear-gradient(120deg, rgba(25, 55, 109, 0.08), rgba(247, 184, 1, 0.08));
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    padding: 1rem 1.2rem;
    font-size: 1.04rem;
    font-weight: 750;
    text-align: left;
    color: var(--text);
    cursor: pointer;

    .chevron {
      width: 1rem;
      height: 1rem;
      display: grid;
      place-items: center;
      transition: transform 150ms ease;

      svg {
        width: 100%;
        height: 100%;
      }

      path {
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    }

    .chevron.open {
      transform: rotate(180deg);
    }
  }

  .content {
    padding: 1rem 1.2rem 1.2rem;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--muted);
    background: var(--surface);
    animation: reveal 180ms ease;
  }

  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
