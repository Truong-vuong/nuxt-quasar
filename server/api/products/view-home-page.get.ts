export default defineEventHandler(async (event: any) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  const url = `https://fakestoreapi.com/products`;
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
