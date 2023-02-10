import fs from "fs";

const filename = "/google65d516bf60654ae1.html";

export default async function googleVerificationAPI(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write(await fs.readFileSync(filename, "utf-8"));
  res.end();
}