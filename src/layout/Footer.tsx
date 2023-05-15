import { GithubIcon } from "../assets/icons/GithubIcon";
import { GmailIcon } from "../assets/icons/GmailIcon";
import { LinkedInIcon } from "../assets/icons/LinkedInIcon";

export const Footer = () => {
  return (
    <footer className="home__footer">
      <div className="link-block">
        <h3>Contribute</h3>
        <ul>
          <li>
            <a
              href="https://github.com/DihanVermeulen/dad-joke-generator"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="link-block">
        <h3>Additional</h3>
        <ul>
          <li>
            <a href="/" target="_blank">
              Contact
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              About
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              Terms Of Service
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          style={{ marginLeft: "10px", marginRight: "10px" }}
          href="https://github.com/DihanVermeulen"
          target="_blank"
        >
          <GithubIcon width={30} />
        </a>
        <a
          style={{ marginLeft: "10px", marginRight: "10px" }}
          href="https://www.linkedin.com/in/dihan-vermeulen-a68722149/"
          target="_blank"
        >
          <LinkedInIcon width={30} />
        </a>
        <a
          style={{ marginLeft: "10px", marginRight: "10px" }}
          href="https://mail.google.com/mail/?view=cm&to=dihan.vermeulen12@gmail.com"
          target="_blank"
        >
          <GmailIcon width={30} />
        </a>
      </div>
      <p style={{ textAlign: "center", width: "100%" }}>
        <small>
          © 2023 Dihan Vermeulen. All Rights Reserved
          <a href="/terms"> | Terms of Service</a> |
          <a href="/privacy"> Privacy Policy</a>
        </small>
      </p>
      <p style={{ textAlign: "center", width: "100%", color: "#777777" }}>
        <small>Version: 1.0.0</small>
      </p>
    </footer>
  );
};
