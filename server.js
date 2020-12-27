const jsonServer = require("json-server");

const server = jsonServer.create();

server.listen("3001", () => {
  console.log("The AuthenticationService is running in port 3001");
});

server.post("/login", (request, response) => {
  console.log("reached the login endpoint: ");
  response.status(200).json({
    authToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHRsIjoxNDIzMTc0NTI3M30.db88NpP3bhvZ1XutizoN81gTtT20TTTD5ldJXx28wHI",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U",
  });
});

server.post("/refresh", (request, response) => {
  console.log("reached the refresh endpoint: ");
  response.status(200).json({
    authToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHRsIjoxNDIzMTc0NTI3M30.db88NpP3bhvZ1XutizoN81gTtT20TTTD5ldJXx28wHI",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U",
  });
});
