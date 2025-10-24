import express from "express";
const router = express.Router();


router.get("/reverse", async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Latitude and longitude are required" });
  }

  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "LocalJobs/1.0 (mailto:ajithpunnath2000@gmail.com)",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch from Nominatim" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching location:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
