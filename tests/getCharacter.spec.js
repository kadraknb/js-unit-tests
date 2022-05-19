const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
 
    expect(getCharacter()).toBeUndefined();
    expect(getCharacter('Arya')).toEqual({"class": "Rogue", "name": "Arya Stark", "phrases": ["Not today", "A girl has no name."]});
    expect(getCharacter('Brienne')).toEqual({"class": "Knight", "name": "Brienne Tarth", "phrases": ["Im No Lady, Your Grace.", "I, Brienne Of Tarth, Sentence You To Die."]});
    expect(getCharacter('Melissandre')).toEqual({"class": "Necromancer", "name": "Melissandre", "phrases": ["Death By Fire Is The Purest Death.", "For The Night Is Dark And Full Of Terrors."]});
    expect(getCharacter('brienne')).toEqual({"class": "Knight", "name": "Brienne Tarth", "phrases": ["Im No Lady, Your Grace.", "I, Brienne Of Tarth, Sentence You To Die."]});
    expect(getCharacter('seila')).toBeUndefined();
  });
});
