🚀 Financial Platform Landing Page
A high-performance, responsive landing page built for a dual-audience financial platform (Borrowers & Investors). This project features a modern UI, smooth horizontal scrolling for partner logos, and a fully responsive contact interface.

🛠 Tech Stack
Framework: Angular 17+ (for the dynamic version)
Styling: SCSS (Sass) with a focus on Flexbox and CSS Grid
Architecture: Component-based UI
Static Version: Pure HTML5/CSS3 (Optimized for fast loading)

✨ Key Features
Dual-Persona Layout: Distinct sections for Borrowers and Investors with aligned call-to-action blocks.
Dynamic Logo Carousel: A "Platform trusted by 50+ lenders" section with a custom, hidden-scrollbar horizontal scroll.
Responsive Forms: A contact section optimized for mobile, including "zoom-prevention" font scaling.
Modern Aesthetics: Floating animations, glassmorphism effects on media cards, and professional drop shadows.
Pixel Perfect Alignment: Strict vertical alignment for multi-column content to ensure visual balance across all screen sizes.

📂 Project Structure
This repository contains two versions of the project:
/angular-app: The full Angular project with TypeScript components and modular SCSS.
/static-version: The lightweight, production-ready HTML/CSS clone for static hosting (GitHub Pages, Vercel, etc.).

🚀 Getting Started
To run the Angular version:
Clone the repo:

Bash
git clone https://github.com/raj81040/moneytor-clone.git
Navigate to the directory:

Bash
cd angular-app
Install dependencies:

Bash
npm install
Launch the dev server:

Bash
ng serve
Open http://localhost:4200/ in your browser.

To run the Static version:
Simply open /static-version/index.html in any modern web browser or use the "Live Server" extension in VS Code.

📱 Mobile Optimization
The site has been rigorously tested for mobile responsiveness:
Breakpoints: Optimized for 1024px, 768px, and 480px.
Mobile Form Fixes: Implemented box-sizing: border-box and 16px font sizes to prevent automatic iOS browser zooming.
Touch Navigation: The lender logo section supports native touch-swipe gestures.
