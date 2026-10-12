
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return env.ASSETS.fetch(
        new Request(new URL("/index.html", request.url))
      );
    }

    if (url.pathname === "/auth/discord") {
      return env.ASSETS.fetch(
        new Request(new URL("/dashboard.html", request.url))
      );
    }

        if (url.pathname === "auth/discord?error=access_denied&error_description=The+resource+owner+or+authorization+server+denied+the+request&iss=https%3A%2F%2Fdiscord.com") {
      return env.ASSETS.fetch(
        new Request(new URL("/boohoo.html", request.url))
      );
    }

    return env.ASSETS.fetch(request);
  },
};
