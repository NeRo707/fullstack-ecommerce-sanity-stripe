import { createClient } from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'w2qondva',
  dataset: 'production',
  apiVersion: '2023-06-03',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,  
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
//45:00