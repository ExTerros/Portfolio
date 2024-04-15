import React, { Suspense } from "react";
import { Await, useLoaderData, useParams } from "react-router-dom";
import Spinner from "../components/Loading/Spinner";
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

const Project = () => {
  const project = useLoaderData();
  console.log("🚀 ~ Project ~ project:", project)


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen relative mt-20">
        <Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]} className="prose lg:prose-xl">
          {project}
        </Markdown>
      </div>
    </>
  );
};

export default Project;