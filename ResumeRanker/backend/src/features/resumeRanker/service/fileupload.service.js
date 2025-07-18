import fs from "fs";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";

export async function extractFileContent(file) {
  const filePath = file.path;
  const fileName = file.originalname;

  if (file.mimetype === "application/pdf") {
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(dataBuffer);
    return { fileName, resumeText: pdfData.text };
  } else if (
    file.mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const result = await mammoth.extractRawText({ path: filePath });
    return { fileName, resumeText: result.value };
  } else {
    return { fileName, resumeText: "Unsupported file type" };
  }
}
