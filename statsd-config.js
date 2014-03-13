{
  librato: {
    email:  process.env.LIBRATO_EMAIL,
    token:  process.env.LIBRATO_TOKEN,
    source: "haller-metrics"
  },
  backends: ["statsd-librato-backend"]
}
