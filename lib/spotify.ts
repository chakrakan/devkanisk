/* eslint-disable camelcase */
import * as fs from "fs";
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_CODE } = process.env;

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const AUTH_CACHE_FILE = "spotify-auth.json";

const encodeFormData = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

type FormData = {
  grant_type: string;
  code?: string;
  redirect_uri?: string;
  refresh_token?: string;
};

export async function getSpotifyToken() {
  // default env vars go in here (temp cache)
  const cache: { [key: string]: string } = {};
  let formData: FormData = {
    grant_type: "authorization_code",
    code: SPOTIFY_CODE,
    redirect_uri: "http://localhost:3000",
  };

  // try to read cache from disk if already exists
  try {
    const json = fs.readFileSync(AUTH_CACHE_FILE);
    const c = JSON.parse(json.toString());
    Object.keys(c).forEach((key) => {
      cache[key] = c[key];
    });
  } catch (error) {
    console.error(error);
  }

  if (cache.spotifyRefreshToken) {
    console.debug(`ref: ${cache.spotifyRefreshToken.substring(0, 6)}`);
    formData = {
      grant_type: "refresh_token",
      refresh_token: cache.spotifyRefreshToken,
    };
  }

  // get new tokens
  const data = await fetch(TOKEN_ENDPOINT, {
    method: "post",
    body: encodeFormData(formData),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + encode(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET),
    },
  })
    .then((data) => data.json())
    .catch((error) => console.debug(error));
  console.debug(data);
  cache.spotifyAccessToken = data.access_token;
  if (data.refresh_token) {
    cache.spotifyRefreshToken = data.refresh_token;
    console.debug(`ref: ${cache.spotifyRefreshToken.substring(0, 6)}`);
  }
  console.debug(`acc: ${cache.spotifyAccessToken.substring(0, 6)}`);

  // save to disk
  fs.writeFileSync(AUTH_CACHE_FILE, JSON.stringify(cache));

  return cache.spotifyAccessToken;
}

const encode = (str: string): string =>
  Buffer.from(str, "binary").toString("base64");

export const getNowPlaying = async () => {
  const access_token = await getSpotifyToken();
  console.log(access_token);

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
