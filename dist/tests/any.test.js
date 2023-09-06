"use strict";
describe('Any', function () {
    it("should support in typescript", function () {
        const person = {
            id: 1,
            name: "Andika",
            age: 25
        };
        person.age = 22;
        person.address = "indonesia";
        console.info(person);
    });
});
