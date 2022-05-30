import { getPoster } from "../api.js";

export function MovieCard({ poster_path, title, vote_average, overview }) {
  return `
    <img src="${getPoster(poster_path)}" alt="${title}" />
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
    </div>
    `;
}

const STYLE_COLOR_GREEN = "green";
const STYLE_COLOR_ORANGE = "orange";
const STYLE_COLOR_RED = "red";

const RATE_POSITIVE = 8;
const RATE_NEUTRAL = 5;

function getClassByRate(vote) {
  if (vote >= RATE_POSITIVE) {
    return STYLE_COLOR_GREEN;
  }

  if (vote >= RATE_NEUTRAL) {
    return STYLE_COLOR_ORANGE;
  }

  return STYLE_COLOR_RED;
}
