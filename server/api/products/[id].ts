export default defineEventHandler(async (event: any) => {
  const id = event.context.params.id;
  console.log(id);
  const url = `https://fakestoreapi.com/products/${id}`;
  try {
    const res = await $fetch(url, {
      method: "GET",
    });
    return res;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
});
