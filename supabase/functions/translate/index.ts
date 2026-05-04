// Translate a batch of strings using Lovable AI Gateway
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const LANG_NAMES: Record<string, string> = {
  en: "English",
  hi: "Hindi",
  es: "Spanish",
  fr: "French",
  de: "German",
  ar: "Arabic",
  zh: "Simplified Chinese",
  ja: "Japanese",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { texts, target } = await req.json();
    if (!Array.isArray(texts) || !target || target === "en") {
      return new Response(JSON.stringify({ translations: texts ?? [] }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const targetName = LANG_NAMES[target] ?? target;
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) throw new Error("LOVABLE_API_KEY not configured");

    // JSON-array prompt — model must return same length array
    const prompt = `Translate each item of this JSON array from English to ${targetName}. Preserve placeholders, numbers, punctuation, emojis, and brand names (ChronoStaff, ChronoBot). Return ONLY a JSON array of strings, same length and order, no commentary.\n\nINPUT:\n${JSON.stringify(texts)}`;

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: "You are a professional translator. Output ONLY a valid JSON array of translated strings. No markdown, no explanation." },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("AI gateway error:", resp.status, errText);
      return new Response(JSON.stringify({ translations: texts, error: errText }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await resp.json();
    let content: string = data.choices?.[0]?.message?.content ?? "[]";
    // Strip markdown code fences if any
    content = content.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();

    let translations: string[] = [];
    try {
      translations = JSON.parse(content);
      if (!Array.isArray(translations) || translations.length !== texts.length) {
        throw new Error("Mismatched length");
      }
    } catch (e) {
      console.error("Parse error:", e, "content:", content);
      translations = texts;
    }

    return new Response(JSON.stringify({ translations }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("translate error:", e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
