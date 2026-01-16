# AWS RDS Setup Guide (MySQL)

This guide walks you through creating a **free** MySQL database on AWS using Amazon RDS (Relational Database Service).

## 💰 Cost Warning
AWS offers a **Free Tier** for 12 months for new accounts (750 hours/month of `db.t3.micro` or `db.t4g.micro`). 
*   **Always select the "Free tier" template** to avoid unexpected costs.
*   **Stop or Delete** the database if you are done with the project to be safe.

---

## 🛠️ Step-by-Step Setup

### Step 1: Go to RDS Console
1.  Log in to your AWS Console.
2.  Search for **RDS** in the top search bar and click it.
3.  Click the orange **Create database** button.

### Step 2: Choose Creation Method
1.  **Choose a database creation method**: Select **Standard create**.
2.  **Engine options**: Select **MySQL**.
3.  **Edition**: Select **MySQL Community**.
4.  **Version**: Select the default (e.g., MySQL 8.0.x).

### Step 3: Select Template (IMPORTANT)
1.  **Templates**: Select **Free tier**. 
    *   *If this is disabled, you may not be eligible, but `db.t3.micro` is still cheap (~$15/mo).*

### Step 4: Settings
1.  **DB instance identifier**: `enderase-db` (or any unique name).
2.  **Master username**: `admin` (or your preferred username).
3.  **Master password**: Create a strong password (e.g., `my-password-123`). 
    *   **Write this down!** You cannot see it again.

### Step 5: Instance Configuration
1.  **DB instance class**: Keep the default (usually `db.t3.micro` for Free Tier).

### Step 6: Storage
1.  **Storage type**: General Purpose SSD (gp2 or gp3).
2.  **Allocated storage**: `20` GiB (Minimum allowed).
3.  **Storage autoscaling**: You can uncheck "Enable storage autoscaling" to prevent costs from growing if you accidentally fill the DB, but keeping it checked is arguably safer for production.

### Step 7: Connectivity (CRITICAL)
This determines if your backend (App Runner/Fargate) can reach the database.

1.  **Compute resource**: Select "Don't connect to an EC2 compute resource".
2.  **Virtual private cloud (VPC)**: Default VPC.
3.  **Public access**: 
    *   **Select "Yes"** if you want to connect from your local computer (e.g., MySQL Workbench) and App Runner easily.
    *   *Note: For strict security, you'd usually say "No" and put everything in the same VPC, but for this project/defense, "Yes" is much easier to manage.*
4.  **VPC security group**: Select **Create new**.
    *   Name: `enderase-db-sg`
5.  **Availability Zone**: No preference.

### Step 8: Database Authentication
1.  **Database authentication**: Password authentication.

### Step 9: Additional Configuration
1.  Click to expand **Additional configuration**.
2.  **Initial database name**: `enderase_db` 
    *   *Important: If you leave this blank, RDS won't create the schema, and you'll have to create it manually via SQL.*
3.  **Backup**: Uncheck "Enable automated backups" if this is just a test/demo to save slightly on storage/snapshots (optional).

### Step 10: Create
1.  Scroll to the bottom.
2.  Check the estimated monthly cost (should say "Free Tier" or minimal).
3.  Click **Create database**.

---

## ⏳ After Creation (Wait 5-10 mins)

The database status will show **"Creating"**. Wait until it says **"Available"**.

### 1. Get Your Endpoint (Host)
1.  Click on your database name (`enderase-db`).
2.  Under **Connectivity & security** tab, look for **Endpoint**.
3.  It will look like: `enderase-db.cx7abc123.us-east-1.rds.amazonaws.com`
4.  Copy this! This is your `DB_HOST`.

### 2. Update Your `.env`
Update your `server/.env` (locally) and AWS App Runner environment variables:

```properties
DB_HOST=enderase-db.cx7abc123.us-east-1.rds.amazonaws.com
DB_USER=admin
DB_PASSWORD=YourPassword
DB_NAME=enderase_db
PORT=4000
```

### 3. Allow Connections (Security Group)
Even if Public Access is "Yes", the firewall might block you.
1.  Click the **VPC security groups** link (e.g., `sg-012345...`) under the "Connectivity & security" tab.
2.  Click the **Inbound rules** tab.
3.  Click **Edit inbound rules**.
4.  **Add rule**:
    *   **Type**: MySQL/Aurora (Port 3306).
    *   **Source**: 
        *   Select **Anywhere-IPv4** (`0.0.0.0/0`) -> *Simplest for App Runner + Local access.*
        *   *Or* Select **My IP** -> *Only allows YOUR computer (good for testing).*
5.  Click **Save rules**.

---

## 🔍 Testing Connection

Run your backend locally with the new AWS DB credentials to test:

1. Update `server/.env` with the new RDS details.
2. Run `npm start` in the `server` folder.
3. If it says "Database connected!" (or similar), you are successful!
