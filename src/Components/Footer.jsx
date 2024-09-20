function Footer() {
  const hour = new Date().getHours();
  const openHour = 18;
  const closeHour = 23;
  if (hour >= openHour && hour <= closeHour) alert("We,re open");
  else alert("Sorry we're closed");
  return (
    <footer className="footer mt-5 text-center">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
}
export default Footer;
