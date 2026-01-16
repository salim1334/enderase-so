# Complete Docker & AWS Deployment Guide for Beginners
## From Zero to Deployed in AWS

> **For**: Complete Docker beginners  
> **Goal**: Deploy your app to AWS using Docker  
> **Time**: 2-3 hours

---

## 📚 Table of Contents

1. [What is Docker? (5 min read)](#what-is-docker)
2. [Installing Docker (15 min)](#installing-docker)
3. [Creating Docker Images (30 min)](#creating-docker-images)
4. [Testing Locally (20 min)](#testing-locally)
5. [Uploading to AWS ECR (30 min)](#uploading-to-aws-ecr)
6. [Deploying to AWS (45 min)](#deploying-to-aws)

---

## 🤔 What is Docker?

### Simple Explanation
Think of Docker like a shipping container for your application:
- A **shipping container** can hold anything and be transported anywhere
- A **Docker container** packages your app with everything it needs to run

### Why Docker?
✅ **Works Everywhere**: "It works on my machine" → "It works everywhere"  
✅ **Consistent**: Same environment in development, testing, and production  
✅ **Easy Deployment**: Upload once, deploy anywhere  
✅ **AWS Loves It**: AWS services like ECS, Fargate, and Elastic Beanstalk use Docker

### Key Terms
- **Image**: Blueprint of your app (like a recipe)
- **Container**: Running instance of an image (like the cooked meal)
- **Dockerfile**: Instructions to build an image (like cooking instructions)
- **Registry**: Storage for images (like AWS ECR or Docker Hub)

---

## 💻 Installing Docker

### For Windows

#### Step 1: Download Docker Desktop
1. Go to: https://www.docker.com/products/docker-desktop
2. Click **"Download for Windows"**
3. Run the installer (Docker Desktop Installer.exe)

#### Step 2: Install
1. Follow the installation wizard
2. **Important**: Enable WSL 2 when asked (Windows Subsystem for Linux)
3. Restart your computer when prompted

#### Step 3: Verify Installation
Open PowerShell or Command Prompt:
```bash
docker --version
# Should show: Docker version 24.x.x

docker run hello-world
# Should download and run a test container
```

### Troubleshooting
❌ **Error: "Docker daemon is not running"**
- ✅ Open Docker Desktop app and wait for it to start

❌ **Error: "WSL 2 installation is incomplete"**
- ✅ Run: `wsl --install` in PowerShell (as Administrator)
- ✅ Restart computer

---

## 🏗️ Creating Docker Images

You have 2 parts of your app: **Frontend** (React) and **Backend** (Express.js)

### Understanding Your Current Dockerfile

Let's look at your existing `Dockerfile` (for frontend):

```dockerfile
# Stage 1: Build the React app
FROM node:18-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Explanation:**
- `FROM node:18-alpine` → Start with Node.js (lightweight version)
- `WORKDIR /app` → Set working directory inside container
- `COPY package*.json ./` → Copy package files first (faster builds)
- `RUN npm install` → Install dependencies
- `COPY . .` → Copy all your code
- `RUN npm run build` → Build React app (creates `dist` folder)
- `FROM nginx:stable-alpine` → Use Nginx to serve static files
- `COPY --from=build-stage` → Copy built files from stage 1
- `EXPOSE 80` → Container listens on port 80
- `CMD` → Start Nginx

### Create Backend Dockerfile

You need a separate Dockerfile for your backend:

```dockerfile
# File: server/Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application code
COPY . .

# Expose the port your app runs on
EXPOSE 4000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["node", "index.js"]
```

---

## 🔨 Building Docker Images

### Step 1: Build Frontend Image

Open terminal in your project root (`C:\Users\WINDOWS1\Desktop\enderase-so`):

```bash
# Build frontend image
docker build -t enderase-frontend:latest .

# Explanation:
# docker build → Build an image
# -t enderase-frontend:latest → Tag/name it "enderase-frontend" version "latest"
# . → Use current directory (where Dockerfile is)
```

**Wait time**: 3-5 minutes (first time is slower)

**Expected output:**
```
[+] Building 156.2s (17/17) FINISHED
 => [internal] load build definition
 => => transferring dockerfile: 715B
 => [internal] load .dockerignore
 => exporting to image
 => => naming to docker.io/library/enderase-frontend:latest
```

### Step 2: Build Backend Image

```bash
# Navigate to server directory
cd server

# Build backend image
docker build -t enderase-backend:latest .

# Go back to root
cd ..
```

### Step 3: Verify Images

```bash
docker images

# Should show:
# REPOSITORY           TAG       IMAGE ID       CREATED          SIZE
# enderase-backend     latest    abc123...      2 minutes ago    150MB
# enderase-frontend    latest    def456...      5 minutes ago    45MB
```

---

## 🧪 Testing Locally

Before uploading to AWS, test your Docker images locally.

### Step 1: Create Docker Network

Containers need to talk to each other:

```bash
docker network create enderase-network
```

### Step 2: Run Backend Container

```bash
docker run -d \
  --name enderase-backend \
  --network enderase-network \
  -p 4000:4000 \
  -e DB_HOST=database-1.cbcu2uqawqtg.eu-north-1.rds.amazonaws.com \
  -e DB_USER=admin \
  -e DB_PASSWORD=pfINZhZeEHp0VeRYgNGN \
  -e DB_NAME=enderase_db \
  -e JWT_SECRET=your_jwt_secret_here_change_in_production \
  enderase-backend:latest
```

**Explanation:**
- `-d` → Run in background (detached)
- `--name` → Name the container
- `--network` → Connect to network
- `-p 4000:4000` → Map port 4000 (host:container)
- `-e` → Set environment variables
- `enderase-backend:latest` → Use this image

### Step 3: Run Frontend Container

```bash
docker run -d \
  --name enderase-frontend \
  --network enderase-network \
  -p 80:80 \
  enderase-frontend:latest
```

### Step 4: Test

Open browser:
- Frontend: http://localhost
- Backend API: http://localhost:4000

### Step 5: View Logs (if something doesn't work)

```bash
# View backend logs
docker logs enderase-backend

# Follow logs in real-time
docker logs -f enderase-backend

# View frontend logs
docker logs enderase-frontend
```

### Step 6: Stop Containers (when done testing)

```bash
docker stop enderase-backend enderase-frontend
docker rm enderase-backend enderase-frontend
```

---

## ☁️ Uploading to AWS ECR

AWS ECR (Elastic Container Registry) is like Docker Hub, but on AWS.

### Step 1: Install AWS CLI

#### For Windows:
1. Download: https://awscli.amazonaws.com/AWSCLIV2.msi
2. Run installer
3. Verify:
```bash
aws --version
# Should show: aws-cli/2.x.x
```

### Step 2: Configure AWS Credentials

You need AWS credentials (Access Key ID and Secret Access Key).

#### Get Credentials from AWS Console:
1. Go to AWS Console → IAM
2. Click **Users** → Your username
3. Click **Security credentials** tab
4. Click **Create access key**
5. Choose **CLI** → Next → Create
6. **IMPORTANT**: Save both keys NOW (you can't see Secret Key again)

#### Configure on your computer:
```bash
aws configure

# Enter:
# AWS Access Key ID: YOUR_ACCESS_KEY_ID
# AWS Secret Access Key: YOUR_SECRET_ACCESS_KEY
# Default region name: eu-north-1  (same as your RDS)
# Default output format: json
```

### Step 3: Create ECR Repositories

```bash
# Create repository for frontend
aws ecr create-repository --repository-name enderase-frontend --region eu-north-1

# Create repository for backend
aws ecr create-repository --repository-name enderase-backend --region eu-north-1
```

**Expected output:**
```json
{
    "repository": {
        "repositoryArn": "arn:aws:ecr:eu-north-1:123456789:repository/enderase-frontend",
        "repositoryUri": "123456789.dkr.ecr.eu-north-1.amazonaws.com/enderase-frontend"
    }
}
```

**⚠️ SAVE THE `repositoryUri` - you'll need it!**

### Step 4: Login to ECR

```bash
# Get login password and login to Docker
aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.eu-north-1.amazonaws.com

# Replace 123456789 with YOUR AWS account ID
# Find it: aws sts get-caller-identity --query Account --output text
```

**Expected**: `Login Succeeded`

### Step 5: Tag Images for ECR

Replace `123456789` with your AWS account ID:

```bash
# Tag frontend
docker tag enderase-frontend:latest 123456789.dkr.ecr.eu-north-1.amazonaws.com/enderase-frontend:latest

# Tag backend
docker tag enderase-backend:latest 123456789.dkr.ecr.eu-north-1.amazonaws.com/enderase-backend:latest
```

### Step 6: Push Images to ECR

```bash
# Push frontend (takes 2-5 minutes)
docker push 123456789.dkr.ecr.eu-north-1.amazonaws.com/enderase-frontend:latest

# Push backend (takes 2-5 minutes)
docker push 123456789.dkr.ecr.eu-north-1.amazonaws.com/enderase-backend:latest
```

**Progress bars will show:**
```
The push refers to repository [123456789.dkr.ecr.eu-north-1.amazonaws.com/enderase-frontend]
abc123: Pushed
def456: Pushed
latest: digest: sha256:... size: 1234
```

### Step 7: Verify in AWS Console

1. Go to AWS Console → ECR
2. You should see 2 repositories:
   - `enderase-frontend` (with 1 image)
   - `enderase-backend` (with 1 image)

---

## 🚀 Deploying to AWS

Now that your images are in ECR, deploy them using **AWS App Runner** (easiest) or **ECS Fargate**.

### Option A: AWS App Runner (Easiest - Recommended for Beginners)

#### Deploy Backend:

1. **AWS Console** → **App Runner**
2. Click **Create service**
3. **Source**:
   - Repository type: **Container registry**
   - Provider: **Amazon ECR**
   - Container image URI: Select `enderase-backend:latest`
   - Deployment trigger: **Manual**
   - Click **Next**

4. **Service Settings**:
   - Service name: `enderase-backend-service`
   - Port: `4000`
   - Click **Add environment variable** for each:
     - `DB_HOST` = `database-1.cbcu2uqawqtg.eu-north-1.rds.amazonaws.com`
     - `DB_USER` = `admin`
     - `DB_PASSWORD` = `pfINZhZeEHp0VeRYgNGN`
     - `DB_NAME` = `enderase_db`
     - `JWT_SECRET` = `your_secret_here`
     - `NODE_ENV` = `production`
   - Click **Next**

5. **Review** → **Create & Deploy**

6. **Wait 5-10 minutes** for deployment

7. **Copy the URL** (looks like: `https://abc123.eu-north-1.awsapprunner.com`)

#### Deploy Frontend:

1. Same steps, but:
   - Container image: Select `enderase-frontend:latest`
   - Service name: `enderase-frontend-service`
   - Port: `80`
   - Environment variables:
     - `VITE_API_URL` = `https://YOUR-BACKEND-URL.awsapprunner.com`
   
2. Create & Deploy

3. Wait for deployment

4. **Your app is live!** Visit the frontend URL

### Option B: AWS ECS Fargate (More Control)

If you need more control than App Runner, use ECS Fargate.

#### Step 1: Create a Cluster
1. Go to **AWS Console** → **Elastic Container Service (ECS)**.
2. Click **Clusters** → **Create Cluster**.
3. Name: `enderase-cluster`.
4. Infrastructure: Select **AWS Fargate (serverless)**.
5. Click **Create**.

#### Step 2: Create Task Definitions (The Blueprint)
You need one for Backend and one for Frontend.

**For Backend:**
1. Go to **Task Definitions** → **Create new Task Definition**.
2. Family name: `enderase-backend-task`.
3. **Infrastructure**: AWS Fargate.
4. **Container 1**:
   - Name: `backend-container`
   - Image URI: YOUR_ECR_BACKEND_URI (e.g., `123456.dkr.ecr.../enderase-backend:latest`)
   - Port mappings: `4000` (Protocol TCP)
   - **Environment variables** (Add all from previous step: `DB_HOST`, `DB_USER`, etc.)
5. Click **Create**.

**For Frontend:**
1. Create new Task Definition.
2. Family name: `enderase-frontend-task`.
3. **Infrastructure**: AWS Fargate.
4. **Container 1**:
   - Name: `frontend-container`
   - Image URI: YOUR_ECR_FRONTEND_URI
   - Port mappings: `80`
   - **Environment variables**: N/A (Already baked in during build!)
5. Click **Create**.

#### Step 3: Run Services
Now run these tasks in your cluster.

**Run Backend Service:**
1. Go to **Clusters** → `enderase-cluster`.
2. Services tab → **Create**.
3. Compute options: **Capacity provider strategy**.
4. Family: `enderase-backend-task`.
5. Service name: `backend-service`.
6. Desired tasks: `1`.
7. **Networking**:
   - VPC: Select default.
   - Subnets: Select all.
   - **Security Group**: Create new.
     - Type: Custom TCP, Port: `4000`, Source: `Anywhere`.
   - **Public IP**: TURN ON.
8. Click **Create**.
9. Wait for it to deploy. Click the **Task ID** → **Networking** tab to find your **Public IP**.
   - Your Backend URL is: `http://<Public-IP>:4000`

**Run Frontend Service:**
1. Creates service similar to Backend.
2. Family: `enderase-frontend-task`.
3. Service name: `frontend-service`.
4. **Security Group**: Allow Port `80` from `Anywhere`.
5. **Public IP**: TURN ON.
6. Create and wait.
7. Get **Public IP** from the running task.
   - Access your app at: `http://<Public-IP>`

> **Note**: Fargate IPs change if the task restarts. For a static URL, you need an **Application Load Balancer (ALB)**, which costs extra (~$16/mo). This is why App Runner is recommended—it includes a URL for free.

---

## 📋 Quick Commands Reference

### Build Images
```bash
# Frontend
docker build -t enderase-frontend:latest .

# Backend
cd server
docker build -t enderase-backend:latest .
cd ..
```

### Run Locally
```bash
docker network create enderase-network

docker run -d --name enderase-backend --network enderase-network -p 4000:4000 \
  -e DB_HOST=your-rds-endpoint -e DB_USER=admin -e DB_PASSWORD=yourpass \
  enderase-backend:latest

docker run -d --name enderase-frontend --network enderase-network -p 80:80 \
  enderase-frontend:latest
```

### Push to ECR
```bash
# Login
aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com

# Tag
docker tag enderase-frontend:latest YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com/enderase-frontend:latest
docker tag enderase-backend:latest YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com/enderase-backend:latest

# Push
docker push YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com/enderase-frontend:latest
docker push YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com/enderase-backend:latest
```

### Useful Debug Commands
```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# View logs
docker logs container-name

# Stop container
docker stop container-name

# Remove container
docker rm container-name

# List images
docker images

# Remove image
docker rmi image-name
```

---

## 🎓 Defense Day Talking Points

### Why Docker?
*"We containerized our application using Docker to ensure consistency across development, testing, and production environments."*

### AWS Integration
*"Our Docker images are stored in AWS ECR and deployed using AWS App Runner/ECS, providing automatic scaling and high availability."*

### Benefits Demonstrated
1. **Portability**: Same image runs anywhere
2. **Scalability**: AWS can run multiple containers automatically
3. **Efficiency**: Containers start in seconds
4. **Cost**: Only pay for what you use

### Show This
- ECR repositories with images
- App Runner/ECS service running
- Live application URL
- CloudWatch logs from containers

---

## 🆘 Troubleshooting

### "docker: command not found"
- ✅ Docker Desktop not installed or not running
- ✅ Restart computer after installation

### "Cannot connect to Docker daemon"
- ✅ Start Docker Desktop application
- ✅ Wait for Docker to fully start (whale icon in taskbar)

### Image won't build
- ✅ Check Dockerfile syntax
- ✅ Make sure you're in correct directory
- ✅ Try: `docker system prune` to clean up

### "Access Denied" pushing to ECR
- ✅ Run `aws configure` again
- ✅ Check IAM permissions (need ECR access)
- ✅ Re-login: `aws ecr get-login-password...`

### Container crashes immediately
- ✅ Check logs: `docker logs container-name`
- ✅ Environment variables missing?
- ✅ Database connection working?

### "Port already in use"
- ✅ Stop other containers using that port
- ✅ Use different port: `-p 8080:80` instead of `-p 80:80`

---

## ✅ Success Checklist

Before defense day, verify:

- [ ] Docker Desktop installed and running
- [ ] Frontend image builds successfully
- [ ] Backend image builds successfully
- [ ] Both containers run locally
- [ ] Can access app at http://localhost
- [ ] AWS CLI configured
- [ ] ECR repositories created
- [ ] Images pushed to ECR
- [ ] App Runner/ECS services created
- [ ] Live URLs accessible
- [ ] Screenshots of AWS console ready

---

## 🎯 Next Steps After Deployment

1. **Custom Domain** (Route 53)
   - Point your domain to App Runner URL
   
2. **HTTPS/SSL** (AWS Certificate Manager)
   - Free SSL certificates
   
3. **CI/CD** (GitHub Actions or AWS CodePipeline)
   - Automatic deployment on git push
   
4. **Monitoring** (CloudWatch)
   - Set up alarms for errors

---

## 📚 Learn More

- Docker Documentation: https://docs.docker.com
- AWS ECR Guide: https://docs.aws.amazon.com/ecr
- AWS App Runner: https://docs.aws.amazon.com/apprunner

---

**Good luck with your deployment! 🚀**

*Remember: Docker is just packaging your app. Don't overthink it!*
