FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "build"]