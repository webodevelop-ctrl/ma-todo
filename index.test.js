const test = require("node:test");
const assert = require("node:assert");
const { supprimer } = require("./index.js");

function exemple() {
  return [
    { id: 1, titre: "A", faite: true },
    { id: 2, titre: "B", faite: false },
    { id: 3, titre: "C", faite: false },
  ];
}

test("supprimer retire la tâche dont l'id correspond", () => {
  const liste = exemple();
  supprimer(liste, 3);
  assert.deepStrictEqual(liste.map((t) => t.id), [1, 2]);
});

test("supprimer ne change rien si l'id est inconnu", () => {
  const liste = exemple();
  supprimer(liste, 42);
  assert.deepStrictEqual(liste, exemple());
});

test("supprimer conserve l'id et l'ordre des autres tâches", () => {
  const liste = exemple();
  supprimer(liste, 2);
  assert.deepStrictEqual(liste, [
    { id: 1, titre: "A", faite: true },
    { id: 3, titre: "C", faite: false },
  ]);
});
