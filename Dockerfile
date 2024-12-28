# syntax = docker/dockerfile:1

FROM oven/bun:1 AS base

LABEL fly_launch_runtime="NodeJS"
WORKDIR /app

FROM base AS install

RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install

FROM base AS prerelease

COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run build

FROM base AS release

COPY --from=prerelease /app/dist dist
USER bun
EXPOSE 8080/tcp
ENTRYPOINT [ "bunx", "serve", "-s", "dist", "-l", "8080"]