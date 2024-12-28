import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

function Page() {
  return (
    <nav>
      <Link
        href="/admin"
        className="fixed top-4 left-4 md:left-4  lg:left-12 shadow-lg py-2 px-3 rounded-sm bg-gray-200 flex items-center gap-2"
      >
        <ArrowLeftCircle />

        <p className="text-sm">Home</p>
      </Link>
    </nav>
  );
}

export default Page;
