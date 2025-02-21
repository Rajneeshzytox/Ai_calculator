
import { GoogleGenerativeAI } from "@google/generative-ai";


  // Converts a File object to a GoogleGenerativeAI.Part object.
  async function fileToGenerativePart(file) {
  const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
  });
  return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
  }

async function run() {
  const API_KEY = localStorage.getItem('GOOGLE_API_KEY')
  if(!API_KEY){

    alert("set api key first")
    return
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const Userprompt = document.querySelector('#user-input').value;
  const outputDiv = document.querySelector('#output');
  const animate = document.querySelector('#animate-pulse');
  const fileInputEl = document.querySelector("#input-file");
  const converter = new showdown.Converter();


  // prompt for ai 
  const prompt = `Imagine You are a ai calculator who solves only maths problems, ai which takes math problem as text or image and then write solutions in step by step in structured way. 
  Now solve this math problem or doubt prompt ${Userprompt},  (in html format)
  important note for response:
  1. response should in html format.
  2. use h1, h2, h3, h4, h5, h6 tags for headings and sub headings.
  3. use links in document last as sources across web.
  4. use img tag if possible, use img from non copywrite source, there should not any 403 forbidden error. if img is not possible, add link to img
  5. use br tag to new line and exta spaces after each headings or sub headings,
  6. use hr tag to seperate headings
  7. use pre, code, strong, subscript, supscript, b, i, u etc tags whenever possible.
  8. No Preamtions or Conclusion, Only Explanation
  `;
    animate.style.display = "block";
  const imageParts = await Promise.all(
      [...fileInputEl.files].map(fileToGenerativePart)
  );

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();

  animate.style.display = "none";
  // adding on div || showing on screen
  outputDiv.style.display = "block";
  // outputDiv.innerHTML = converter.makeHtml(text);
  outputDiv.innerHTML = text;
  }

  const Btn = document.querySelector('#run');
  Btn.addEventListener("click", run);