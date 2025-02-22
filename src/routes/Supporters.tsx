import React from "react";

const Supporters: React.FC = () => (
  <div className="grid gap-6">
    <section>
      <div className="sponsor-logos flex flex-wrap justify-center gap-6">
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Colorado_Avalanche_logo.svg/1200px-Colorado_Avalanche_logo.svg.png"
          alt="avalanche"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt1"
          src="data:image/png;base64,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"
        />
        {/*<img className="size-3" alt="alt2" src="https://www.woolleysclassNameicsuites.com/images/logo-dark.svg" />*/}
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt3"
          src="https://www.coloradobrewerylist.com/wp-content/uploads/2014/06/launch-pad.png"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt4"
          src="https://upload.wikimedia.org/wikipedia/commons/f/ff/SONIC_New_Logo_2020.svg"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt5"
          src="https://img1.wsimg.com/isteam/ip/6834fc73-1a14-41b7-b4fd-266e793aeee2/golden%20flame%20logo%20w-namenew.png"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt6"
          src="https://nexgenroof.com/wp-content/uploads/2022/07/nexgenroofsolar-800.png"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt7"
          src="https://download.logo.wine/logo/JetBlue/JetBlue-Logo.wine.png"
        />
        {/*<img*/}
        {/*  className="float-left bg-foreground/10 rounded-lg size-16 md:size-32 object-contain"*/}
        {/*  alt="alt8"*/}
        {/*  src="https://scontent-den4-1.xx.fbcdn.net/v/t31.18172-8/191883_178819665497267_4039522_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_ohc=ToCh20L205oAX9DVnPa&_nc_ht=scontent-den4-1.xx&oh=00_AfCm7tudwqkqCPagYX5-9nMnr2YGdpKaKA86mQ7ou9YMsg&oe=651AFCBA"*/}
        {/*/>*/}
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt9"
          src="data:image/png;base64,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"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt10"
          src="https://1000logos.net/wp-content/uploads/2020/03/Frontier-Airlines-Logo.png"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt11"
          src="https://assets.website-files.com/639006682100a014c29a6da3/63900f84cc27e9125ffabb6e_AuroraFOPLogo_1.png"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt12"
          src="https://images.squarespace-cdn.com/content/v1/5eb2f5532d212a0e2b3f2102/1593628793604-3JU90EQG6SBYV31N9VOD/anthonys-logo-tm.png"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt13"
          src="https://www.majesticrealty.com/wp-content/uploads/2021/12/majestic-foundation.png"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt14"
          src="https://logos-world.net/wp-content/uploads/2021/03/Charles-Schwab-Symbol.png"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt15"
          src="https://images.squarespace-cdn.com/content/v1/61017d7cd4473c23a2644c9b/99c40663-0175-47fb-87c9-c2000a54d3c3/h%26c-animal-health.png?format=1500w"
        />
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt16"
          src="https://static.fmgsuite.com/media/TransparentLogo/variantSize/d6bc271c-e117-4e90-8424-ac61c3112a4f.jpg"
        />
        {/*<img*/}
        {/*  className="float-left bg-foreground/10 rounded-lg size-16 md:size-32 object-contain"*/}
        {/*  alt="alt17"*/}
        {/*  src="https://scontent-den4-1.xx.fbcdn.net/v/t1.6435-9/38786257_10156558036119204_6236939752478605312_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sI3V-hQ6wMYAX9UfVws&_nc_ht=scontent-den4-1.xx&oh=00_AfBE_8-U7QJt4a25-xQZ8Mzo5PINGH-nhoVfX5kfxD_5aQ&oe=651AFBCA"*/}
        {/*/>*/}
        <img
          className="float-left size-16 rounded-lg bg-foreground/10 object-contain md:size-32"
          alt="alt18"
          src="https://frannet.com/wp-content/uploads/2022/05/D842854E-97DD-4846-A239AA937B8CE670.gif"
        />
      </div>
    </section>

    <section className="supporters">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-foreground/10 p-3">
          <h3 className="w-fit bg-gradient-to-l from-primary-dark from-25% via-red-500 via-60% to-yellow-300 to-90% bg-clip-text text-lg font-semibold text-transparent">
            $10,000+
          </h3>
          <ul className="grid gap-1">
            <li>jetBlue</li>
            <li>Lane and Carla Maeurer of Englewood, COs</li>
            <li>Mr. Harry Glidden, Satellite Beach, FL (Formerly of Denver, CO)</li>
            <li>Geoffrey and Nancy Goble of McLeod, MT</li>
            <li>Carrie Slinkard of Front Line LAW LLC</li>
            <li>Gary and Staci of Alpine Carstar</li>
          </ul>
        </div>

        <div className="rounded-lg bg-foreground/10 p-3">
          <h3 className="w-fit bg-gradient-to-l from-primary-dark from-25% via-red-500 via-60% to-yellow-300 to-90% bg-clip-text text-lg font-semibold text-transparent">
            $5000-$9999
          </h3>
          <ul className="grid gap-1">
            <li>Wes Crespi - COFFEE CABIN, PARKER, CO</li>
          </ul>
        </div>

        <div className="rounded-lg bg-foreground/10 p-3">
          <h3 className="w-fit bg-gradient-to-l from-primary-dark from-25% via-red-500 via-60% to-yellow-300 to-90% bg-clip-text text-lg font-semibold text-transparent">
            $2500-$4999
          </h3>
          <ul className="grid gap-1">
            <li>In loving memory of Mrs. Angie Dziurgot</li>
            <li>Scott Johnson of Johnson's Automotive Repair of Aurora Kellory & CO</li>
            <li>McCoy Family</li>
            <li>Puscian Family</li>
            <li>Jeffrey Family</li>
          </ul>
        </div>

        <div className="rounded-lg bg-foreground/10 p-3">
          <h3 className="w-fit bg-gradient-to-l from-primary-dark from-25% via-red-500 via-60% to-yellow-300 to-90% bg-clip-text text-lg font-semibold text-transparent">
            $1,000-$2,499
          </h3>
          <ul className="grid gap-1">
            <li>Centennial Gun CLUB</li>
            <li>The Godwin Family Aurora, CO</li>
            <li>Bruno, Colin & Lowe P.C.</li>
            <li>Sara Metz of Code-4 Counseling, LLC</li>
            <li>MANHEIM AUTO AUCTION</li>
            <li>5280 Laser Creations</li>
          </ul>
        </div>

        <div className="rounded-lg rounded-b-none bg-foreground/10 p-3 pb-1 md:rounded-b-lg md:pb-3">
          <h3 className="w-fit bg-gradient-to-l from-primary-dark from-25% via-red-500 via-60% to-yellow-300 to-90% bg-clip-text text-lg font-semibold text-transparent">
            Up to $999
          </h3>
          <ul className="grid gap-1">
            <li>Aurora Citizen Police Academy Alumni Association</li>
            <li>Mrs. Joan Barchetti</li>
            <li>Nikki Baker in memory of Mr. Hugh E. Baker</li>
            <li>Bowers Tactical</li>
            <li>Brotherhood for the Fallen (NYC)</li>
            <li>Brotherhood for the Fallen (Chicago)</li>
            <li>Jeremy Bryant</li>
            <li>Amy Chavez</li>
            <li>Ms. Sandra Fisher</li>
            <li>Scott Flanagan</li>
            <li>Mrs. Cornelia Forrest</li>
            <li>John and Michelle Grizzle</li>
            <li>HOME DEPOT</li>
            <li>Joshua Hefty</li>
            <li>Kimberly Jankowski</li>
            <li>Mr. & Mrs. M. Jeffrey</li>
            <li>Ms. Carolyn Keas</li>
            <li>Kellory and Co.</li>
            <li>L & B's LLC Concrete Landscaping</li>
            <li>Mrs. Rebecca Lee</li>
            <li>Russell and Judy Lutkin</li>
          </ul>
        </div>

        <div className="mt-[-1.5rem] rounded-lg rounded-t-none bg-foreground/10 p-3 pt-0 md:mt-0 md:rounded-t-lg md:pt-3 ">
          <h3 className="hidden md:block">&nbsp;</h3>
          <ul className="grid gap-1">
            <li>Diane Lynch ( Naples, FL)</li>
            <li>Ms. Marilynn Miciek</li>
            <li>Mrs. Bianca Meyers</li>
            <li>Mile High Harley-Davidson</li>
            <li>Mrs. Rachel Nunez</li>
            <li>Bruce Oliphant</li>
            <li>Ms. Claudia Ortega</li>
            <li>Police tees</li>
            <li>Mr. Girard Pugsley</li>
            <li>Mr. Michael Quirk</li>
            <li>Ms. Clarice Ridenour</li>
            <li>Alicia Romero</li>
            <li>Mrs. Mary Agnes Schaffer (Estero, FL)</li>
            <li>Skate City Colorado Inc.</li>
            <li>Ms. Lori Smith</li>
            <li>Tim and Marsha Todd</li>
            <li>Ms. Timra Walsh</li>
            <li>Mrs. Gloria Vance</li>
            <li>Mr. Rich Wall</li>
            <li>Danny Veith</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default Supporters;
