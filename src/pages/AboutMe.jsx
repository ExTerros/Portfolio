import React from "react";
import { NavLink } from "react-router-dom";
import { RustOriginal, GoOriginalWordmark, SymfonyOriginal, Html5OriginalWordmark,
  Css3OriginalWordmark, JavascriptOriginal, TypescriptOriginal, DiscordjsOriginal, NodejsOriginalWordmark,
  PhpOriginal, MysqlOriginalWordmark, PostgresqlOriginalWordmark, ReactOriginalWordmark, SqliteOriginalWordmark,
  VitejsOriginal, VscodeOriginalWordmark, PhpstormOriginal, IntellijOriginal  } from 'devicons-react';

const AboutMe = () => {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen relative">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
                Nicolas Duval
                <br className="hidden lg:inline-block" />
                <span>Développeur full stack en formation chez Zone 01 Rouen</span>
              </h1>
              <p className="mb-8 leading-relaxed">
              Après six années en tant que technicien d'usinage, 
              j'effectue une transition professionnelle pour devenir 
              développeur Full Stack chez <NavLink to="https://zone01normandie.org/intra/rouen/profile" className="text-sky-600 underline">Zone01</NavLink>, 
              à Rouen, depuis mai 2023. À l'âge de 26 ans, cette décision 
              représentait bien plus qu'un simple changement de carrière. 
              C'était l'opportunité de dévellopeur cette passions 
              de manière approfondie.
              <br />
              <br />
              Je suis familiarisé avec un large panel de technologies,
               allant des langages de base comme HTML/CSS et JavaScript, 
               aux frameworks comme Symfony et des bases de données telles que 
               MySQL et PostgreSQL. De plus, je suis en constante évolution, 
               apprenant actuellement des technologies comme ReactJS, NodeJS, TypeScript, Go et Rust 
               pour enrichir mes compétences et rester à la pointe de l'innovation technologique.
              <br />
              <br />
              Un projet sur lequel je travaille actuellement est la V2 
              de <NavLink to="https://okashibot.le-grimoire.fr" className="text-sky-600 underline">OkaShibot</NavLink>, 
              un projet combinant une API en Rust, un bot Discord en JavaScript,
              une base de données en PostgreSQL, et un site en ReactJS. 
              </p>
              <div className="mx-auto">
                <div className="flex justify-center">
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <Html5OriginalWordmark size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <Css3OriginalWordmark size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <JavascriptOriginal size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <GoOriginalWordmark size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <RustOriginal size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <PhpOriginal size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <SymfonyOriginal size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <TypescriptOriginal size="50"/>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <ReactOriginalWordmark size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <VitejsOriginal size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <DiscordjsOriginal size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <NodejsOriginalWordmark size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <MysqlOriginalWordmark size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <PostgresqlOriginalWordmark size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <SqliteOriginalWordmark size="50"/>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <VscodeOriginalWordmark size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <PhpstormOriginal  size="50"/>
                  </div>
                  <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <IntellijOriginal  size="50"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded-lg"
                alt="hero"
                src="https://media.licdn.com/dms/image/D4E03AQEi575PR165RA/profile-displayphoto-shrink_800_800/0/1685024183966?e=1718236800&v=beta&t=H5PVehMgnr8PcepXwGzmYU3GLuIP1PPq7lvseXR7kKY"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
