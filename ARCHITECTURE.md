# Docker & AWS Architecture - Visual Guide

## 🏗️ What You're Building

```
┌─────────────────────────────────────────────────────────────┐
│                    YOUR COMPUTER                             │
│                                                              │
│  ┌──────────────┐          ┌──────────────┐                │
│  │   Frontend   │          │   Backend    │                │
│  │  React Code  │          │ Express Code │                │
│  └──────┬───────┘          └──────┬───────┘                │
│         │                          │                         │
│         │ docker build            │ docker build            │
│         ▼                          ▼                         │
│  ┌──────────────┐          ┌──────────────┐                │
│  │   Frontend   │          │   Backend    │                │
│  │ Docker Image │          │ Docker Image │                │
│  └──────┬───────┘          └──────┬───────┘                │
│         │                          │                         │
│         └────────┬──────────────┬──┘                        │
│                  │ docker push  │                           │
│                  ▼              ▼                            │
└──────────────────┼──────────────┼───────────────────────────┘
                   │              │
                   │              │
┌──────────────────┼──────────────┼───────────────────────────┐
│                  │   AWS CLOUD  │                           │
│                  ▼              ▼                            │
│         ┌────────────────────────────┐                      │
│         │     AWS ECR (Registry)     │                      │
│         │  ┌──────────┐ ┌──────────┐│                      │
│         │  │ Frontend │ │ Backend  ││                      │
│         │  │  Image   │ │  Image   ││                      │
│         │  └────┬─────┘ └─────┬────┘│                      │
│         └───────┼─────────────┼─────┘                      │
│                 │             │                             │
│                 │ deploy      │ deploy                      │
│                 ▼             ▼                             │
│    ┌────────────────┐  ┌────────────────┐                 │
│    │  App Runner    │  │  App Runner    │                 │
│    │   Frontend     │  │   Backend      │                 │
│    │   Container    │  │   Container    │                 │
│    │                │  │                │                 │
│    │ http://abc.aws │  │ http://def.aws │                 │
│    └────────┬───────┘  └────────┬───────┘                 │
│             │                    │                          │
│             │                    │ connects to              │
│             │                    ▼                          │
│             │           ┌─────────────────┐                │
│             │           │   AWS RDS       │                │
│             │           │   MySQL DB      │                │
│             │           └─────────────────┘                │
│             │                                               │
│             └─────────────┐                                │
│                           │                                 │
└───────────────────────────┼─────────────────────────────────┘
                            │
                            ▼
                    ┌──────────────┐
                    │   USERS      │
                    │ (Customers)  │
                    └──────────────┘
```

---

## 🔄 The Complete Flow

### Step 1: Development (Your Computer)
```
You write code → Save files → Ready to deploy
```

### Step 2: Build Docker Images (Your Computer)
```
Frontend:
React Code + Dependencies → Dockerfile → Docker Image (45MB)

Backend:
Express Code + Dependencies → Dockerfile → Docker Image (150MB)
```

### Step 3: Upload to AWS (Your Computer → AWS)
```
Docker Login to ECR
↓
Tag Images with ECR URL
↓
Push Images to ECR
↓
Images stored in AWS
```

### Step 4: Deploy (AWS Console)
```
Select Image from ECR
↓
Configure App Runner Service
↓
Set Environment Variables
↓
Deploy
↓
Get Public URL
```

### Step 5: Running (AWS Cloud)
```
User visits URL
↓
App Runner runs your container
↓
Backend connects to RDS database
↓
Returns data to frontend
↓
User sees website
```

---

## 📦 What's Inside a Docker Container?

### Frontend Container:
```
┌─────────────────────────┐
│  Docker Container       │
│                         │
│  ┌───────────────────┐ │
│  │ Nginx Web Server  │ │
│  └─────────┬─────────┘ │
│            │            │
│  ┌─────────▼─────────┐ │
│  │ Built React App   │ │
│  │ (HTML/CSS/JS)     │ │
│  └───────────────────┘ │
│                         │
│  Port: 80               │
└─────────────────────────┘
```

### Backend Container:
```
┌─────────────────────────┐
│  Docker Container       │
│                         │
│  ┌───────────────────┐ │
│  │ Node.js Runtime   │ │
│  └─────────┬─────────┘ │
│            │            │
│  ┌─────────▼─────────┐ │
│  │ Express Server    │ │
│  │ API Routes        │ │
│  │ Database Logic    │ │
│  └───────────────────┘ │
│                         │
│  Port: 4000             │
└─────────────────────────┘
```

---

## 🎯 Why This Architecture?

### Benefits:

1. **Isolation** 🔒
   - Each container runs independently
   - Frontend crash won't affect backend

2. **Scalability** 📈
   - AWS can run multiple containers
   - Handle more users automatically

3. **Consistency** ✅
   - Same image works everywhere
   - No "works on my machine" problems

4. **Easy Updates** 🔄
   - Build new image → Push → Deploy
   - Old version keeps running until new one is ready

5. **Cost Effective** 💰
   - Only pay when containers are running
   - Auto-scales based on traffic

---

## 📊 Resource Usage

### Your Computer:
- **Storage**: ~2GB (Docker images)
- **RAM**: Varies (when building/running)
- **Internet**: ~500MB upload to AWS

### AWS Cloud:
- **ECR Storage**: ~200MB (both images)
- **App Runner**: 1 vCPU + 2GB RAM per service
- **RDS**: Already running (shared)

---

## 🔐 Security Model

```
┌─────────────┐
│   Internet  │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│ CloudFront CDN  │ (Optional - for caching)
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  App Runner     │ ← Only accepts HTTPS
│  (Frontend)     │
└─────────────────┘

┌─────────────────┐
│  App Runner     │ ← Private network
│  (Backend)      │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│   AWS RDS       │ ← Only backend can access
│   (Database)    │
└─────────────────┘
```

---

## 🚀 Deployment Timeline

```
Day 1: Setup (2 hours)
├── Install Docker Desktop
├── Install AWS CLI
└── Configure AWS credentials

Day 2: Build & Test (2 hours)
├── Build Docker images
├── Test locally
└── Fix any issues

Day 3: Upload to AWS (1 hour)
├── Create ECR repositories
├── Push images
└── Verify in AWS Console

Day 4: Deploy (1 hour)
├── Create App Runner services
├── Configure environment
└── Test live URLs

Day 5: Polish (1 hour)
├── Take screenshots
├── Prepare demo
└── Document architecture

Total: ~7 hours
```

---

## 💡 Key Concepts

### Docker Image vs Container

**Image** = Recipe
- Static blueprint
- Stored in ECR
- Can't run by itself

**Container** = Meal
- Running instance of image
- Has CPU, RAM, storage
- Can be started/stopped

### Analogy:
```
Image = Cookie cutter shape
Container = Actual cookie

You can make many cookies (containers)
from one cookie cutter (image)
```

---

## 🎓 Defense Day Demo Flow

1. **Show Architecture Diagram** (this file!)
   - Explain Docker concept
   - Show AWS services used

2. **Show ECR** (AWS Console)
   - "Our Docker images stored here"
   - Point out image versions

3. **Show App Runner** (AWS Console)
   - "Automatically scales based on traffic"
   - Show configuration

4. **Show Live Website**
   - Demonstrate functionality
   - Show it works!

5. **Show Logs** (CloudWatch)
   - "Real-time monitoring"
   - Show actual requests

Total demo time: 5-7 minutes

---

**Remember**: Docker is just a fancy way to package your app so it runs the same everywhere! 📦✨
