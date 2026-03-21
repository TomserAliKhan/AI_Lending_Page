let users=[
  {
    "id": "user_1",
    "name": "Ayaan Khan",
    "email": "ayaan.khan@gmail.com",
    "password": "$2b$10$hashedpassword1",
    "avatar": "https://i.pravatar.cc/150?img=1",
    "role": "user",
    "isVerified": true,
    "createdAt": "2026-03-01T10:00:00Z"
  },
  {
    "id": "user_2",
    "name": "Riya Sharma",
    "email": "riya.sharma@gmail.com",
    "password": "$2b$10$hashedpassword2",
    "avatar": "https://i.pravatar.cc/150?img=2",
    "role": "user",
    "isVerified": true,
    "createdAt": "2026-03-02T11:00:00Z"
  },
  {
    "id": "user_3",
    "name": "Arjun Patel",
    "email": "arjun.patel@gmail.com",
    "password": "$2b$10$hashedpassword3",
    "avatar": "https://i.pravatar.cc/150?img=3",
    "role": "user",
    "isVerified": false,
    "createdAt": "2026-03-03T09:30:00Z"
  },
  {
    "id": "user_4",
    "name": "Zoya Ali",
    "email": "zoya.ali@gmail.com",
    "password": "$2b$10$hashedpassword4",
    "avatar": "https://i.pravatar.cc/150?img=4",
    "role": "admin",
    "isVerified": true,
    "createdAt": "2026-03-04T08:20:00Z"
  },
  {
    "id": "user_5",
    "name": "Rahul Verma",
    "email": "rahul.verma@gmail.com",
    "password": "$2b$10$hashedpassword5",
    "avatar": "https://i.pravatar.cc/150?img=5",
    "role": "user",
    "isVerified": false,
    "createdAt": "2026-03-05T07:15:00Z"
  },
  {
    "id": "user_6",
    "name": "Sneha Gupta",
    "email": "sneha.gupta@gmail.com",
    "password": "$2b$10$hashedpassword6",
    "avatar": "https://i.pravatar.cc/150?img=6",
    "role": "user",
    "isVerified": true,
    "createdAt": "2026-03-06T12:45:00Z"
  },
  {
    "id": "user_7",
    "name": "Imran Sheikh",
    "email": "imran.sheikh@gmail.com",
    "password": "$2b$10$hashedpassword7",
    "avatar": "https://i.pravatar.cc/150?img=7",
    "role": "user",
    "isVerified": true,
    "createdAt": "2026-03-07T14:10:00Z"
  },
  {
    "id": "user_8",
    "name": "Neha Kapoor",
    "email": "neha.kapoor@gmail.com",
    "password": "$2b$10$hashedpassword8",
    "avatar": "https://i.pravatar.cc/150?img=8",
    "role": "user",
    "isVerified": false,
    "createdAt": "2026-03-08T16:25:00Z"
  },
  {
    "id": "user_9",
    "name": "Vikram Singh",
    "email": "vikram.singh@gmail.com",
    "password": "$2b$10$hashedpassword9",
    "avatar": "https://i.pravatar.cc/150?img=9",
    "role": "user",
    "isVerified": true,
    "createdAt": "2026-03-09T18:00:00Z"
  },
  {
    "id": "user_10",
    "name": "Pooja Mehta",
    "email": "pooja.mehta@gmail.com",
    "password": "$2b$10$hashedpassword10",
    "avatar": "https://i.pravatar.cc/150?img=10",
    "role": "user",
    "isVerified": true,
    "createdAt": "2026-03-10T20:30:00Z"
  }
]

let conversation=[
  {
    "id": "conv_1",
    "userId": "user_1",
    "title": "Learn React Basics",
    "isPinned": false,
    "lastMessage": "What is useState hook?",
    "createdAt": "2026-03-11T10:00:00Z",
    "updatedAt": "2026-03-11T10:05:00Z"
  },
  {
    "id": "conv_2",
    "userId": "user_2",
    "title": "AI Chatbot Project",
    "isPinned": true,
    "lastMessage": "How to connect backend?",
    "createdAt": "2026-03-12T09:30:00Z",
    "updatedAt": "2026-03-12T09:40:00Z"
  },
  {
    "id": "conv_3",
    "userId": "user_3",
    "title": "MongoDB Help",
    "isPinned": false,
    "lastMessage": "How to create schema?",
    "createdAt": "2026-03-13T08:20:00Z",
    "updatedAt": "2026-03-13T08:25:00Z"
  },
  {
    "id": "conv_4",
    "userId": "user_4",
    "title": "JWT Authentication",
    "isPinned": true,
    "lastMessage": "How to secure routes?",
    "createdAt": "2026-03-14T07:10:00Z",
    "updatedAt": "2026-03-14T07:20:00Z"
  },
  {
    "id": "conv_5",
    "userId": "user_5",
    "title": "Frontend UI Design",
    "isPinned": false,
    "lastMessage": "Best Tailwind practices?",
    "createdAt": "2026-03-15T06:00:00Z",
    "updatedAt": "2026-03-15T06:10:00Z"
  },
  {
    "id": "conv_6",
    "userId": "user_6",
    "title": "Node.js API",
    "isPinned": false,
    "lastMessage": "How to create REST API?",
    "createdAt": "2026-03-16T05:45:00Z",
    "updatedAt": "2026-03-16T05:55:00Z"
  },
  {
    "id": "conv_7",
    "userId": "user_7",
    "title": "Database Design",
    "isPinned": true,
    "lastMessage": "Best schema for chat app?",
    "createdAt": "2026-03-17T04:30:00Z",
    "updatedAt": "2026-03-17T04:40:00Z"
  },
  {
    "id": "conv_8",
    "userId": "user_8",
    "title": "Image Generation AI",
    "isPinned": false,
    "lastMessage": "How to generate images?",
    "createdAt": "2026-03-18T03:15:00Z",
    "updatedAt": "2026-03-18T03:25:00Z"
  },
  {
    "id": "conv_9",
    "userId": "user_9",
    "title": "React Performance",
    "isPinned": false,
    "lastMessage": "How to optimize app?",
    "createdAt": "2026-03-19T02:10:00Z",
    "updatedAt": "2026-03-19T02:20:00Z"
  },
  {
    "id": "conv_10",
    "userId": "user_10",
    "title": "Full Stack Roadmap",
    "isPinned": true,
    "lastMessage": "What to learn next?",
    "createdAt": "2026-03-20T01:00:00Z",
    "updatedAt": "2026-03-20T01:10:00Z"
  }
]

let message=[
  {
    "id": "msg_1",
    "conversationId": "conv_1",
    "userId": "user_1",
    "role": "user",
    "content": "How to learn React?",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-11T10:00:00Z"
  },
  {
    "id": "msg_2",
    "conversationId": "conv_1",
    "userId": "user_1",
    "role": "assistant",
    "content": "You can start with basics like components, props, and state.",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-11T10:01:00Z"
  },
  {
    "id": "msg_3",
    "conversationId": "conv_2",
    "userId": "user_2",
    "role": "user",
    "content": "How to connect frontend with backend?",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-12T09:30:00Z"
  },
  {
    "id": "msg_4",
    "conversationId": "conv_2",
    "userId": "user_2",
    "role": "assistant",
    "content": "Use fetch or axios to call your backend API endpoints.",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-12T09:31:00Z"
  },
  {
    "id": "msg_5",
    "conversationId": "conv_3",
    "userId": "user_3",
    "role": "user",
    "content": "How to create MongoDB schema?",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-13T08:20:00Z"
  },
  {
    "id": "msg_6",
    "conversationId": "conv_3",
    "userId": "user_3",
    "role": "assistant",
    "content": "Use mongoose.Schema to define your data structure.",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-13T08:21:00Z"
  },
  {
    "id": "msg_7",
    "conversationId": "conv_4",
    "userId": "user_4",
    "role": "user",
    "content": "How to secure routes using JWT?",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-14T07:10:00Z"
  },
  {
    "id": "msg_8",
    "conversationId": "conv_4",
    "userId": "user_4",
    "role": "assistant",
    "content": "Use middleware to verify JWT token before accessing protected routes.",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-14T07:11:00Z"
  },
  {
    "id": "msg_9",
    "conversationId": "conv_5",
    "userId": "user_5",
    "role": "user",
    "content": "Best practices for Tailwind CSS?",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-15T06:00:00Z"
  },
  {
    "id": "msg_10",
    "conversationId": "conv_5",
    "userId": "user_5",
    "role": "assistant",
    "content": "Use reusable components and avoid repeating utility classes.",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-15T06:01:00Z"
  },
  {
    "id": "msg_11",
    "conversationId": "conv_6",
    "userId": "user_6",
    "role": "user",
    "content": "How to create REST API in Node?",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-16T05:45:00Z"
  },
  {
    "id": "msg_12",
    "conversationId": "conv_6",
    "userId": "user_6",
    "role": "assistant",
    "content": "Use Express.js to define routes and handle HTTP requests.",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-16T05:46:00Z"
  },
  {
    "id": "msg_13",
    "conversationId": "conv_7",
    "userId": "user_7",
    "role": "user",
    "content": "Best schema design for chat app?",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-17T04:30:00Z"
  },
  {
    "id": "msg_14",
    "conversationId": "conv_7",
    "userId": "user_7",
    "role": "assistant",
    "content": "Separate users, conversations, and messages collections for scalability.",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-17T04:31:00Z"
  },
  {
    "id": "msg_15",
    "conversationId": "conv_8",
    "userId": "user_8",
    "role": "user",
    "content": "How to generate AI images?",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-18T03:15:00Z"
  },
  {
    "id": "msg_16",
    "conversationId": "conv_8",
    "userId": "user_8",
    "role": "assistant",
    "content": "Use models like Stable Diffusion or APIs like Replicate.",
    "type": "text",
    "isEdited": false,
    "createdAt": "2026-03-18T03:16:00Z"
  }
]