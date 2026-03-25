import { useState } from "react";

export default function Tienda() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Papelillos", price: 1500 },
    { id: 2, name: "Filtros", price: 800 },
    { id: 3, name: "Grinder", price: 4500 },
    { id: 4, name: "Bandejas", price: 3000 },
    { id: 5, name: "Pipas", price: 3500 },
    { id: 7, name: "Vapers", price: 7000 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const comprarWhatsApp = () => {
    const mensaje = cart
      .map((item) => `- ${item.name} $${item.price}`)
      .join("%0A");

    const url = `https://wa.me/549XXXXXXXXXX?text=Hola, quiero comprar:%0A${mensaje}%0ATotal: $${total}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-50 p-6">
      {/* HEADER */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="/homero.png"
          alt="Logo tienda"
          className="w-44 h-44 object-contain mb-3 drop-shadow-xl"
        />
        <h1 className="text-4xl font-extrabold text-center">
          La Casa de Homero 420 🔥
        </h1>
        <p className="text-gray-600">Accesorios premium • Envíos a todo el país</p>
      </div>

      {/* PRODUCTOS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-lg font-bold">{p.name}</h2>
            <p className="text-green-700 font-semibold text-xl mt-1">
              ${p.price}
            </p>
            <button
              onClick={() => addToCart(p)}
              className="mt-3 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* CARRITO */}
      <div className="mt-10 bg-white p-5 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-3">🛒 Tu pedido</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Todavía no agregaste nada</p>
        ) : (
          <>
            {cart.map((item, i) => (
              <p key={i}>
                {item.name} - ${item.price}
              </p>
            ))}

            <p className="mt-3 font-bold text-lg">Total: ${total}</p>

            <button
              onClick={comprarWhatsApp}
              className="mt-4 w-full bg-black text-white py-3 rounded-xl text-lg"
            >
              Comprar por WhatsApp 📲
            </button>
          </>
        )}
      </div>
    </div>
  );
}
