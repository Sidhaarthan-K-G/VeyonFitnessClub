import "./index.css";
import { QRCodeCanvas } from "qrcode.react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
const WhatsApp = () => {
  const whatsapp = import.meta.env.VITE_WHATSAPP_LINK;
  const instagram = import.meta.env.VITE_INSTAGRAM_LINK;
  return (
    <div className="whatsapp">
      <div className="w-desc">
        <p className="w-p1">
          STAY&nbsp;&nbsp;&nbsp;&nbsp;IN&nbsp;&nbsp;&nbsp;&nbsp;THE&nbsp;&nbsp;&nbsp;&nbsp;LOOP&nbsp;&nbsp;&nbsp;&nbsp;
          ───
        </p>
        <h1 className="w-h1">
          STAY CONNECTED
          <br />
          WITH OUR
          <br />
          <span className="w-what">SOCIALS</span>
        </h1>
        <p className="w-p2">
          All event updates, route drops, last-minute changes, and
          <br /> run-day reminders go out on our WhatsApp group first.
          <br /> Scan the QR or tap the button to join.
        </p>
        <ul className="w-lists">
          <li className="w-list">Weekly run schedule every Friday evening</li>
          <li className="w-list">
            New route announcements and safety briefings
          </li>
          <li className="w-list">Race day reminders and meetup coordination</li>
          <li className="w-list">Post-run photos and community highlights</li>
        </ul>
      </div>
      <div className="w-scanner">
        <div className="w-w-scanner">
          <QRCodeCanvas value={whatsapp} size={180} className="w-qr" />
          <p className="w-p3">
            SCAN TO JOIN US ON <FaWhatsapp className="w-w" />
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-w-btn"
          >
            Join us on <FaWhatsapp className="w-w" />
          </a>
        </div>
        <div className="w-i-scanner">
          <QRCodeCanvas value={instagram} size={180} className="w-qr" />
          <p className="w-p3">
            SCAN TO FOLLOW US ON <FaInstagram className="w-i" />
          </p>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-i-btn"
          >
            Follow us on <FaInstagram className="w-i" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default WhatsApp;
