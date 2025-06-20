const { encode } = require("ngeohash-utils");

module.exports = (req, res) => {
  const { latitude, longitude } = req.query;
  if (!latitude || !longitude) {
    return res.status(400).json({ error: "Missing latitude or longitude" });
  }

  const digipin = encode(parseFloat(latitude), parseFloat(longitude), 10);
  res.status(200).json({ digipin });
};
