import React, { Suspense } from "react";
import { Await, useLoaderData, NavLink } from "react-router-dom";
import Spinner from "../components/Loading/Spinner";
import { GithubOriginal, GitbookLine, AngularjsOriginal, JavascriptOriginal, GoOriginalWordmark, VitejsOriginal,
  PythonOriginal, JavaOriginal, SymfonyOriginal } from 'devicons-react';

const MyProject = () => {
  const projects = useLoaderData();

  const getLanguageIcon = (language) => {
    console.log("🚀 ~ getLanguageIcon ~ language:", language)
    switch (language) {
      case 'Symfony, Javascript':
        return (
        <>
          <JavascriptOriginal size="25" className="mr-2" />
          <SymfonyOriginal size="25" className="mr-2" />
        </>)
        ;
      case 'JavaScript':
        return <JavascriptOriginal size="20" className="mr-2" />;
      case 'Angular':
        return <AngularjsOriginal size="30" className="mr-2" />;
      case 'Go':
        return <GoOriginalWordmark size="35" className="mr-2" />;
      case 'ViteJs':
        return <VitejsOriginal size="30" className="mr-2" />;
      case 'Python':
        return <PythonOriginal size="30" className="mr-2" />;
      case 'Java':
        return <JavaOriginal size="30" className="mr-2" />;
      default:
        return null;
    }
  }

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
                Certains des projets ne sont pas publiques car ils peuvent faire partie du cursus de Zone01.
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
                              <h3 className="text-2xl mb-4 text-gray-950 dark:text-white font-semibold underline underline-offset-3 decoration-2 decoration-gray-400 flex items-center">
                                {getLanguageIcon(project.languages)}{project.title}
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
                                  {project.haveSite && (
                                    <a
                                      href={project.site}
                                      target="_blank"
                                      className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                                    >
                                      <span>Voir le site</span>
                                      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25">
                                        <defs>
                                          <image  width="25" height="25" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAAXNSR0IB2cksfwAAAHhQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ZTISyAAAACh0Uk5TAAVGl8vm+UVW4v9VKMAv4N8b5OMcDtLRYATbSJjQ6PjIQAECJRK3uIH81Z8AAADESURBVHicfZJLD4JADIQ7CgQjGB+gEkVP/v8fpN48mIBiDEaDSEUW5eHCXHYzXzbttgMSQiZmViLOHXHoyC9E3LkVxMCLSupymJMBnlSRFocZGeFBNfXgp8RGWAdEZuKB5td/kFY4wsFFRoaMRSADn+rLs5yM4Z7kZIKVLycW1p6c2I1v1MY605bemv4za5yB3jI3chRJD6axT/dj8b0OdA6ynRpKVAWqvctzsMGhDNxkS7/s9JMiOyyW/zWgxSJvqYTzBpE/OVKp1nnHAAAAAElFTkSuQmCC"/>
                                          <image  width="25" height="25" id="img2" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IB2cksfwAAB2dJREFUeJwtVkuMHFcVPVX16te/6fZ0ez6dnvFgJ06MiXEyyLFNEhs7wSERAksgoWzYkSUS7FhnBQgJEGKBxIIIoUSEBGxMlKCAFyFYjmSsRDaexI4/PTM9457+1f/Vh/OatFSqrvdevXvvOeeeV+LcW+eRZRmEELzn0LQcYRTz2UKe5aZbck9mef5N/l81DKOt6/qs70V9LuxKmVzWdO31TGb/CMNIch62YyEMYyRJAl0DDGFAZFmKUqmElAGgmZwo4NgFhGF9Oy/wE93QOwwE3w9QcMAwBBzXXiiKfCFJolXTsF4ydO2urpd+EATha0XB9xkoTSXCIJwmL5guHwJougGZSNi2/bBlOb8ugKeNQoMGfXo16g2Mx5NpMFYzzdTQBeJYIktlh/FftSzrn1mavsT5667rcjxHwL0FA3NjQsMB3TIPCV17U6Zy2S1VoX4KwjRNuVkMVsVKNEwmHmzLRl5wPIqgYDJNA65bejqV8sJoNHmO8F1XVbnVCivhn5QVMKs2MznPfds6S0xlDFUHNINDOiZjDwUUXP+vTAVV+Gvl0pTTJE4g5VgltEfXtbd1YRxNpLyXRaGqpFDY1RzHuSClbAtmqDOzNFUccdtcctOCEBFOKQlpwgryaZW+R54KbbouDMNpMMVZnucPsLrzQtOe9Dx/LAyTRDrO2SgMv5AzoLoi4lwql6kMExahBCSiyOOdNWgabApBQZaTCEH1UAjkKIZlmeRNjefqepQvfJdF/ELIJBUp5I8UrpIQ5HkE26QMA5+qqyIpIkUshaFDsnQuIzQh8TcxGnkoV8rcq0CtVuGzPxVFyookeTR048emaW0IquN0nqX7bMf+bEJhnqFIM0ThBA6z1vksw0D1zTR7dSUyIzwSw+GQzxlM9pXv+axIKmSQsNeyAha3+5UYj0ffcF1HUYy2FWKpmmBszeNW34Bh6kpe5CUjFBZfijHxfcXQVAwKfwWTknOkhSgT2dOHF9AsF/jkbo731kIGN2qCYnlCcmFEMsvFXcTOPJaWG7DDNVwdlBCnbC7XIhcGlEiUoqIoJUL5Z5wIWIR3sRTj6KEHkFqzSCYDCO8jtkUJQZYPFVzzqk9KNmHSKuiODQzXNjBvhJiVE3S1FjNNGSSlIGKKQUy5U9hrrCQmTy3h4fEViiGxcOfOBucyjLwMyikyJicsU9QbjQZE6mFrUuDO3dtY7CwicyTyT69gbn4/YnsGbrmCTGd3ZzF211IkqZK3D9fxUd65gV7/IHZGPfRHAVI2aEW30Gm34CX5jHBcZ0irmDNkH979bdy8dgvSH0HsaaJ7ZwuPt+rYu68Bq16GZjFQoqoggwXFEExw84M1XFrrol1bRlHzcOW9S2jubmDf/g4DUjiOuymogE2mN2dSQT6lqUjs9+6jM5Niae8yFvfvh7PwCAr6VBoMp6pR/WPYLqy5OawcryIQZazvDPHhlTX01kdYWJpjawWo1+YQS7kpwsB73zTNQzrJUwpq1V3UKJPHjq1ipjkLq1KnXFOE/gCMgzignVRsFIbFvkkgqnM48OVTaPfuobt+EZOqixnOmxad2/MwCcIrIgrjNyib75lahGH3Ng7smcWRk0dh00WVVBNZcDGbUDkXe0c3TVoOIStmINwqZK4h1yQst4IzZ47g6n9u4OaNDwnpQYw0pTz7D6Jcct6htX9sm8G+r379BHa1VxCNh1PbD+hN0EcYZxYxXkFCYkf+BBo9zGw0qRoLt9ZuQfN6yGMKgFZ0/OQxHCbx129SBJ7+calcu0iZi7SIxi8f+NLB3zqWAb/fo227NEOfdw3nL17DJDeosibMaIjGTIm8hMj9HrobWzh34RLhtfHkowvgCQOTcq/Qah774kPAf7dfvp/puQiI24nP73rFEtr3B72NQ4bhsBIPO1sbePPdq/jzBwxKNZnhNl589gDomDw5GYgVXbt8He+8v4adwQgb9zo4uboXjdYCHI8mWi5dPdAp/e6jTR7tD7cstGcr6aC7/oJTb/2LRD9QoXqq7WU8ZXYQWP9Gq2bh+TOHYc9WEI59eBNyw84+9fyzyCq78frfr+LoqRdgF/eR6yYSTXSjncHXKrWZrFGpQujcsCjvRj4K7pmVmWfs1ucuWCVrD4af4NiRvTh68gkkwy1IvYR1L8Evf//HqRgyiuCRB3fjO2dP48hTx2msPAjyeaTO7O1+b+OZ4b1h12R/UPcQ6iBSVm63lhBbreslt74q0/iVNK+f8clFuM4PE3rW/N6H8PPf/Ax/OfdXLC/OwSe5f3t7gMZCG1858iAKYSMNB29pEC+Wm0v9JJ4gnmxDUx8TFXqWSZyFw55oLEFmaX97q//cziD4ltCtn0Zjv7O41MEkTNFsL6HZ3IWAfDBHiqCKcVhgnOh3e7e7P4wzvNpsDjFTb6LcXMFgtI37wwjs1ZDnOQ2w4vL8CPh14WG7P8TG5vA1bzx4Y262cmJre+esNoxXLU1v0yZmP93c7vNE7C7vWbnsmPqf+gPv3Yzn9ICHVkp4dMOkOZag2zVUdwn8D0tY6HolemOYAAAAAElFTkSuQmCC"/>
                                        </defs>
                                        <style>
                                        </style>
                                        <use id="Background" href="#img1" x="0" y="0"/>
                                        <use id="okashibot" href="#img2" x="0" y="0"/>
                                      </svg>
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
