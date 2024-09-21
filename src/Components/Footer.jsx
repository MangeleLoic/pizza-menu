function Footer() {
  const hour = new Date().getHours();
  const openHour = 18;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  if (hour >= openHour && hour <= closeHour) alert("We,re open");
  else alert("Sorry we're closed");
  return (
    <footer className="footer mt-5 text-center">
      {isOpen ? (
        <div>
          <p>We're open until {closeHour} :00. Come and visit us </p>
        </div>
      ) : (
        <p>
          Sorry we're closed. Come and visit us between {openHour}:00 and{" "}
          {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
}
export default Footer;
