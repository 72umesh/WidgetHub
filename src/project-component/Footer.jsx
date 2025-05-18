import { socials, links } from "../constants/footerData";

function Footer() {
  // dynamic footer
  // const [isDarkBg, setIsDarkBg] = useState(false);

  // useEffect(() => {
  //   const bgColor = window.getComputedStyle(document.body).backgroundColor;
  //   const rgb = bgColor.match(/\d+/g)?.map(Number);

  //   if (rgb && rgb.length >= 3) {
  //     const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  //     setIsDarkBg(brightness < 128); // threshold: 128
  //   }
  // }, []);
  return (
    <footer className="footer">
      <div className="footer-container">
        <h4>My Other Projects</h4>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.href} target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-bottom">
        <div>
          {" "}
          <p>©{new Date().getFullYear()} WidgetHub. All Rights Reserved.</p>
        </div>
        <div className="Socials">
          {socials.map((social) => (
            <a key={social.id} href={social.url} target="_blank">
              <social.Logo />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
