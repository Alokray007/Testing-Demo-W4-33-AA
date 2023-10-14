const { expect } = require('chai');

const User = require("../class/user");

describe ('User class', function () {

    it('should create successfully', function () {

      let user = new User();

      expect(user).to.exist;

    });

    it('should set username on creation', function () {

        let user = new User("alok");

        expect(user.username).to.equal("alok");
    })

  });
