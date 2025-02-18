import React from "react";

const BoardOfDirectors: React.FC = () => {
  const bods = [
    {
      name: "Agent Jeff Prince",
      title: "President",
      origin: "Aurora PD",
      image: "http://www.brotherhoodcolorado.org/uploads/3/4/9/4/34944272/published/prince-bod.jpg?1653425565",
    },
    {
      name: "Sgt Machelle Williby",
      title: "Vice President - Member / Merchandise Coordinator",
      origin: "Aurora PD",
      image: "http://www.brotherhoodcolorado.org/uploads/3/4/9/4/34944272/williby-machelle_orig.jpg",
    },
    {
      name: "Agent Troy Raines",
      title: "Travel Secretary",
      origin: "Aurora PD",
      image: "http://www.brotherhoodcolorado.org/uploads/3/4/9/4/34944272/raines-troy_orig.jpg",
    },
    {
      name: "Agent Matt Longshore",
      title: "Asst. Travel Secretary / Membership",
      origin: "Aurora PD",
      image: "http://www.brotherhoodcolorado.org/uploads/3/4/9/4/34944272/longshore-orig_orig.jpg",
    },
    {
      name: "Sgt Eugene Van Dyk",
      title: "Treasurer",
      origin: "Aurora PD",
      image: "http://www.brotherhoodcolorado.org/uploads/3/4/9/4/34944272/van-dyk-eugene_orig.jpg",
    },
    {
      name: "Commander Ernie Lucero",
      title: "At Large Board Member / Honor Guard Liaison",
      origin: "Thornton PD",
      image: "http://www.brotherhoodcolorado.org/uploads/3/4/9/4/34944272/e-lucero_orig.jpg",
    },
    {
      name: "Lt. Tommy Barella",
      title: "At Large Board Member",
      origin: "Douglas County SD",
      image: "http://www.brotherhoodcolorado.org/uploads/3/4/9/4/34944272/tommy-barella_orig.jpg",
    },
    {
      name: "Deputy Telayna Luttrell",
      title: "Social Media Coordinator/Photographer",
      origin: "Douglas County SD",
      image: "http://www.brotherhoodcolorado.org/uploads/3/4/9/4/34944272/published/teylana.jpeg?1653425927",
    },
    {
      name: "Sgt Tim Jeffrey",
      title: "Founding Member and Past President",
      origin: "Aurora PD",
      image: "http://www.brotherhoodcolorado.org/uploads/3/4/9/4/34944272/published/jeffrey.jpg?1653425569",
    },
  ];

  return (
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
  );
};

export default BoardOfDirectors;
