"use client";
import React from "react";
import { toast } from "sonner";
import { ImageUp } from "lucide-react";
import { useDropzone } from "react-dropzone";

import { Input } from "../ui/input";

function ImageUploader({
  onChange,
  image,
}: {
  image?: string | ArrayBuffer | null;
  onChange?: (image: FormData) => void;
}) {
  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>(image || "");

  const onDrop = (acceptedFiles: File[]) => {
    const reader = new FileReader();
    try {
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(acceptedFiles[0]);
      if (onChange) {
        const formData = new FormData();
        formData.append("file", acceptedFiles[0]);
        onChange(formData);
      }
    } catch (error) {
      setPreview(null);
    }
  };

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 1000000,
    accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
  });

  React.useEffect(() => {
    if (fileRejections.length !== 0) {
      toast.error("Image must be less than 1MB and of type png, jpg, or jpeg");
    }
  }, [fileRejections]);

  return (
    <div
      {...getRootProps()}
      className="mx-auto flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border p-8 shadow-sm shadow-foreground"
    >
      {preview && <img src={preview as string} alt="Uploaded image" className="max-h-[400px] rounded-lg" />}

      <ImageUp className={`stroke-[0.2] stroke-neutral-400 size-40 ${preview ? "hidden" : "block"}`} />

      <Input {...getInputProps()} type="file" />
      {isDragActive ? (
        <p className="font-semibold font-secondary">Drop the image!</p>
      ) : (
        <p className="font-semibold font-secondary">Featured Image</p>
      )}
    </div>
  );
}

export default ImageUploader;
