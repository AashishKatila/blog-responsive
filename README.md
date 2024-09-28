# Blog Project

A responsive blog built with Next.js, Tailwind CSS, Shadcn, and MockAPI. Read other people blogs as well as post your own blogs. Taking time to write your blog then save it as draft and continue later. Filter the blogs by labels or sort them.

## Features

- Responsive design using Tailwind-CSS and Shadcn
- Dynamic data fetching from MockAPI
- Customizable blog posts with filters and sorting.
- Authentication and protected routes using next-auth.

## Technologies Used

- Next.js - React framework for developing the site.
- Tailwind CSS - Utility-first CSS framework for styling.
- Shadcn - A UI components library for further styling.
- MockAPI - For managing blog post data.
- next-auth - For authentication.
- React Hook Form - For form handling and validation.
- zod - For validation
- React-quill - For text editor with basic formatting
- React-toastify - For customized notifications

## Project Structure

```

src
├── app
│ ├── layout.tsx            // The main layout of the blog
│ ├── page.tsx              // Home page of blog
│ ├── login                 // Login Route
│ | └── page.tsx            // Login page
│ └──blogs                  //Lists all blogs
|       └──[slug]           //Dynamic route
|       └──page.tsx
├── components
│ ├── Navbar.tsx            // Navbar with authentication logic
│ ├── Label.tsx             // Label component
│ └── Filter.tsx            // Filter component
│
├── hooks
│ ├── useFetch.tsx          // Custom hook to fetch data
│ └── useMutate.tsx         // Custom hook to mutate data
│
├── lib
│ └── utils.ts              // Shadcn component
└── utils
├── colors.ts               // Custom reusable colors
├── dateFormatter.ts        // Function to format date
├── types.ts                // Interfaces and types

```

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/AashishKatila/blog-responsive.git
cd blog-responsive
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Configure Environment Variables:

Rename the .env.local.example into .env.local file in the root of the project.

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to open the app.
