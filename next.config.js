module.exports = {
  images: {
    domains: ["https://master.d2174uzsw3epqk.amplifyapp.com"],
  },
  /*some IE bullshit optimization*/
  /*webpack: function (config) {
    const originalEntry = config.entry;

    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./src/polyfills.js")
      ) {
        entries["main.js"].unshift("./src/polyfills.js");
      }
      return entries;
    };

    return config;
  },*/
  async redirects() {
    return [
      {
        source: "/prog_ver.php",
        destination: "/api/prog_ver.php",
        permanent: true,
      },
      {
        source: "/Webhelp/EZTitles",
        destination: "/Webhelp/EZTitles/index.html",
        permanent: true,
      },
      {
        source: "/Webhelp/EZConvert",
        destination: "/Webhelp/EZConvert/index.html",
        permanent: true,
      },
      {
        source: "/Webhelp/3DTitles",
        destination: "/Webhelp/3DTitles/index.html",
        permanent: true,
      },
      {
        source: "/Webhelp/EZTitles Plug-in for Adobe Premiere Pro",
        destination:
          "/Webhelp/EZTitles Plug-in for Adobe Premiere Pro/index.html",
        permanent: true,
      },
      {
        source: "/Webhelp/EZTitles Plug-in for Avid",
        destination: "/Webhelp/EZTitles Plug-in for Avid/index.html",
        permanent: true,
      },
      {
        source: "/Webhelp/EZTitles Plug-in for Cambria File Convert",
        destination:
          "/Webhelp/EZTitles Plug-in for Cambria File Convert/index.html",
        permanent: true,
      },
      {
        source: "/Webhelp/EZTitles Plug-in for ProMedia Carbon",
        destination: "/Webhelp/EZTitles Plug-in for ProMedia Carbon/index.html",
        permanent: true,
      },
    ];
  },
};
