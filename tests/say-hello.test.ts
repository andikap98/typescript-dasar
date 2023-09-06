import { sayHello } from "../src/say-hello";

describe('sayHello', function (){
    it('should return hello andika', function(){
        expect(sayHello('andika')).toBe('Hello andika')
    })
});