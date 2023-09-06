describe('Array', function(){
    it('should same with javascript', function(){

        const name: string[] = ["andika", "permana", "putra"]
        const value: number[] = [1,2,3]
    });

    it('should support readonly array', function(){
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"]

        console.info(hobbies);

        // hobbies[0] = "Main Game"; **tidak bisa diubah seperti ini
    });

    it('should support tupple', function (){
        const person: readonly [string, string, number] = ["Andika", "Permana", 25];

        console.info(person)
    })
})