use('LojaVirtual_DB');

db.Produtos.insertMany([
    {
        nome: "Mouse Sem Fio",
        categoria: "Periféricos",
        preco: 89.90,
        estoque: 25,
        tags: ["promocao", "acessorio"],
        especificacoes: {
            peso_kg: 0.15,
            garantia_meses: 12
        }
    },
    {
        nome: "Teclado Mecânico",
        categoria: "Periféricos",
        preco: 249.90,
        estoque: 15
    },
    {
        nome: "Monitor 24 Polegadas",
        categoria: "Monitores",
        preco: 799.90,
        estoque: 10
    },
    {
        nome: "Headset Gamer",
        categoria: "Audio",
        preco: 349.90,
        estoque: 20
    },
    {
        nome: "Notebook",
        categoria: "Computadores",
        preco: 3299.90,
        estoque: 5
    }
]);

db.Produtos.find();

db.Produtos.find({
    nome: "Mouse Sem Fio"
});

db.Produtos.find({
    preco: { $gt: 300 }
});
