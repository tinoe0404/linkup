"use client";

import { UploadDropzone } from "../lib/uploadthing"; // adjusted the path to the correct location
import { useEffect } from "react";

interface ImageUploadProps {
  endpoint: "imageUploader";
  value?: string;
  onChange: (url: string) => void;
}

const ImageUpload = ({ endpoint, value, onChange }: ImageUploadProps) => {
  // If an image is already selected, show it
  useEffect(() => {
    if (value) {
      console.log("Current image URL:", value);
    }
  }, [value]);

  return (
    <div className="space-y-2">
      {!value ? (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            console.log("Upload complete response:", res);
            const uploadedUrl = res?.[0]?.url;
            if (uploadedUrl) {
              onChange(uploadedUrl);
            } else {
              console.error("UploadThing: No URL returned from upload result", res);
            }
          }}
          
          onUploadError={(error: Error) => {
            console.error("Upload error:", error);
            alert("Upload failed: " + error.message);
          }}
        />
      ) : (
        <div className="relative">
          <img
            src={value}
            alt="Uploaded image"
            className="w-full rounded-lg object-cover"
          />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
