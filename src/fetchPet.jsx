const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  console.log("This is the queryKey array", queryKey);

  // React query always want you to throw an error (in case there's an error)
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  // return await apiRes.json() should be the same
  return apiRes.json();
};

export default fetchPet;
