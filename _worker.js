export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/ea4909ef-7ca6-4b46-bf2e-6c07896ef338-vm')) {
      url.hostname = 'tyuio999pyu0.eu-iiqsdfthygfv.dopraxrocks.net'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
