FROM node:22-alpine
WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma.config.ts ./
RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 4000
# Generates Prisma client on boot, then starts the dev server
CMD ["sh", "-c", "npx prisma generate && npx nodemon --exec 'npx tsx' src/index.ts"]