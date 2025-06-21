const digipin = require("digipin");

export default function handler(req, res) {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: "Missing latitude or longitude" });
  }

  try {
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
    const code = digipin.encode({ lat, lon });

    res.status(200).json({ digipin: code });
  } catch (error) {
    console.error("Error generating DIGIPIN:", error);
    res.status(500).json({ error: "Failed to generate DIGIPIN" });
  }
}
