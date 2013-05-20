Package.describe({
  summary: "tQuery with Physijs"
});

Package.on_use(function (api) {
  api.add_files([
    'lib/tqueryphys.min.js'
  ], 'client'
  );
});
