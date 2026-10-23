const taches = [
  { id: 1, titre: "Apprendre Node.js", faite: true },
  { id: 2, titre: "Écrire ma première todo", faite: false },
  { id: 3, titre: "Boire un café", faite: false },
];

function afficher(liste) {
  console.log("Ma todo-list :");
  const aFaire = liste.filter((t) => !t.faite);
  const faites = liste.filter((t) => t.faite);
  for (const t of [...aFaire, ...faites]) {
    console.log(`  [${t.faite ? "x" : " "}] ${t.id}. ${t.titre}`);
  }
  const restantes = aFaire.length;
  console.log(`Tâches restantes : ${restantes}`);
}

function supprimer(liste, id) {
  const index = liste.findIndex((t) => t.id === id);
  if (index !== -1) {
    liste.splice(index, 1);
  }
}

module.exports = { taches, afficher, supprimer };

if (require.main === module) {
  afficher(taches);
}
