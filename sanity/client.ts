import {createClient} from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
// Hard-code the API version (today's UTC date) and bump it deliberately.
export const apiVersion = '2026-08-24'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Fast, cached published-content reads
})
