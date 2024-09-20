import Pizza from "./Pizzas";

function Menu() {
  return (
    <>
      <main className="text-center menu">
        <h2 className="mt-5">Our Menu</h2>
        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          photoName="pizzas/prosciutto.jpg"
          price={18}
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          photoName="pizzas/funghi.jpg"
          price={15}
        />
      </main>
    </>
  );
}
export default Menu;
