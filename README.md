# Fiora Beauty 🌸  
*A Korean Skincare Products Website built with Next.js 15 & NextAuth.js*

---

## 📖 Project Description
Fiora is a simple web application showcasing Korean skincare products.  
Users can explore products publicly, view details, and — after logging in with **NextAuth.js** — access a protected dashboard to add new products.  

The app demonstrates:
- Public and protected routes in **Next.js 15 App Router**  
- Authentication with **NextAuth.js (Google or Credentials)**  
- Product management with a **MongoDB database**  
- Modern UI for a beauty/feminine brand concept  

---

## 🚀 Core Features

1. **Landing Page (/)**  
   - Sections: Navbar, Hero, Product Highlights, Footer  
   - Navigation to login and products  
   - No authentication required  

2. **Login with NextAuth (/login)**  
   - Google login or credentials login  
   - Redirects to `/products` after login  

3. **Product List Page (/products)**  
   - Publicly accessible  
   - Fetches and shows a list of products from MongoDB (or mock file)  
   - Each product has: name, image, description, price, quantity, and details button  

4. **Product Details Page (/products/[id])**  
   - Publicly accessible  
   - Shows full details of a single product  

5. **Protected Page: Add Product (/dashboard/add-product)**  
   - Only accessible when logged in  
   - Product form: name, description, price, image URL, quantity/weight  
   - On submit → stores in MongoDB  
   - Redirect unauthenticated users to login  

---

## ✨ More Enhancements
- Loading spinner during form submission  
- Toast message on successful product add  
- Light/Dark theme toggle  

---

## 🛠️ Technologies Used
- [Next.js 15 (App Router)](https://nextjs.org/)  
- [NextAuth.js](https://next-auth.js.org/)  
- [MongoDB](https://www.mongodb.com/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [React Hot Toast](https://react-hot-toast.com/) (optional for alerts)  

---

## ⚙️ Setup & Installation

1. Clone repository:
   ```bash
   git clone <repo-link>
   cd fiora-app

---

Install dependencies:
npm install

---

Create .env.local file in the root directory:

NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

MONGODB_URI=your_mongodb_connection_string

---

Run the development server:
npm run dev

---

📦 Import Products into MongoDB
You can import the provided JSON dataset into MongoDB:

mongoimport --uri="your_mongodb_connection_string" \
  --collection=products \
  --db=fioraBeauty \
  --file=public/skincare.json \
  --jsonArray

---

🌐 Routes Summary
/ → Landing Page

/login → Login with NextAuth

/products → Public product list

/products/[id] → Product details

/dashboard/add-product → Protected page (requires login)

/api/products → GET all products / POST add product

/api/products/[id] → GET single product
