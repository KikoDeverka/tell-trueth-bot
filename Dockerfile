FROM node:20-alpine as builder
WORKDIR /usr/src/bot

# Copying package files and installing dependencies
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

# Copying the rest of the application
COPY . .    

# Building the application
RUN npm run build bot

# Stage 2: Setting up the production environment
FROM node:20-alpine
WORKDIR /usr/src/bot

# Copying necessary files from the builder stage
COPY --from=builder /usr/src/bot/dist ./dist
COPY --from=builder /usr/src/bot/node_modules ./node_modules
COPY --from=builder /usr/src/bot/package*.json ./

RUN mkdir -p /usr/src/bot/src/db

# Installing only production dependencies (if any additional ones are needed)
# This step might be redundant if all dependencies are already included in the node_modules copied from the builder
RUN npm install --production

# Exposing the port your app runs on
EXPOSE 3000

# Starting the application
CMD ["node", "dist/main"]