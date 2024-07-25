// JavaScript를 사용해서 Node.js 런타임 환경에서 실행시킬 프로그램 작성
import liveServer from "live-server";

const params = {
  port: 3000,
  host: "localhost",
  open: false,
  mount: [["/", "./pubilc"]],
};

liveServer.start(params);
