import { d as defineEventHandler, g as getRouterParams, a as getQuery, s as sendRedirect } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

const _page_ = defineEventHandler(async (event) => {
  const { oauth, page } = getRouterParams(event);
  getQuery(event);
  return sendRedirect(event, atob(page.replace(/_/g, "/")));
});

export { _page_ as default };
//# sourceMappingURL=_page_.mjs.map
