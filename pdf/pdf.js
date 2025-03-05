import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const filePath = "C:/Users/HP/pdf/res.pdf";

const loader = new PDFLoader(filePath ,{ splitPages: false });

loader.load().then(docs => {

  docs.forEach((doc, index) => {
    console.log(`Page ${index + 1}:`);
    console.log(doc.pageContent);
  });
}).catch(error => {
  console.error("Error loading PDF:", error);
});
