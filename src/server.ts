import express from "express";

import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";

import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";
const app = express();
const PORT = Number(process.env.PORT) || 3000;

import "dotenv";
import { inferAsyncReturnType } from "@trpc/server";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  return {
    req,
    res,
  };
};

export type ExpressContext = inferAsyncReturnType<typeof createContext>;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL: ${cms.getAdminURL()}`);
      },
    },
  });

  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  // if (process.env.NEXT_BUILD) {
  //   app.listen(PORT, async () => {
  //     payload.logger.info(
  //       'Next.js is building for production'
  //     )

  //     // @ts-expect-error
  //     await nextBuild(path.join(__dirname, '../'))

  //     process.exit()
  //   })

  //   return
  // }
  app.use((req, res) => nextHandler(req, res));
  nextApp.prepare().then(() => {
    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

start();
