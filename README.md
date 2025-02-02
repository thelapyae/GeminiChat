Markdown

# ✨ GeminiChat ✨

A super cool conversational AI app powered by Google's Gemini API! 🚀

## 👋 Overview

GeminiChat is your friendly web app for chatting with Google's awesome Gemini AI.  Think of it as a simple and easy way to explore what Gemini can do. 🤖

This project is all about making it **easy** and **fast** for anyone (especially developers!) to start playing around with Gemini.  Let's get chatting! 💬

## 💻 Local Development (Run it on your computer!)

Want to try GeminiChat on your own machine? Follow these easy steps:

1. **Clone the project:** ⬇️

   Open your terminal and type this command to download the code:

   ```bash
   git clone [https://github.com/thelapyae/GeminiChat.git](https://github.com/thelapyae/GeminiChat.git)  🔗
   cd GeminiChat
   ```

2. **Create the `.env.local` file:** 🤫

   Make a new file called `.env.local` in the main folder of the project (where you just used `cd GeminiChat`).  This file is like a secret place to store your API key.

3. **Get your API key and add it!** 🔑

   You need a Google Gemini API key to make GeminiChat work.  Don't worry, it's easy to get! Just follow these steps:

   - Go to this link: [https://aistudio.google.com/app/u/1/apikey](https://aistudio.google.com/app/u/1/apikey) 🌐
   - Create an API key there. 📝
   - **Copy** that API key. ✂️
   - Now, open your `.env.local` file and add this line, but replace `YOUR_ACTUAL_API_KEY` with the key you just copied:

     ```bash
     GEMINI_API_KEY=YOUR_ACTUAL_API_KEY
     ```

     **Important:**  Keep your `.env.local` file secret! 🤫  **Don't share it or commit it to GitHub!**  The `.gitignore` file is already set up to protect it. 👍

4. **Install the magic stuff (dependencies):** 📦

   In your terminal, type one of these commands (depending on if you use `npm` or `yarn`):

   ```bash
   npm install  # For npm users
   ```
   OR
   ```bash
   yarn install # For yarn users
   ```

5. **Start the engine! (Run the development server):**  🚀

   Type this command in your terminal:

   ```bash
   npm run dev  # For npm users
   ```
   OR
   ```bash
   yarn dev  # For yarn users
   ```

   This will fire up the development server! 🎉  Open your web browser and go to the address it shows you (usually `http://localhost:3000`).  GeminiChat should be running! 🥳



---

Enjoy chatting with Gemini! 😊
[[Much WIth Love @thelapyae](https://thelapyae.com)]
