# --- Stage 1: Build the React app ---
FROM node:18-alpine AS build-stage

# Set the directory inside the container
WORKDIR /app

# Copy package files first to cache dependencies (makes builds faster)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's code
COPY . .

# Build the project (This creates the 'dist' folder)
RUN npm run build

# --- Stage 2: Serve the app with Nginx ---
FROM nginx:stable-alpine AS production-stage

# Copy the build output from Stage 1 to Nginx's public folder
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]