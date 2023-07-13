import { Fragment } from "react";
import styles from "./footer.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Wave from "react-wavify";

export default function Footer() {
  function handleGitHub() {
    window.location.href = "https://github.com/Imrumi-1111";
  }
  function handleLinkedin() {
    window.location.href =
      "https://www.linkedin.com/in/upasana-chakraborty-34822a1b4/";
  }
  return (
    <Fragment>
      <div className={styles.Footer}>
        <div className={styles.footer_left}>
          
          <p>
            Follow me 
          </p>
          <div className={styles.icons}>
          <AiFillGithub onClick={handleGitHub} />
          <AiFillLinkedin onClick={handleLinkedin} />
          </div>
        </div>
        <div className={styles.footer_right}>
          <div className={styles.footer_right_p}>
            <h2>Contact Number</h2>
            <p>8240339842</p>
          </div>
          <div className={styles.footer_right_p}>
            <h2>Email-id</h2>
            <p>upasanachakraborty18@gmail.com</p>
          </div>
          <div className={styles.footer_right_p}>
            {/* <h2>Programs</h2>
            <p>Aerobics</p>
            <p>Boxing</p>
            <p>Pillate</p> */}
          </div>
        </div>
      </div>
      <div className={styles.Wave}>
        <Wave
          fill="rgb(162, 162, 185)"
          paused={false}
          options={{
            height: 40,
            amplitude: 80,
            speed: 0.16,
            points: 9,
          }}
        />
      </div>
    </Fragment>
  );
}
