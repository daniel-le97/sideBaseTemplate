const { $client } = useNuxtApp()
export const useTrpc = () => {
  return $client
}
