"use strict";
describe('Array', function () {
    it('should same with javascript', function () {
        const name = ["andika", "permana", "putra"];
        const value = [1, 2, 3];
    });
    it('should support readonly array', function () {
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        // hobbies[0] = "Main Game"; **tidak bisa diubah seperti ini
    });
    it('should support tupple', function () {
        const person = ["Andika", "Permana", 25];
        console.info(person);
    });
});
