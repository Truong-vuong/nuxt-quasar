export default defineEventHandler(async (event: any) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  console.log("query", query);
  const limit = parseInt(query?.pageSize);
  const skip = query?.page * parseInt(limit) - parseInt(limit);
  const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  const { headers } = event.node.req;
  const newHeaders = {
    "Content-Type": "application/json",
    authorization: headers.authorization,
    cookie: headers.cookie,
  };
  try {
    const res = await $fetch(url, {
      method: "GET",
      headers: newHeaders,
      query,
    });
    return res;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
});
