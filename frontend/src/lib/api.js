import Constants from "expo-constants";

const extra = (Constants.expoConfig && Constants.expoConfig.extra) || {};

export const API_BASE_URL = extra.apiBaseUrl || "http://127.0.0.1:5001/YOUR_FIREBASE_PROJECT_ID/us-central1/api";

export async function apiGet(path) {
  const res = await fetch(`${API_BASE_URL}${path}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
