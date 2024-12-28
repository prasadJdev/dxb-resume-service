import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogsData } from "../admin/actions/getData";

const blogs = [
  {
    id: "hjald",
    title: "Title",
    description: "Some random description",
    body: <p>Some random body</p>,
  },
];

async function BlogPage() {
  const blogs = await getBlogsData();

  return (
    <main id="blogs" className="h-svh">
      <div className="container max-w-7xl mx-auto p-6">
        <h1 className="text-4xl mb-[3rem] font-bold text-center font-secondary text-primary">Blogs</h1>

        <div className="grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-12">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="flex flex-col p-0 m-0 min-w-0"
              style={{ transitionProperty: "background, border, box-shadow", transitionDuration: ".25s" }}
            >
              <div
                className="shadow-[0_0_10px_0_rgba(0,0,0,.15)] hover:shadow-[0_0_30px_0_rgba(0,0,0,.15)] flex flex-col overflow-hidden relative bg-white w-full min-h-full border-[0_solid_#69727d] border-0 rounded-2xl py-[1px]"
                style={{ transition: "all 0.25s" }}
              >
                <Link href={`blogs/${blog.slug}`} className="mb-5 relative block w-full h-[236px] border-b">
                  <div
                    className="relative overflow-hidden blog-thumbnail-image"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Image src={blog.featuredImage} alt={blog.title} fill />
                  </div>
                </Link>

                <div className="p-[0_30px] mb-0 w-full flex-grow-[1] block">
                  <h3 className="font-secondary font-semibold mb-6 text-xl text-secondary">
                    <Link href={`blogs/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default BlogPage;
