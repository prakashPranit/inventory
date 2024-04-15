import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";


export const farmerRouter = createTRPCRouter({
  createFarmer: protectedProcedure
    .input(z.object({ 
      name: z.string().min(1),
      address: z.string(),
      upi: z.string(),
      phone: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.farmer.create({
        data: {
          name: input.name,
          address:input.address,
          upi: input.upi,
          phone: input.phone,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getFarmer: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.farmer.findUnique({
        where: { id: input.id },
      });
    }),

  updateFarmer: protectedProcedure
    .input(z.object({ 
      id: z.number(),
      name: z.string().min(1),
      address: z.string(),
      upi: z.string(),
      phone: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.farmer.update({
        where: { id: input.id },
        data: {
          name: input.name,
          address: input.address,
          upi: input.upi,
          phone: input.phone,
        },
      });
    }),

  deleteFarmer: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.farmer.delete({
        where: { id: input.id },
      });
    }),

  getAllFarmers: protectedProcedure.input(z.object({
    duration: z.string(),
  })).query(async ({ ctx,input }) => {
   const time = input.duration ==="week"? Date.now() - 7 * 24 * 60 * 60 * 1000:input.duration==="month"? Date.now() - 30 * 24 * 60 * 60 * 1000:Date.now() - 365 * 24 * 60 * 60 * 1000
     
   const filter= { createdAt:{
      gte:new Date(time),
    }}

    return ctx.db.farmer.findMany({

    });
  }),
});