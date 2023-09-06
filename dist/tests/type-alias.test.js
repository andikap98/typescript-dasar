describe('Type Alias', function () {
    it('should support in typescript', function () {
        const category = {
            id: 1,
            name: "Handphone",
        };
        const product = {
            id: 1,
            name: "Iphone 14",
            price: 15000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
