export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: "next-api",
    time: new Date().toISOString(),
  });
}
