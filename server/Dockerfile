# Backend Dockerfile for Enderase Solutions
# Node.js Express Application

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy application code
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Set environment to production
ENV NODE_ENV=production

# Health check (optional but recommended)
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4000/', (r) => {if(r.statusCode !== 200) throw new Error();})"

# Start the application
CMD ["node", "index.js"]
