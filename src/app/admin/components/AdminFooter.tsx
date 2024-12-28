import React from "react";
import Link from "next/link";
import { PlusSquare } from "lucide-react";

import { getLinksData } from "../actions/getData";
import { DeleteLink, EditLink } from "../helpers/helpers";
import SocialLinks from "../helpers/SocialLinks";

async function AdminFooter() {
  const links = await getLinksData();

  return (
    <section id="footer-links">
      <div className="flex justify-between">
        <h2 className="text-2xl mb-4 font-bold text-center font-secondary text-primary">{`Footer Links - ${links.length}`}</h2>

        <div className="flex gap-2">
          <SocialLinks />

          <Link
            href="admin/footer-links/add"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 bg-secondary text-neutral-50 hover:bg-secondary/90 dark:bg-neutral-50 dark:text-primary dark:hover:bg-neutral-50/90 h-10 px-4 py-2"
          >
            New
            <PlusSquare />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-12">
        {links.map((link) => (
          <div
            key={link.id}
            className="p-4 flex flex-col gap-4 border border-[#d9d9d9] rounded-lg md:max-w-sm relative"
          >
            <div className="min-h-64 h-64 max-h-64 relative rounded-lg overflow-hidden">
              {/* <Image src={blog.featuredImage} alt={blog.title} fill /> */}
            </div>

            <h2 className="font-secondary text-2xl font-bold text-primary">{link.name}</h2>

            <p className="truncate text-sm font-primary font-medium">{link.shortDescription}</p>

            <div className="ml-auto flex gap-2">
              <EditLink slug={link.path} />

              <DeleteLink id={link.id} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminFooter;
