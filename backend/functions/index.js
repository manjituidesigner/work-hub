const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const dotenv = require("dotenv");

dotenv.config();

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json({ limit: "2mb" }));

// Cloudinary config via Firebase Functions config (recommended) or process.env
// Preferred: firebase functions:config:set cloudinary.cloud_name="..." cloudinary.api_key="..." cloudinary.api_secret="..."
const cloudName = process.env.CLOUDINARY_CLOUD_NAME || (functions.config().cloudinary && functions.config().cloudinary.cloud_name);
const apiKey = process.env.CLOUDINARY_API_KEY || (functions.config().cloudinary && functions.config().cloudinary.api_key);
const apiSecret = process.env.CLOUDINARY_API_SECRET || (functions.config().cloudinary && functions.config().cloudinary.api_secret);

if (cloudName && apiKey && apiSecret) {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true
  });
}

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "workboard-api" });
});

const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!cloudName || !apiKey || !apiSecret) {
      return res.status(500).json({
        ok: false,
        error: "Cloudinary is not configured. Set functions config or env vars."
      });
    }

    if (!req.file) {
      return res.status(400).json({ ok: false, error: "Missing file field 'file'" });
    }

    const folder = (req.body && req.body.folder) || "workboard";

    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: "auto"
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.end(req.file.buffer);
    });

    res.json({
      ok: true,
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message || "Upload failed" });
  }
});

exports.api = functions.https.onRequest(app);
