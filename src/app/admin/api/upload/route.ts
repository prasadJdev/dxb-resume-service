import { NextRequest, NextResponse } from "next/server";

import { uploadToCloudinary } from "@/config/cloudinary/uploadToCloudinary";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  const fileBuffer = await file.arrayBuffer();

  const mimeType = file.type;
  const encoding = "base64";
  const base64Data = Buffer.from(fileBuffer).toString("base64");

  // this will be used to upload the file
  const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

  const res = await uploadToCloudinary(fileUri, file.name);

  if (res.success && res.result) {
    return NextResponse.json({
      message: "Successfully Uploaded to cloudinary",
      url: res.result.secure_url,
    });
  } else return NextResponse.json({ message: "Failed to upload to cloudinary" });
}
