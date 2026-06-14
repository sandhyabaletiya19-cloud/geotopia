/* ═══════════════════════════════════════════════════════════
   VERCEL FUNCTION — Fetch news for a country
   File: /api/fetch-news.js
   Called by: cron-daily.js internally
   Can also be called directly: GET /api/fetch-news?country=India
   ═══════════════════════════════════════════════════════════ */

export default async function handler(req, res) {
  var countryName = req.query.country;

  if (!countryName) {
    return res.status(400).json({ error: 'Missing country parameter' });
  }

  try {
    var headlines = await fetchNews(countryName);
    return res.status(200).json({ headlines: headlines });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function fetchNews(countryName) {
  var apiKey = process.env.GNEWS_API_KEY;

  if (!apiKey) {
    throw new Error('GNEWS_API_KEY not set');
  }

  var url = 'https://gnews.io/api/v4/search?' + [
    'q='      + encodeURIComponent(countryName),
    'lang=en',
    'max=10',
    'sortby=publishedAt',
    'apikey=' + apiKey
  ].join('&');

  var res = await fetch(url, {
    headers: { 'User-Agent': 'DharaverseMapMystery/1.0' }
  });

  if (!res.ok) {
    var errBody = await res.text();
    throw new Error('GNews API error ' + res.status + ': ' + errBody);
  }

  var data = await res.json();

  if (!data.articles || data.articles.length === 0) {
    return [];
  }

  return data.articles.map(function (article) {
    return {
      title:       article.title       || '',
      description: article.description || '',
      url:         article.url         || '',
      publishedAt: article.publishedAt || ''
    };
  });
}
