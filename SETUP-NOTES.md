# GraphQL Migration Setup Notes

## Current Status
Branch: `graphql-updates`  
Server Status: ⚠️ Needs MongoDB configuration to run

## Changes Completed

### 1. Server Dependencies Added
- `@apollo/server` v4.10.4
- `graphql` v16.8.2  
- `dotenv` v16.0.3

### 2. Models Fixed
**Book.js**: Now correctly exports `bookSchema` instead of a model (it's a subdocument for User's savedBooks array)

### 3. GraphQL Schema Updates

#### typeDefs.js
- Removed `apollo-server-express` import
- Now uses plain template string (compatible with Apollo Server 4)
- Updated `removeBook` parameter type from `ID` to `String`

#### resolvers.js
- Renamed mutations to match front-end:
  - `createUser` → `addUser`
  - `deleteBook` → `removeBook`
- Changed `saveBook` parameter from `{content}` to `{bookData}`
- Added `context.user` authentication checks in all mutations
- Added check in `me` query for authenticated users

### 4. Client Updates

#### mutations.js
Replaced placeholder mutations with:
- `LOGIN` - User authentication
- `ADD_USER` - User registration  
- `SAVE_BOOK` - Save book to user's list
- `REMOVE_BOOK` - Remove book from user's list

#### Import Fixes
- [SearchBooks.jsx](Develop/client/src/pages/SearchBooks.jsx): Fixed `api` → `API`
- [SavedBooks.jsx](Develop/client/src/pages/SavedBooks.jsx): Fixed `api` → `API`

### 5. Environment Setup
- Added `dotenv` configuration to [server.js](Develop/server/server.js)
- Created `.env.EXAMPLE` template in server directory

## Next Steps Required

### 1. Configure MongoDB
Create a `.env` file in `Develop/server/` with:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/googlebooks?retryWrites=true&w=majority
JWT_SECRET=your_random_secret_key_here
NODE_ENV=development
```

**Get MongoDB Atlas URI:**
1. Log into [MongoDB Atlas](https://www.mongodb.net/cloud/atlas)
2. Select your cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<username>`, `<password>`, and database name

### 2. Local Testing
```bash
cd Develop
npm run develop
```

- Server should start on: `http://localhost:3001`
- GraphQL Playground: `http://localhost:3001/graphql`
- Client (Vite): `http://localhost:3001` (auto-redirects from 3000)

### 3. Test Sign Up
1. Open the web app
2. Click "Sign Up"
3. Create a test account
4. If successful, JWT and user creation are working correctly

### 4. Render Deployment

**Prerequisites:**
- All changes pushed to GitHub ✅ (done on `graphql-updates` branch)
- MongoDB Atlas cluster created

**Render Setup:**
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Create new **Web Service**
3. Connect your GitHub repository
4. Select `graphql-updates` branch (or merge to main first)

**Environment Variables** (⚠️ Critical):
```
MONGODB_URI=<your_atlas_connection_string>
JWT_SECRET=<random_secure_string>
NODE_ENV=production
```

**Build Settings:**
- Build Command: `npm install && npm run build`
- Start Command: `npm start`

## Known Issues to Monitor

### Server Errors (Now Fixed)
- ✅ Book.js export (was exporting model instead of schema)
- ✅ Resolver/TypeDef misalignment (mutation names matched)
- ✅ API import case sensitivity
- ⚠️ MongoDB connection (needs .env configuration)

### Warnings (Non-Breaking)
- Apollo Server v4 deprecation notice (EOL Jan 26, 2026) - consider upgrading to v5 soon
- Some npm audit vulnerabilities - run `npm audit fix` when ready

## File Structure
```
Develop/
├── client/
│   └── src/
│       ├── utils/
│       │   ├── mutations.js ← Updated
│       │   └── API.js
│       └── pages/
│           ├── SearchBooks.jsx ← Updated
│           └── SavedBooks.jsx ← Updated
└── server/
    ├── .env.EXAMPLE ← New
    ├── server.js ← Updated (dotenv)
    ├── models/
    │   └── Book.js ← Fixed export
    └── schemas/
        ├── typeDefs.js ← Updated
        └── resolvers.js ← Updated
```

## Git Information
- Current Branch: `graphql-updates`
- Last Commit: "GraphQL refactor: Updated resolvers, typeDefs, and mutations"
- Remote: Pushed to origin

To merge to main:
```bash
git checkout main
git merge graphql-updates
git push origin main
```
