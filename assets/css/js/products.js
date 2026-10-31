const categorias = [
    "Ramen",
    "Snacks",
    "Bebidas",
    "Dulces",
    "Cafés"
];

const productos = [

    // ===== RAMEN =====
    {
        nombre: "Buldak Hot Chicken Flavor Ramen - Carbonara ",
        categoria: "Ramen",
        precio: 3.50,
        descripcion: "Samyang Buldak Carbonara es un ramen instantáneo surcoreano que combina el icónico toque picante del pollo Buldak con una suave y cremosa salsa a base de queso y leche. Es una opción perfecta para quienes buscan un sabor especiado, cremoso y delicioso con un nivel de picante equilibrado..",
        marca: "Samyang",
        imagen: "assets/producos comida/Ramen.jpg.jpeg"
    },
    {
        nombre: "Buldak Hot Chicken Flavour Ramen - Cheese Flavour",
        categoria: "Ramen",
        precio: 3.50,
        descripcion: "Esta variante de la popular línea Buldak de la marca surcoreana Samyang combina la intensa salsa de pollo picante con un cremoso sazonador a base de queso. El toque lácteo ayuda a suavizar y equilibrar el picante intenso característico del ramen Buldak, ofreciendo una experiencia deliciosa, reconfortante y especiada con un intenso sabor a queso. ",
        marca: "Samyang",
        imagen: "assets/producos comida/Ramen de queso.jpg.jpeg"
    },
    {
        nombre: "Buldak Hot Chicken Flavor Ramen",
        categoria: "Ramen",
        precio: 3.50,
        descripcion:"Es el ramen clásico y legendario que dio origen al fenómeno global del Fire Noodle Challenge. Destaca por sus fideos masticables y una salsa negra extremamente picante a base de chile y sabor concentrado a pollo. Incluye un sachet decorativo de ajonjolí y hojuelas de alga marina (gim) para espolvorear al final. Es una opción para los amantes del verdadero picante intenso ",
        marca: "Samyang",
        imagen: "assets/producos comida/whatsApp Image 2026-10-29 at 10.47.29 PM (1).jpeg"
    },


    // ===== SNACKS =====
    {
        nombre: "Haitai Calbee Pizza Potato Chips",
        categoria: "Snacks",
        precio: 2.00,
        descripcion: "Son unas crujientes papas fritas onduladas (potato chips) con sabor a pizza al estilo italiano. Destacan por combinar el sazón de la salsa de tomate, especias de pizza y una rica mezcla de quesos (Cheddar y Emmental). Además, tienen pequeños trocitos de queso derretido horneados directamente sobre la superficie de las papas, brindando una textura crujiente y un sabor salado, cremoso e intenso.",
        marca: "Haitai",
        imagen: "assets/producos comida/ship.jpg.jpeg"
    },

    // ===== BEBIDAS =====
     {
        nombre: "Shirakiku Ramune Blueberry Flavor (Arándano)",
        categoria: "Bebidas",
        precio: 2.00,
        descripcion: "El Ramune es la bebida gaseosa tradicional más icónica de Japón. Esta versión cuenta con un delicioso y refrescante sabor a arándanos azul (blueberry). Viene en la clásica botella de vidrio con cuello de canica (Codd-neck), la cual se abre presionando un destapador plástico para dejar caer la canica dentro del envase, creando una experiencia divertida y distintiva al beberla.",
        marca: "Shirakiku",
        imagen: "assets/producos comida/arandano.jpg.jpeg"
    },
{
        nombre: "Shirakiku / Hata Ramune Strawberry Flavor (Fresa)",
        categoria: "Bebidas",
        precio: 2.00,
        descripcion: "Esta variante de Ramune ofrece un vibrante y frutal sabor a fresa (Ichigo). Al igual que todas las sodas tradicionales Ramune, viene en la emblemática botella de vidrio con la canica atrapada en el cuello, combinando un sabor dulce y afrutado con una suave efervescencia ideal para refrescarse",
        marca: "Shirakiku",
        imagen: "assets/producos comida/fresa.jpg.jpeg"
    },

    // ===== DULCES =====
    {
        nombre: "Choco Bungeoppang Samanco Crunch",
        categoria: "Dulces",
        precio: 2.00,
        descripcion: "Este famoso helado coreano está inspirado en el Bungeoppang (pastel tradicional con forma de pez). Cuenta con una crujiente capa exterior de oblea ligera de waffle con forma de carpa. Por dentro está relleno de helado suave combinado con un espeso sirope de chocolate y trocitos crujientes (crunch), ofreciendo una combinación perfecta de texturas entre lo crujiente de la oblea y la cremosidad del helado.",
        marca: "Binggrae",
        imagen: "assets/producos comida/pe.jpg.jpeg"
    },
    {
        nombre: "Pocky Strawberry Cream",
        categoria: "Dulces",
        precio: 2.00,
        descripcion:"Los Pocky son uno de los snacks más populares y conocidos de Japón. Consisten en crujientes palitos de galleta horneada cubiertos en casi su totalidad por una capa dulce y cremosa sabor a fresa. Dejan un extremo limpio de galleta para sostenerlos cómodamente sin ensuciarse los dedos, siendo ideales para acompañar un postre, café o simplemente para disfrutar en cualquier momento.",
        marca: "Glico",
        imagen: "assets/producos comida/poc.jpg.jpeg"
    },

    // ===== CAFÉS =====
    {
        nombre: "Café Americano / Café Espresso Largo",
        categoria: "Cafés",
        precio: 2.00,
        descripcion: "Se trata de una taza de café negro intenso pero balanceado, preparado a base de un shot de espresso al que se le añade agua caliente. La capa clara que se observa en la parte superior no es leche ni crema añadida, sino la crema natural del espresso (aceites y gases emulsionados durante la extracción a presión del café). Tiene una consistencia fluida y un sabor con cuerpo, suave y aromático.",
        marca:"K-for-U",
        imagen: "assets/producos comida/cae.jpg.jpeg"
    },
    {
        nombre: "Café Flat White / Café Latte (Espeso con Crema)",
        categoria: "Cafés",
        precio: 2.00,
        descripcion:"cuidadosamente vaporizada hasta lograr una textura sedosa, densa y cremosa. La leche se integra suavemente con el café creando un color dorado característico y una capa espesa de microespuma en la superficie con un sutil remolino o arte latte. Es una bebida más dulce, cremosa y de textura aterciopelada que equilibra la intensidad del café con la suavidad de la leche.",
        marca:"K-for-U",
        imagen: "assets/producos comida/cremosa.jpg.jpeg"
    },

];