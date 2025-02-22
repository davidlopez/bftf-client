import React from "react";
import TroyRaines from "@assets/board/troy_raines.jpeg";
import ErnieLucero from "@assets/board/ernie_lucereo.jpg";
import JoeDuran from "@assets/board/joseph_duran.jpeg";
import MattLongshore from "@assets/board/matthew_longshore.jpeg";
import TelaynaLuttrell from "@assets/board/telayna_luttrell.jpeg";
import BrettRauzi from "@assets/board/brett_rauzi.jpeg";
import BrianMartinez from "@assets/board/brian_martinez.png";
import TommyBarella from "@assets/board/tommy_barrella.png";

const BoardOfDirectors: React.FC = () => {
  const bods = [
    {
      name: "Detective Troy Raines",
      title: "President",
      origin: "Aurora PD",
      image: TroyRaines,
    },
    {
      name: "Lieutenant Ernie Lucero",
      title: "Vice President",
      origin: "Thornton PD",
      image: ErnieLucero,
    },
    {
      name: "Officer Joe Duran",
      title: "Treasurer Secretary",
      origin: "Aurora PD",
      image: JoeDuran,
    },
    {
      name: "Matt Longshore",
      title: "Social Media Secretary",
      origin: "Aurora",
      image: MattLongshore,
    },
    {
      name: "Deputy Telayna Luttrell",
      title: "Travel Secretary",
      origin: "Douglas County SO",
      image: TelaynaLuttrell,
    },
    {
      name: "Sergeant Brett Rauzi",
      title: "Fundraising Events / Planning Secretary",
      origin: "Aurora PD",
      image: BrettRauzi,
    },
    {
      name: "Detective Brian Martinez",
      title: "Merchandise/Marketing",
      origin: "Englewood PD",
      image: BrianMartinez,
    },
    {
      name: "Captain Tommy Barella",
      title: "Agency Representatives",
      origin: "Douglas County SO",
      image: TommyBarella,
    },
  ];

  const open = [{ name: "", title: "Membership Secretary", origin: "", image: "" }];

  return (
    <div className="grid gap-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {bods.map((bod) => (
          <div className="card card-side bg-secondary-focus flex max-h-64 min-h-64 grow items-center overflow-hidden rounded-lg bg-dm-foreground/60 shadow-xl">
            <img className="min-h-full w-1/3 object-cover" src={bod.image} alt="pbod" />
            <div className="ml-auto flex h-full flex-col gap-3 p-3 text-right md:p-6">
              <h2 className="text-xl font-bold">{bod.name}</h2>
              <p className="text-lg font-medium text-copy-lighter">{bod.title}</p>
              <div className="ml-auto mt-auto w-fit rounded-lg bg-secondary px-3 text-secondary-content">
                {bod.origin}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl font-extrabold underline">Available Positions</h1>
        {open.map((o) => (
          <div className="card card-side bg-secondary-focus rounded-lg bg-dm-foreground/60 p-10 shadow-xl">
            <h2 className="text-xl font-bold">{o.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;
