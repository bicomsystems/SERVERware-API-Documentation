window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "openapi.yml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    filter: true,
    supportedSubmitMethods: [],
    presets: [
      SwaggerUIBundle.presets.apis
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ]
  });

  //</editor-fold>
};
