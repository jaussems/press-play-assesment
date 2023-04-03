import styles from "../styles/Footer.module.scss";
import Image from "next/image";
const Footer: React.FC<any> = (props: any) => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo_and_text}>
        <Image
          src={require("../assets/images/Group 15163.svg")}
          alt={"Logo hoge school"}
          className={styles.logo}
        />

        <p className={styles.logo_and_mobile_text}>
          P.A. Hogeschool Rotterdam Onderwijs en Ontwikkeling
          Samenwerkingsverband
          <br />
          ‘Samen werken aan een betere aansluiting vo-ho’
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.paragraph}>
          <p className={styles.logo_and_desktop_text}>
            P.A. Hogeschool Rotterdam Onderwijs en Ontwikkeling
            Samenwerkingsverband
            <br />
            ‘Samen werken aan een betere aansluiting vo-ho’
          </p>
          <div className={styles.email}>
            <Image
              src={require("../assets/images/Group 15163.svg")}
              alt={"Logo hoge school"}
              className={styles.small_logo}
            />

            <div className={styles.email_text}>
              <b>Voor vragen mail naar:</b> <p>Samenwerkingvo-hbo@hr.nl</p>
            </div>
          </div>
        </div>
        <div className={styles.references}>
          <h3>Ga snel naar </h3>
          <ul>
            <li> Samenwerking </li>
            <li> WERKplaats </li>
            <li> Nieuws en agenda </li>
            <li> Materialen </li>
            <li> LOB </li>
            <li> HO - vaardigheden </li>
            <li> Vakinhoudelijke aansluiting </li>
            <li> Doorstroom in cijfers</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Over ons </h3>
          <ul>
            <li>Contact</li>
            <li>De werkgroep</li>
            <li>Samen werken</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
