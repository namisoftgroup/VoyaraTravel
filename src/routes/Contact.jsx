import { useTranslation } from "react-i18next";
import HeaderSection from "../ui/layout/HeaderSection";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <HeaderSection
        title={t("contact.title")}
        description={t("contact.description")}
      />

      <section className="contact_section">
        <div className="container">
          <ContactInfo />
          <ContactForm />
        </div>

        <div className="map_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.7445000459325!2d29.914125274166935!3d31.200096906253115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c326db28be57%3A0xa62c3637f85e12d6!2svoyager%20Travel!5e0!3m2!1sen!2seg!4v1763896725966!5m2!1sen!2seg"
            width="100%"
            height="350"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </>
  );
}
