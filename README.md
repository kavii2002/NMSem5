                     BloomBlog - A Full Stack Blogging Platform

Project Title and Description:
BloomBlog is a secure and functional Full-Stack Blogging Platform designed to provide authors with a simple environment to create, share, and inspire. It is built as a production-ready Minimal Viable Product (MVP) using a robust Node.js and MongoDB backend.

Features:
The following core functionalities have been implemented and validated:
•	User Authentication (Auth): Secure Signup and Login functionality.
•	Secure Password Storage: User passwords are encrypted using the bcrypt hashing library.
•	JWT-Based Authorization: Secure, stateless session management using JSON Web Tokens 			(JWT) for accessing protected routes like post creation.
•	Post Creation (Create): Authenticated users can create new articles with a title, content, and 
tags.
•	Post Reading (Read): Users can view a list of all posts (the feed) and individual post details.
•	Post Metadata: Posts are tagged (array of strings) and are linked to their author using 
Mongoose ObjectId references.

Tech Stack:
This project is built using the MERN stack principle with a focus on modern JavaScript practices.
•	Backend Runtime: Node.js
•	Web Framework: Express
•	Database: MongoDB (via Mongoose)
•	Database ODM: Mongoose
•	Authentication: jsonwebtoken (JWT)
•	Security: bcrypt (Password Hashing)
•	Environment Configuration: dotenv (.env)
•	Frontend: Native HTML, CSS, and JavaScript (SPA)

Future Enhancements:
•	Full Post Management (CRUD): Implement API endpoints for Update and Delete posts, including strict authorization to ensure only the author can modify their content.
•	Content Discovery & Filtering: Implement a dedicated API route (GET /api/posts/search) for efficient server-side filtering based on title, content, or tags.
•	User Engagement: Add API logic to track Views and allow authenticated users to Like/Bookmark posts.
•	Performance Optimization: Integrate Redis Caching for read-heavy routes (/api/posts) to reduce database load and improve speed.
•	Security Hardening: Implement Rate Limiting on sensitive routes (/login, /signup) and integrate middleware like Helmet.js to secure Express headers.
•	Frontend Modernization: Refactoring the native JavaScript or migrating the UI to a framework like React.js to manage complex state and component architecture.
