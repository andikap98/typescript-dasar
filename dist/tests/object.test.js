"use strict";
describe('Object', function () {
    it('should support in typescript', function () {
        const person = {
            id: "1",
            name: "Andika"
        };
        console.info(person);
        person.id = "2";
        person.name = "Putra";
        console.info(person);
    });
});
