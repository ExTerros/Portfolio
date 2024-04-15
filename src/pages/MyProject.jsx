import React, { Suspense } from "react";
import { Await, useLoaderData, NavLink } from "react-router-dom";
import Spinner from "../components/Loading/Spinner";
import { GithubOriginal, GitbookLine } from 'devicons-react';

const MyProject = () => {
  const projects = useLoaderData();

  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-center min-h-screen relative">
        <div className="py-16">
          <div className="mx-auto px-6 max-w-6xl text-gray-500">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Mes Projets
              </h1>
              <p className="mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Certains des projets ne sont pas publics car ils peuvent faire partie du cursus de Zone01.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Suspense fallback={<Spinner />}>
                <Await resolve={projects}>
                  {(projects) => (
                    <>
                      {projects.map((project, i) => {
                        return <>
                        <div key={project.mdFile} className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                          <div className="relative">
                              <div className="pb-6 rounded-b-[--card-border-radius]">
                              <h3 className="text-2xl mb-4 text-gray-950 dark:text-white font-semibold underline underline-offset-3 decoration-2 decoration-gray-400">
                                {project.title}
                              </h3>
                                  <p className="text-gray-700 dark:text-gray-300">{project.shortDescription}</p>
                              </div>

                              <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                                    <NavLink
                                      to={"/my-projects/" + project.mdFile}
                                      className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                                    >
                                      <span>En savoir plus</span>
                                      <GitbookLine size="25" />
                                    </NavLink>
                                  {!project.isPrivate && (
                                    <a
                                      href={project.repoLink}
                                      target="_blank"
                                      className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                                    >
                                      <span>Source Code</span>
                                      <GithubOriginal size="25" />
                                    </a>
                                  )}
                              </div>
                          </div>
                        </div>
                            </>;
                      })}
                    </>
                  )}
                </Await>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProject;
