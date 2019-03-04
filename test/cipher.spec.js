describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',()=>{
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz",33),"hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar "b c" para "a b" con un offset de 1, esto probara el espacio',()=>{
      assert.equal(cipher.encode("a b",1),"b c"); 
    });
    it('debería retornar "b\nc" cuando se teclea "a\nb" con un offset de 1, esto probara el espacio',()=>{
      assert.equal(cipher.encode("a\nb",1),"b\nc"); 
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ"); 
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',()=>{
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg",33),"abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "z a" para "a b" con un offset de 1, esto probara el espacio',()=>{
      assert.equal(cipher.decode("a b",1),"z a"); 
    });
    it('debería retornar "z\na" cuando se teclea "a\nb" con un offset de 1, esto probara el espacio',()=>{
      assert.equal(cipher.decode("a\nb",1),"z\na"); 
    });
  });

});
