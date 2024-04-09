FROM node:lts-bookworm

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --prod

COPY . ./

RUN yarn build

CMD ["yarn", "dev"]