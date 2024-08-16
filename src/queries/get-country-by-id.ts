
import { TypedSupabaseClient } from '@/utils/types'

export function getCountryById(client: TypedSupabaseClient, countryId: number) {
  return client
    .from("clubs")
    .select(
      `
      id,
      name
    `
    )
    .eq('id', countryId)
    .throwOnError()
    .single()
}