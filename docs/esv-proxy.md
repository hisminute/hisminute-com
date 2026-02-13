# ESV API Proxy

Server-side proxy for the ESV Bible API. Intended for use with Custom GPT Actions. The ESV API key stays server-side; callers authenticate with a separate Bearer token.

## Environment Variables

| Variable       | Required | Description                                      |
|----------------|----------|--------------------------------------------------|
| `ESV_API_KEY`  | Yes      | Your ESV API Application Key (from api.esv.org)  |
| `HM_PROXY_KEY` | Yes      | Long random string used for Bearer auth by GPT Actions |

**Security:** Never expose these in client code, logs, or API responses.

## Endpoint

- **Route:** `POST /api/esv`
- **Auth:** `Authorization: Bearer <HM_PROXY_KEY>`
- **Content-Type:** `application/json`

## Request

```json
{
  "reference": "John 3:16",
  "options": {
    "includeVerseNumbers": true,
    "includeFirstVerseNumbers": true,
    "includeHeadings": false,
    "includeFootnotes": false,
    "includeShortCopyright": false,
    "includePassageReferences": false
  }
}
```

- `reference` (required): String, 1–120 chars. Passage reference (e.g. `John 3:16`, `Psalm 23`, `Romans 8:28-39`).
- `options` (optional): Object with boolean overrides for ESV rendering. Only the allowlisted keys above are accepted.

## Response (success)

```json
{
  "ok": true,
  "reference": "John 3:16",
  "canonical": "John 3:16",
  "text": "[16] For God so loved the world...",
  "raw": {
    "query": "John 3:16",
    "passageCount": 1
  }
}
```

## Error Responses

| Status | Body                          | Cause                          |
|--------|-------------------------------|--------------------------------|
| 401    | `{ "ok": false, "error": "Unauthorized" }` | Missing or invalid Bearer token |
| 400    | `{ "ok": false, "error": "..." }`          | Invalid reference or JSON body  |
| 429    | `{ "ok": false, "error": "Rate limited" }` | Too many requests (30/10 min)   |
| 502    | `{ "ok": false, "error": "Upstream error" }` | ESV API or network failure      |

## Example cURL

```bash
curl -s -X POST https://hisminute.com/api/esv \
  -H "Authorization: Bearer YOUR_HM_PROXY_KEY" \
  -H "Content-Type: application/json" \
  -d '{"reference":"John 3:16"}'
```

Local:

```bash
curl -s -X POST http://localhost:3000/api/esv \
  -H "Authorization: Bearer YOUR_HM_PROXY_KEY" \
  -H "Content-Type: application/json" \
  -d '{"reference":"John 3:16"}'
```

## GPT Actions

Configure your Custom GPT Action with:

- **URL:** `https://hisminute.com/api/esv`
- **Method:** POST
- **Auth:** Bearer token (use `HM_PROXY_KEY` as the secret)
- **Request body:** JSON with `reference` (and optional `options`)

The ESV API key is never sent to the client; it is used only on the server.
