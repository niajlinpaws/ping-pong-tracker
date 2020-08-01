const supertest = require("supertest");
require('should');
// This agent refers to PORT where program is runninng.

const server = supertest.agent("http://localhost:5000");

// UNIT test begin
describe("Players API", () => {
    describe("GET /players",() => {
    
      it("should return players list",(done) => {
        server
        .get("/players")
        .expect("Content-type",/json/)
        .expect(200)
        .end((err,res) => {
          res.status.should.equal(200);
          
          res.body.data.should.be.instanceOf(Object)
          .and.have.property('players').which
          .is.an.instanceOf(Array);
          
          done();
        });
      })
    });
});