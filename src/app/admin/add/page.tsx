"use client";

import React from "react";
import { JSONContent } from "novel";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import NovelEditor from "@/services/novel/NovelEditor";

const defaultValue = {}; // Should be form the Database for Edit blog

function AddBlogPage() {
  const [value, setValue] = React.useState<JSONContent>(defaultValue);

  return (
    <div className="container max-w-5xl mx-auto">
      <div className="flex flex-col gap-2">
        <Label htmlFor="blog-title" className="font-semibold font-secondary">
          Title
        </Label>

        <Input id="blog-title" placeholder="Enter title of the blog" type="text" className="font-secondary" required />
      </div>

      <div className="flex flex-col gap-2 my-8">
        <Label htmlFor="short-description" className="font-semibold font-secondary">
          Short Description (Max. length: 500)
        </Label>

        <Textarea
          id="short-description"
          placeholder="Enter short description of the blog"
          className="font-primary"
          required
          maxLength={500}
        />
      </div>

      <div className="flex flex-col gap-2 my-8">
        <Label htmlFor="blog-content" className="font-semibold font-secondary">
          Body
        </Label>

        <div id="blog-content" className="border p-6 rounded-xl min-h-80">
          <NovelEditor initialValue={value} onChange={setValue} />
        </div>
      </div>
    </div>
  );
}

export default AddBlogPage;
