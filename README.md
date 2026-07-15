#  IdeaVault

IdeaVault is a full-stack idea sharing platform where users can submit, manage, and interact with innovative ideas. It provides a secure authentication system and a user-friendly interface for exploring creative solutions.

##  Live Website

https://ideavault-beta.vercel.app

> Replace the above URL with your deployed client-side URL.

---

##  Features

-  Secure authentication using Better Auth (Email/Password & Google Login).
-  Users can create, update, and soft delete their own ideas.
-  Search and filter ideas by title, category, and date.
-  Users can comment on ideas and view their interaction history.
-  Light/Dark theme toggle with theme persistence using Local Storage.
-  Fully responsive design for desktop, tablet, and mobile devices.
-  Toast notifications for CRUD operations and user interactions.
-  Beautiful UI built with Next.js, Tailwind CSS, DaisyUI, and HeroUI.

---

##  Technologies Used

### Frontend
- Next.js 16
- React
- Tailwind CSS
- DaisyUI
- HeroUI
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Better Auth
- JWT Authentication

---

##  Installation

Clone the repository:

```bash
git clone https://github.com/your-username/ideavault-client.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

##  Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_API_URL=http://localhost:9000
MONGO_URI=your_mongodb_uri
GOOGLE_CLIENTID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
```

---

##  Author

**Sumaia Binta Asad**