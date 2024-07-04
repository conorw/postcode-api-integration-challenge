import { searchPostcode } from "$lib/postcodes";
import type { PageServerLoad } from "./$types";

// SSR is enabled for this page. optional, defaults to true
export const ssr = true;

export const load: PageServerLoad = async ({ params }) => {
  const postcode = params.postcode;
  const postcodedata = await searchPostcode(postcode);
  return { postcodedata };
};
