export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const login = await $fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body,
  });
  return login;
});
