describe('Optional', function(){
    it('should support null and undefined', function(){
        function sayHello(name?: string | null){
            if(name){
                console.info(`Hello ${name}`)
            }else{
                console.info('Hello')
            }
        }

        sayHello("Andika");
        const name  : string|undefined = undefined
        sayHello(name)
        sayHello(null)
    })
})