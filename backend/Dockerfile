FROM node:22-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000
# Generates Prisma client on boot, then starts the dev server
CMD ["sh", "-c", "npx nodemon --exec 'npx tsx' src/index.ts"]