// src/utils/spotifyToken.ts

let cachedToken: string | null = null;
let tokenExpiresAt = 0;

export async function getSpotifyAccessToken() {
  const now = Date.now();

  // Check if token is still valid
  if (cachedToken && now < tokenExpiresAt) {
    return cachedToken;
  }

  // Get new token
  var clientId = import.meta.env.SPOTIFY_CLIENT_ID;
  var clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
  const credentials = btoa(`${clientId}:${clientSecret}`);

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();
  cachedToken = data.access_token;
  tokenExpiresAt = now + data.expires_in * 1000; // Convert to ms

  return cachedToken;
}
