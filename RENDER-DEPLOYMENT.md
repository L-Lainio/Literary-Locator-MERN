# Render Deployment Guide

## Prerequisites
✅ Code pushed to GitHub (graphql-updates branch)  
✅ Build successful (`npm run build`)  
⚠️ MongoDB Atlas account needed

---

## Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster (if you don't have one)
3. Click **Connect** → **Connect your application**
4. Copy your connection string:
   ```
   mongodb+srv://<username>:<password>@cluster.mongodb.net/googlebooks?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your credentials
6. Keep this handy for Step 3

---

## Step 2: Create Render Web Service

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **New +** → **Web Service**
3. Connect your GitHub account (if not already connected)
4. Select your repository: `Literary-Locator-MERN`
5. Configure service:
   - **Name**: `literary-locator` (or your choice)
   - **Region**: Choose closest to you
   - **Branch**: `graphql-updates`
   - **Root Directory**: `Develop`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free

---

## Step 3: Add Environment Variables

In the Render dashboard, go to **Environment** tab and add:

### Required Variables:

| Key | Value | Example |
|-----|-------|---------|
| `MONGODB_URI` | Your MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster.mongodb.net/googlebooks` |
| `JWT_SECRET` | Random secure string (20+ characters) | `aB3$xZ9!mK7@qW2#nL5^pT8&fR4` |
| `NODE_ENV` | `production` | `production` |

### Generate JWT_SECRET:
Run in PowerShell:
```powershell
-join ((48..57) + (65..90) + (97..122) + (33,35,36,38,64,94) | Get-Random -Count 32 | % {[char]$_})
```

---

## Step 4: Deploy

1. Click **Create Web Service**
2. Render will automatically:
   - Clone your repository
   - Run `npm install && npm run build`
   - Start the server with `npm start`
3. Wait for deployment (5-10 minutes first time)
4. Look for "Deploy successful" message

---

## Step 5: Test Your Deployment

Once deployed, Render will give you a URL like:
```
https://literary-locator.onrender.com
```

### Test GraphQL Endpoint:
Visit: `https://your-app.onrender.com/graphql`

### Test the App:
1. Visit your Render URL
2. Click **Sign Up**
3. Create a test account
4. If successful, your deployment is working! ✅

---

## Troubleshooting

### Build Fails
- Check that `Root Directory` is set to `Develop`
- Verify `Build Command`: `npm install && npm run build`

### Server Won't Start
- Check environment variables are set correctly
- Verify `MONGODB_URI` has correct credentials
- Check Render logs for specific errors

### Database Connection Errors
- Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- In Atlas: Network Access → Add IP Address → Allow Access from Anywhere

### App Loads but Features Don't Work
- Check JWT_SECRET is set
- Verify all 3 environment variables are configured
- Check browser console for API errors

---

## Post-Deployment

### Monitor Your App
- **Logs**: Render Dashboard → Logs tab
- **Metrics**: Dashboard shows CPU, memory usage

### Update Your App
```bash
# Make changes locally
git add .
git commit -m "Your changes"
git push origin graphql-updates
```
Render will auto-deploy when you push to the branch.

### Custom Domain (Optional)
1. In Render Dashboard → Settings
2. Add custom domain
3. Update DNS records as instructed

---

## Free Tier Notes
⚠️ Render free tier spins down after 15 minutes of inactivity  
⚠️ First request after inactivity takes 30-60 seconds (cold start)  
✅ Upgrades available for always-on service

---

## Success Checklist
- [ ] MongoDB Atlas cluster created
- [ ] Connection string copied
- [ ] Render account created
- [ ] Repository connected
- [ ] Environment variables set (all 3)
- [ ] Build Command: `npm install && npm run build`
- [ ] Start Command: `npm start`
- [ ] Root Directory: `Develop`
- [ ] Deployment successful
- [ ] GraphQL endpoint accessible
- [ ] Sign up tested successfully

**Your app is now live! 🚀**
