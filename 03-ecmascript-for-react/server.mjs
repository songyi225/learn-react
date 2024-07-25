//const liveServer = require("live-server");
import liveServer from "live-server";

const params = {
  port: 3000,
  host: "localhost",
  root: ".",
  open: false,
  mount: [["/", "./pubilc"]],
};

liveServer.start(params);
