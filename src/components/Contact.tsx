import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { usePortfolio } from "../context/LocaleContext";
import "./styles/Contact.css";

const Contact = () => {
  const { content } = usePortfolio();
  const { contact } = content;

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{contact.sectionTitle}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>{contact.emailLabel}</h4>
            <p>
              <a href={`mailto:${contact.email}`} data-cursor="disable">
                {contact.email}
              </a>
            </p>
            {contact.phone && (
              <>
                <h4>{contact.phoneLabel}</h4>
                <p>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} data-cursor="disable">
                    {contact.phone}
                  </a>
                </p>
              </>
            )}
          </div>
          <div className="contact-box">
            <h4>{contact.socialLabel}</h4>
            {contact.social.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                {item.label} <MdArrowOutward />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              {contact.footerLine1} <br /> by <span>{contact.footerName}</span>
            </h2>
            <p className="contact-credit">
              <a
                href={contact.footerCreditUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                {contact.footerCreditLabel} {contact.footerCreditName}
              </a>
            </p>
            <h5>
              <MdCopyright /> {contact.copyrightYear}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
