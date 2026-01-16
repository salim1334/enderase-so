# Managing Environment Variables with Docker

Since your app has two parts (Frontend and Backend), handling environment variables works differently for each.

## 1. Backend (Node.js) - Runtime Variables
The backend reads environment variables when it *starts running*. You don't need to do anything special during the build.

**How to set them:**
- **On AWS App Runner:** Go to **Configuration** > **Environment variables** while creating or updating your service.
- **Locally:** You can use a `.env` file or pass them in the run command:
  ```bash
  docker run -p 4000:4000 --env-file server/.env enderase-backend
  ```

**Key Variables to Set in AWS:**
- `DB_HOST`: Your RDS endpoint (e.g., `mystack-db.xxx.us-east-1.rds.amazonaws.com`)
- `DB_USER`: Your database username
- `DB_PASSWORD`: Your database password
- `DB_NAME`: `enderase`
- `FRONTEND_URL`: Your deployed frontend URL (e.g., `https://xxxx.awsapprunner.com`)

---

## 2. Frontend (React/Vite) - Build-Time Variables
The frontend is a static website. Environment variables are "baked in" permanently when you run `npm run build`. This means you must explicitly pass them when you build the Docker image.

### Step 1: Deploy Backend First
You need the Backend URL before you can build the Frontend correctly.
1. Deploy your Backend to AWS App Runner.
2. Copy the URL it gives you (e.g., `https://api-xyz.awsapprunner.com`).

### Step 2: Build Frontend with the URL
When using `docker build`, pass the URL using `--build-arg`.

**Command:**
```bash
docker build \
  --build-arg VITE_API_URL=https://your-backend-url.awsapprunner.com \
  --build-arg VITE_CMS_API_URL=https://your-backend-url.awsapprunner.com \
  -t enderase-frontend .
```

> **Note:** We updated the Dockerfile to accept these arguments.

---

### updated deploy.bat (Optional)
If you want to automate this, you can verify your `deploy.bat` or run the commands manually as shown above.
