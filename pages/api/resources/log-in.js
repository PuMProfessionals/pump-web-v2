export default async (req, res) => {
  const { name, password } = req.body;
  res.setHeader("Content-Type", "application/json");

  res.statusCode = 200;
  res.end(JSON.stringify({ loggedIn: true }));
};
