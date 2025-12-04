import fs from "node:fs";
import path from "node:path";

const credentialsDir = path.join(process.cwd(), "credentials");
const credentialsFile = path.join(credentialsDir, "service-account.json");

console.log("🔄 Checking Google Credentials...");

if (process.env.GOOGLE_CREDENTIALS) {
  try {
    if (!fs.existsSync(credentialsDir)) {
      fs.mkdirSync(credentialsDir, { recursive: true });
    }

    const content = process.env.GOOGLE_CREDENTIALS;
    fs.writeFileSync(credentialsFile, content);

    console.log("✅ Google service-account.json generated successfully.");
  } catch (error) {
    console.error("❌ Error generating credentials:", error);
    process.exit(1);
  }
} else {
  console.log("ℹ️  No GOOGLE_CREDENTIALS variable found. Skipping generation.");
}
