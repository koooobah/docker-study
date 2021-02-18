const { promisify } = require("util");
const http = require("http");
const redis = require("redis");

const client = redis.createClient({ host: "redis" });

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const server = http.createServer(async (req, res) => {
  const count = await getAsync("count");

  const updateCount = parseInt(count ?? 0) + 1;
  await setAsync("count", updateCount);

  res.end(`current_count : ${updateCount}`);
});

server.listen(8080);
