
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

    return env.ASSETS.fetch(request);
  },
};
