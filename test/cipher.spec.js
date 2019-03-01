describe("cipher",()=>{
    it("cipher deberia ser un objeto",()=>{
      assert.equal(typeof cipher,"object")
    });
    describe("cipher.suma",()=>{
      it("cipher.suma debería ser una funcion",()=>{
        assert.equal(typeof cipher.suma,"function")
      })
      it("cipher debe sumar dos numbers para ello cuando a=3 y b = 5 deberia retornar 8",()=>{
        assert.equal(cipher.suma(3,5), 8);
        
      
      })
      it("SOMOS LAS MEJORES",()=>{})    
    })
  
    describe("cipher.producto",()=>{
      it("cipher.producto debería ser una funcion",()=>{
        assert.equal(typeof cipher.producto,"function")
      })
      it("cipher debe multiplicar dos numbers para ello cuando a=3 y b = 5 deberia retornar 15",()=>{
        assert.equal(cipher.producto(3,5), 15);
        
      
      })
      it("SOMOS LAS MEJORES",()=>{})    
    })
});