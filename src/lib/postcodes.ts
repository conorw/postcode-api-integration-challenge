// add method to use the postcode.io API to get the address from a postcode
// https://postcodes.io/docs
// interesting fields: postcode, country, region, admin_district, parish
export const searchPostcode = async (postcode: string): Promise<any> => {
  validatePostcode(postcode);

  const response = await fetch(
    `https://api.postcodes.io/postcodes/${postcode}`
  );
  const data = await response.json();
  return data.result;
};

export const validatePostcode = (postcode: string): void => {
  // cater for the case where the postcode is not valid, throw an error
  if (!postcode) {
    throw new Error("Postcode is required");
  }
  // allow upper and lower case letters, numbers and spaces e.g. bt546db is allowed
  if (!postcode.match(/^[A-Za-z]{1,2}[0-9][0-9A-Za-z]?\s?[0-9][A-Za-z]{2}$/)) {
    throw new Error("Invalid postcode");
  }
};
