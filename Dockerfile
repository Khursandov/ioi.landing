FROM node:20.11-alpine as builder

WORKDIR /usr/src/nuxt-starter

# Copy package files, .env.example, and .env in a single command
COPY package*.json .env.example ./

# Copy .env.example to .env if .env doesn't exist
RUN test -f .env || cp .env.example .env

# Install dependencies
RUN yarn

# Copy all the project files and build the project
COPY . .

RUN yarn build

# Use a smaller base image for the final stage
FROM node:20.11-alpine

WORKDIR /usr/src/nuxt-starter

# Copy built files from the builder stage
COPY --from=builder /usr/src/nuxt-starter .

# Expose the new port
EXPOSE 4000

# Run the application
ENTRYPOINT ["node", ".output/server/index.mjs"]
