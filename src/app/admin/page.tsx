import React from "react";

import AdminBlogs from "./components/AdminBlogs";
import AdminFooter from "./components/AdminFooter";
import { Separator } from "@/components/ui/separator";

async function AdminPage() {
  return (
    <main>
      <AdminBlogs />

      <Separator className="my-8" />

      <AdminFooter />
    </main>
  );
}

export default AdminPage;
