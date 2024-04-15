import React from "react";

const Experience = () => {
  const experience = [
    {
      company: "Zone01 Rouen Normandie",
      date: "Mai 2023 - Aujourd'hui",
      description: "Formation Développeur full stack",
      color: "group-[.is-active]:bg-blue-500"
    },
    {
      company: "Ressorts Masselin",
      date: "Juin 2021 - Fév 2021",
      description:
        "Opérateur machine sur centre d'usinage à commande numérique et conventionnelle. 3 axes, 4 axes et 5 axes.",
      color: "group-[.is-active]:bg-black-500"
    },
    {
      company: "Renault Cléon",
      date: "Sept.2019 - Déc 2020",
      description: "Conducteur de ligne sur moteur electrique.",
      color: "group-[.is-active]:bg-black-500"
    },
    {
      company: "Collins Aerospace",
      date: "Mars 2019 - Sept 2019",
      description:
        "Opérateur machine sur centre d'usinage à commande numérique 3 axes.",
        color: "group-[.is-active]:bg-black-500"
    },
    {
      company: "Sumpar",
      date: "Mai 2017 - Fév 2019",
      description:
        "Opérateur machine sur centre d'usinage à commande numérique 3 axes, 4 axes et 5 axes.",
        color: "group-[.is-active]:bg-black-500"
    },
    {
      company: "Renault Cléon",
      date: "Nov. 2016 - Mai 2017",
      description: "Conducteur de ligne arbre secondaire",
      color: "group-[.is-active]:bg-black-500"
    },
  ];

  return (
    <>
      <div className="w-full max-w-3xl mx-auto mt-24">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {experience.map((exp, index) =>
            index % 2 === 0 ? (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 ${exp.color} text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">{exp.company}</div>
                    <p className="font-caveat font-medium text-indigo-500">
                      {exp.date}
                    </p>
                  </div>
                  <div className="text-slate-500">{exp.description}</div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 ${exp.color} text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">{exp.company}</div>
                    <p className="font-caveat font-medium text-indigo-500">
                      {exp.date}
                    </p>
                  </div>
                  <div className="text-slate-500">{exp.description}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Experience;
