/* eslint-disable */
import { AnyRootConfig } from "@trpc/server";
import { PrismaClient } from "@prisma/client";
import { createRouterFactory } from "@trpc/server/dist/core/router";
import { createBuilder } from "@trpc/server/dist/core/internals/procedureBuilder";
import createExampleRouter from "./Example.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = ReturnType<
    typeof createRouterFactory<Config>
>;

export type ProcBuilder<Config extends BaseConfig> = ReturnType<
    typeof createBuilder<Config>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        example: createExampleRouter<Config>(router, procedure),
    }
    );
}
