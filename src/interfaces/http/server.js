require("dotenv").config();
const Hapi = require("@hapi/hapi");
const userRoutes = require("../../api/routes/userRoute");
const authRoutes = require("../../api/routes/authRoute");
const testRoute = require("../../api/routes/testRoute");
const articleRoute = require("../../api/routes/articleRoute");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080,
    host: "127.0.0.1",
  });

  server.route(authRoutes);
  server.route(userRoutes);
  server.route(testRoute);
  server.route(articleRoute);

  await server.start();
  console.info("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
