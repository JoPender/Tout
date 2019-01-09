/*
 * Module 1 : Cocuche d'accès aux données
 */
QUnit.module("Test de la couche d'accès au stockage de données.");

// 1. Ecriture des données dans le localStorage
QUnit.test("Ecrire dans le localStorage : saveData", function( assert ) {
  // Utilisation de 'saveData' avec les valeurs par défaut
  saveData();
  assert.deepEqual(
    localStorage.getItem(STORAGE),
    '[]',
    'loadData() avec les valeurs par défaut --> []'
  );
  // Utilisation de 'saveData' avec les valeurs par défaut
  localStorage.removeItem(STORAGE);
  saveData();
  assert.deepEqual(
    localStorage.getItem(STORAGE),
    '[]',
    'La clef est inexistante dans le LS --> création'
  );
  // Utilisation de 'saveData' avec une clef explicite et une valeur par défaut
  saveData(STORAGE);
  assert.deepEqual(
    localStorage.getItem(STORAGE),
    '[]',
    'Seule la valeur est passée par défaut --> []'
  );
  // Utilisation de saveData avec une clef explicite et un tableau vide comme valeur
  saveData(STORAGE, []);
  assert.deepEqual(
    localStorage.getItem(STORAGE),
    '[]',
    'STORAGE explicite et data = []'
  );
  // Utilisation de 'saveData' avec un des données complexes
  saveData(STORAGE, [{title: "1", prenom: "Marie", nom: "Curie", phone: "0123456789"}]);
  assert.deepEqual(
    localStorage.getItem(STORAGE),
    '[{"title":"1","prenom":"Marie","nom":"Curie","phone":"0123456789"}]',
    "Un carnet contenant des données structurées"
  );
  // Utilisation de 'saveData' avec une valeur quelconque
  saveData(STORAGE, 'Une chaîne quelconque');
  assert.deepEqual(
    loadData(),
    'Une chaîne quelconque',
    "Un chaîne de caractères quelconque est stockée telle quelle"
  );
});

// 2. Lecture du localStorage
QUnit.test("Lire le localStorage : loadData", function( assert ) {
  // Utilisation de 'loadData' sur un carnet inexistant
  localStorage.removeItem(STORAGE);
  assert.equal(
    loadData(),
    null,
    'Un carnet inexistant rend "null"'
  );
  // Utilisation de 'loadData' pour lire un crnet vide
  localStorage.setItem(STORAGE, '[]');
  assert.deepEqual(
    loadData(),
    [],
    "Le carnet est vide, on obtient un tableau vide"
  );
  // Utilisation de 'loadData' pour lire un carnet contenant des données structurées
  localStorage.setItem(STORAGE, '[{"title": "1", "prenom": "Marie", "nom": "Curie", "phone": "0123456789"}]');
  assert.deepEqual(
    loadData(),
    [{title: "1", prenom: "Marie", nom: "Curie", phone: "0123456789"}],
    "Le carnet contient des données au format JSON"
  );
  // Utilisation de 'loadData' pour lire un carnet contenant des données quelconques
  localStorage.setItem(STORAGE, 'Une chaîne quelconque');
  assert.throws(
    function () { try { loadData(); } catch (error) {throw error; }},
    new SyntaxError('JSON.parse: unexpected character at line 1 column 1 of the JSON data'),
    "ERREUR : Le carnet contient des données quelconques (non JSON)"
  );
});
