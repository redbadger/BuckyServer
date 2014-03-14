{
  librato: {
    email:  process.env.LIBRATO_EMAIL,
    token:  process.env.LIBRATO_TOKEN,
    source: "haller-metrics"
  },
  hostedGraphiteAPIKey: process.env.HOSTEDGRAPHITE_APIKEY,
  backends: ["statsd-librato-backend", "statsd-hostedgraphite-backend"]
}
