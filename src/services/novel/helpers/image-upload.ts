import { createImageUpload } from "novel/plugins";
import { toast } from "sonner";

const onUpload = (file: File | Blob) => {
  const form = new FormData();
  form.set("file", file);

  const promise = fetch("/admin/api/upload", {
    method: "POST",
    headers: {
      // "content-type": file?.type || "application/octet-stream",
      // "x-vercel-filename": file?.name || "image.png",
    },
    body: form,
  });

  return new Promise((resolve) => {
    toast.promise(
      promise.then(async (res) => {
        // Successfully uploaded image
        if (res.status === 200) {
          // eslint-disable-next-line
          const { url } = (await res.json()) as any;
          // preload the image
          const image = new Image();
          image.src = url;
          console.log(url);
          image.onload = () => {
            console.log(url, "ONLOAD");
            resolve(url);
          };
          // No blob store configured
        } else if (res.status === 401) {
          resolve(file);
          throw new Error("`BLOB_READ_WRITE_TOKEN` environment variable not found, reading image locally instead.");
          // Unknown error
        } else {
          throw new Error(`Error uploading image. Please try again.`);
        }
      }),
      {
        loading: "Uploading image...",
        success: "Image uploaded successfully.",
        error: (e) => {
          console.log(e.message);
          return e.message;
        },
      }
    );
  });
};

export const uploadFn = createImageUpload({
  onUpload,
  validateFn: (file) => {
    if (!file.type.includes("image/")) {
      toast.error("File type not supported.");
      return false;
    } else if (file.size / 1024 / 1024 > 4) {
      toast.error("File size too big (max 4MB).");
      return false;
    }
    return true;
  },
});
