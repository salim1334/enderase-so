@echo off
REM Docker Build and Push Script for Windows
REM Run this after making changes to your code

echo ========================================
echo Enderase Solutions - Docker Build Script
echo ========================================
echo.

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker is not running!
    echo Please start Docker Desktop and try again.
    pause
    exit /b 1
)

REM Get AWS Account ID
echo [1/6] Getting AWS Account ID...
for /f "delims=" %%i in ('aws sts get-caller-identity --query Account --output text') do set AWS_ACCOUNT_ID=%%i
if "%AWS_ACCOUNT_ID%"=="" (
    echo ERROR: Could not get AWS Account ID
    echo Please run: aws configure
    pause
    exit /b 1
)
echo AWS Account ID: %AWS_ACCOUNT_ID%
echo.

REM Set variables
set AWS_REGION=eu-north-1
set ECR_FRONTEND=%AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com/enderase-frontend
set ECR_BACKEND=%AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com/enderase-backend

REM Build Frontend
echo [2/6] Building Frontend Docker image...
docker build -t enderase-frontend:latest .
if errorlevel 1 (
    echo ERROR: Frontend build failed!
    pause
    exit /b 1
)
echo Frontend build successful!
echo.

REM Build Backend
echo [3/6] Building Backend Docker image...
cd server
docker build -t enderase-backend:latest .
if errorlevel 1 (
    echo ERROR: Backend build failed!
    cd ..
    pause
    exit /b 1
)
cd ..
echo Backend build successful!
echo.

REM Login to ECR
echo [4/6] Logging in to AWS ECR...
aws ecr get-login-password --region %AWS_REGION% | docker login --username AWS --password-stdin %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com >nul 2>&1
if errorlevel 1 (
    echo ERROR: ECR login failed!
    pause
    exit /b 1
)
echo ECR login successful!
echo.

REM Tag and Push Frontend
echo [5/6] Tagging and pushing Frontend to ECR...
docker tag enderase-frontend:latest %ECR_FRONTEND%:latest
docker push %ECR_FRONTEND%:latest
if errorlevel 1 (
    echo ERROR: Frontend push failed!
    pause
    exit /b 1
)
echo Frontend pushed successfully!
echo.

REM Tag and Push Backend
echo [6/6] Tagging and pushing Backend to ECR...
docker tag enderase-backend:latest %ECR_BACKEND%:latest
docker push %ECR_BACKEND%:latest
if errorlevel 1 (
    echo ERROR: Backend push failed!
    pause
    exit /b 1
)
echo Backend pushed successfully!
echo.

echo ========================================
echo SUCCESS! All images built and pushed to ECR
echo ========================================
echo.
echo Frontend Image: %ECR_FRONTEND%:latest
echo Backend Image:  %ECR_BACKEND%:latest
echo.
echo Next steps:
echo 1. Go to AWS Console - App Runner
echo 2. Deploy new version of your services
echo 3. Or create new services using these images
echo.
pause
