export default defineEventHandler(async (event) => {
  const { oauth, page } = getRouterParams(event);

  const query = getQuery(event);

  return sendRedirect(event, atob(page.replace(/_/g, "/")));
});
