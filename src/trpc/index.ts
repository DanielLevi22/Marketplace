import { router ,publicProcedure} from "./trpc";

export const appRouter = router({
  anyAPiRoute: publicProcedure.query(() => {
    return "Hello world!";
  })
});


export type AppRouter = typeof appRouter;