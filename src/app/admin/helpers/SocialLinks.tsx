// import React from "react";
// import { z } from "zod";

// import {
//   DialogHeader,
//   DialogFooter,
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogDescription,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import ImageUploader from "@/components/custom-ui/image-upload";
// import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";

// const formSchema = z.object({
//   title: z.string().nonempty("Please enter Title of the Blog").max(25, "Title must be at most 25 characters long"),
//   shortDescription: z
//     .string()
//     .nonempty("Please add short description to the blog")
//     .max(500, "Short description must be at most 500 characters long"),
//   slug: z.string().nonempty("Slug is required"),
//   keywords: z.array(z.string()).min(1, "At least one keyword is required"),
//   image: z.string().nonempty("Featured image is required"),

// });

// function SocialLinks() {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Social links</Button>
//       </DialogTrigger>

//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Edit Social link</DialogTitle>
//           <DialogDescription>
//             Make changes to your Social media links here. Click save when you're done.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">

//         <FormField
//                 control={form.control}
//                 name="image"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Featured Image</FormLabel>
//                     <FormControl>
//                       <ImageUploader onChange={handleImageUpload} />
//                     </FormControl>
//                     <FormDescription className="text-[10px]">
//                       Image that represents the{" "}
//                       <code className="bg-slate-100 px-1 rounded-sm">
//                         <b>Blog</b>
//                       </code>
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input readOnly id="name" value="Pedro Duarte" className="col-span-3" />
//           </div>

//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input readOnly id="username" value="@peduarte" className="col-span-3" />
//           </div>
//         </div>
//         <DialogFooter>
//           <Button type="submit">Save changes</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default SocialLinks;
