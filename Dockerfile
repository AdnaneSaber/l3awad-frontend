FROM node:22.15.1-slim

WORKDIR /app/storefront

COPY package.json yarn.lock ./

# Enable corepack and activate the correct yarn version
RUN npm install -g npm@latest && \
    npm install -g corepack && \
    corepack enable && \
    corepack prepare yarn@3.2.3 --activate

# Install dependencies without immutable flag for development
RUN yarn install

COPY . .

ENTRYPOINT ["yarn", "dev"]