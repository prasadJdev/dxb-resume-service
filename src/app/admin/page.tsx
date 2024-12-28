import React from "react";

import AdminBlogs from "./components/AdminBlogs";
import AdminFooter from "./components/AdminFooter";

async function AdminPage() {
  return (
    <main>
      <AdminBlogs />
      <AdminFooter />
    </main>
  );
}

export default AdminPage;
