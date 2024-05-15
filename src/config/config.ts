const SERVER_URL = process.env.SERVER_URL || "http://localhost:8000";
const LEFT_PANEL_SHOW = process.env.LEFT_PANEL_SHOW === "true";
const ANALYSIS_PANEL_SHOW = process.env.ANALYSIS_PANEL_SHOW === "true";
const TOOL_BAR_SHOW = process.env.TOOL_BAR_SHOW === "true";
const PROFILE_SHOW = process.env.PROFILE_SHOW === "true";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export default {
  SERVER_URL,
  LEFT_PANEL_SHOW,
  ANALYSIS_PANEL_SHOW,
  TOOL_BAR_SHOW,
  PROFILE_SHOW,
  GOOGLE_API_KEY,
};
