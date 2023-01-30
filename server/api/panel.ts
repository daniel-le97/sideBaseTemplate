import { renderTrpcPanel } from 'trpc-panel'
import { appRouter } from '../trpc/trpc'

export default defineEventHandler((_event) => {
  return renderTrpcPanel(appRouter, {
    url: 'http://localhost:3000/api/trpc',
    transformer: 'superjson'
  })
})
