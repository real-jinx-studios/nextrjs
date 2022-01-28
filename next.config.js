module.exports = {
  images: {
    domains: ["https://master.d2174uzsw3epqk.amplifyapp.com"],
  },
  /*   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config

        // Example using webpack option
        //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
        config.node = {
            fs: 'empty',
            net: 'empty',
            tls: 'empty'
        }
        return config
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config
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
