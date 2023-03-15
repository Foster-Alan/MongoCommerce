db.produtos.updateMany(
  { nome: "Big Mac" },
  { $unset: { curtidas: "Remove ai meu bom" } },
);

db.produtos.find(
  {},
  { nome: 1, curtidas: 1, _id: false },
);