var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// worker/index.ts
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}
__name(json, "json");
function getUserId(request) {
  const userId = request.headers.get("x-user-id");
  if (!userId) return null;
  if (userId.length < 8 || userId.length > 128) return null;
  return userId;
}
__name(getUserId, "getUserId");
var index_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/card-status" && request.method === "GET") {
      const userId = getUserId(request);
      if (!userId) return json({ error: "Missing x-user-id header" }, 400);
      const deckType = url.searchParams.get("deckType");
      if (!deckType) return json({ error: "Missing deckType query param" }, 400);
      const result = await env.DB.prepare(
        "SELECT card_id, status FROM card_status WHERE user_id = ?1 AND deck_type = ?2"
      ).bind(userId, deckType).all();
      const statuses = {};
      for (const row of result.results ?? []) {
        statuses[row.card_id] = row.status;
      }
      return json({ statuses });
    }
    if (url.pathname === "/api/card-status" && request.method === "POST") {
      const userId = getUserId(request);
      if (!userId) return json({ error: "Missing x-user-id header" }, 400);
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: "Invalid JSON body" }, 400);
      }
      if (!body.cardId || !body.deckType || !body.status) {
        return json({ error: "cardId, deckType, status are required" }, 400);
      }
      if (body.status !== "learned" && body.status !== "not_learned") {
        return json({ error: "Invalid status value" }, 400);
      }
      await env.DB.prepare(
        `INSERT INTO card_status (user_id, deck_type, card_id, status, updated_at)
         VALUES (?1, ?2, ?3, ?4, CURRENT_TIMESTAMP)
         ON CONFLICT(user_id, deck_type, card_id)
         DO UPDATE SET status = excluded.status, updated_at = CURRENT_TIMESTAMP`
      ).bind(userId, body.deckType, body.cardId, body.status).run();
      return json({ ok: true });
    }
    if (url.pathname.startsWith("/api/")) {
      return json({ error: "Not found" }, 404);
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
