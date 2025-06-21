const { encode } = require("digipin"); // original repository

module.exports = (req, res) => {
  const { latitude, longitude } = req.query;
  if (!latitude || !longitude) {
    return res.status(400).json({ error: "Missing latitude or longitude" });
  }

  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);
  const digipin = encode({ lat, lon }); // official function
  res.status(200).json({ digipin });
};
