/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ for Next.js app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // ✅ optional if using /pages too
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ for reusable components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
