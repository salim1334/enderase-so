# 🚀 Quick Start: Docker to AWS in 30 Minutes

## Prerequisites Checklist
- [ ] Docker Desktop installed
- [ ] AWS Account created
- [ ] AWS CLI installed and configured

---

## Step 1: Build Images (5 min)

```bash
# In project root (C:\Users\WINDOWS1\Desktop\enderase-so)

# Build frontend
docker build -t enderase-frontend:latest .

# Build backend
cd server
docker build -t enderase-backend:latest .
cd ..
```

---

## Step 2: Test Locally (5 min)

```bash
# Create network
docker network create enderase-network

# Run backend
docker run -d --name enderase-backend --network enderase-network -p 4000:4000 ^
  -e DB_HOST=database-1.cbcu2uqawqtg.eu-north-1.rds.amazonaws.com ^
  -e DB_USER=admin ^
  -e DB_PASSWORD=pfINZhZeEHp0VeRYgNGN ^
  -e DB_NAME=enderase_db ^
  -e JWT_SECRET=your_secret_here ^
  enderase-backend:latest

# Run frontend
docker run -d --name enderase-frontend --network enderase-network -p 80:80 enderase-frontend:latest

# Test: Open http://localhost in browser

# Stop when done
docker stop enderase-backend enderase-frontend
docker rm enderase-backend enderase-frontend
```

---

## Step 3: Create ECR Repositories (2 min)

```bash
# Get your AWS account ID first
aws sts get-caller-identity --query Account --output text
# Save this number! You'll need it multiple times

# Create repositories
aws ecr create-repository --repository-name enderase-frontend --region eu-north-1
aws ecr create-repository --repository-name enderase-backend --region eu-north-1
```

---

## Step 4: Push to ECR (10 min)

**Replace `YOUR_ACCOUNT_ID` with the number from Step 3!**

```bash
# Login to ECR
aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com

# Tag images
docker tag enderase-frontend:latest YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com/enderase-frontend:latest
docker tag enderase-backend:latest YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com/enderase-backend:latest

# Push images
docker push YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com/enderase-frontend:latest
docker push YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com/enderase-backend:latest
```

---

## Step 5: Deploy with AWS App Runner (8 min)

### Deploy Backend:
1. AWS Console → **App Runner** → **Create service**
2. Source: **Amazon ECR** → Select `enderase-backend:latest`
3. Service name: `enderase-backend-service`
4. Port: `4000`
5. Add environment variables:
   - `DB_HOST` = `database-1.cbcu2uqawqtg.eu-north-1.rds.amazonaws.com`
   - `DB_USER` = `admin`
   - `DB_PASSWORD` = `pfINZhZeEHp0VeRYgNGN`
   - `DB_NAME` = `enderase_db`
   - `JWT_SECRET` = `your_secret_here`
   - `NODE_ENV` = `production`
6. **Create & Deploy** → Wait 5 min
7. **Copy backend URL** (e.g., `https://abc123.eu-north-1.awsapprunner.com`)

### Deploy Frontend:
1. AWS Console → **App Runner** → **Create service**
2. Source: **Amazon ECR** → Select `enderase-frontend:latest`
3. Service name: `enderase-frontend-service`
4. Port: `80`
5. **Create & Deploy** → Wait 5 min
6. **Copy frontend URL** → This is your live website!

---

## ✅ Done! Your App is Live!

Visit your frontend URL to see your deployed application.

---

## 🔄 To Update Your App Later

```bash
# 1. Make code changes
# 2. Rebuild image
docker build -t enderase-frontend:latest .

# 3. Re-tag
docker tag enderase-frontend:latest YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com/enderase-frontend:latest

# 4. Push
docker push YOUR_ACCOUNT_ID.dkr.ecr.eu-north-1.amazonaws.com/enderase-frontend:latest

# 5. AWS Console → App Runner → Your service → Deploy → New deployment
```

---

## 🆘 Common Issues

**"docker: command not found"**
- Open Docker Desktop app

**"Cannot connect to Docker daemon"**
- Wait for Docker to fully start (see whale icon in taskbar)

**"Access Denied" to ECR**
- Run: `aws configure`
- Re-login to ECR: `aws ecr get-login-password...`

**Container crashes**
- Check logs: `docker logs container-name`
- Check environment variables

**App works locally but not on AWS**
- Check App Runner logs in AWS Console
- Verify environment variables are set
- Check RDS security group allows App Runner

---

## 📸 Screenshots for Defense Day

Take screenshots of:
1. Docker Desktop showing your images
2. AWS ECR showing both repositories
3. App Runner showing both services running
4. Your live website URL
5. CloudWatch logs showing requests

---

**Total Time**: ~30 minutes (excluding wait times)

**Cost**: ~$10-15/month for App Runner + RDS

**Wow Factor**: Very High! 🎯
