import {
        generateUploadButton,
        generateUploadDropzone,
    } from "@uploadthing/react";
    
    // Ensure the path is correct or install the necessary types
    import type { OurFileRouter } from "../api/uploadthing/core"; // Adjusted path
    
    export const UploadButton = generateUploadButton<OurFileRouter>();
    export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
  