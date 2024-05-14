import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referalCode, setReferalCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleReferalCodeChange = (e) => setReferalCode(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      promo: false,
      country: "",
      referral_code: referalCode,
      email: email,
      devicetype: "iPhone",
      pvc: "e156ce540dff6461138d7d26618adf8c",
      socialmediatype: "",
      phone_country: "60",
      nationality: "",
      svc: "ami3jf8anasnd1f",
      fname: firstName,
      lname: lastName,
      vc: "7ab4ab82a8aefd0c93462662d4a28405",
      phone: phone,
      pass: "",
      title: "",
      deviceid: "068BC198-62E2-4591-A2CE-121BCC36E3A7",
      socialmediatoken: "",
      platform: "ios",
      token:
        "eAf_lVUKD04YojGkjMdaNO:APA91bHcmYMd0NCiu-qXdHv9eZ676ThE9y8ryHUUkuxUOvC2OP29juAiv42sRckMpTjXJqcPVarljSbJ6Z5uOz5Yl1I6fKuL99mkStGtiTyiMbr3xKNx9vSrwr9fb_3fjsE0G9b7XsiZ",
      date: "978307200",
    };

    const response = await fetch(
      "https://mog.fireworksmedia.com/loyalty/api2/register.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );

    const data = await response.json();
    if (response.ok && data.status === "success") {
      navigate("/success");
    } else {
      setErrorMessage(`Error: ${data.message}`);
    }
  };

  return (
    <div className="MuiBox-root css-1vxmsu9">
      <div className="MuiBox-root css-1rxdjol">
        <div className="MuiBox-root css-1uk1wpz">
          <h6 className="MuiTypography-root MuiTypography-subtitle1 css-1bh71wu">
            COMMUNITY POWERED COMMERCE
          </h6>
          <h2 className="MuiTypography-root MuiTypography-h2 css-1vc9mar">
            Togethër
          </h2>
        </div>
      </div>
      <div className="MuiBox-root css-8fz3bm">
        <div className="MuiBox-root css-1r5z6w5">
          <div className="MuiBox-root css-150mphl">
            <div className="MuiBox-root css-kb9bp1">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1amtie4"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowBackIcon"
                style={{
                  color: "white",
                  fontSize: "5rem",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
              </svg>
              <div className="MuiBox-root css-gnbunu">
                <img
                  src="/static/media/tgt.98bf0ee0.svg"
                  alt="Logo"
                  style={{ width: "150px" }}
                />
              </div>
              <p className="MuiTypography-root MuiTypography-body1 css-ds61lh">
                COMMUNITY POWERED COMMERCE
              </p>
            </div>
          </div>
          <div className="MuiBox-root css-ds90uk">
            <div className="MuiBox-root css-198b2ks">
              <form
                className="MuiBox-root css-1jtq21n"
                role="form"
                onSubmit={handleSubmit}
              >
                <div className="MuiBox-root css-7b1iam">
                  <div className="MuiBox-root css-oph32v">
                    <label className="MuiTypography-root MuiTypography-caption css-hs15up">
                      First Name
                    </label>
                  </div>
                  <div className="MuiInputBase-root MuiInputBase-colorPrimary css-14o4eg7">
                    <input
                      name="firstName"
                      type="text"
                      className="MuiInputBase-input css-1bqqmdo"
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="MuiBox-root css-8uc9uo">
                    <div className="MuiTypography-root MuiTypography-caption css-hg6xoh"></div>
                  </div>
                </div>
                <div className="MuiBox-root css-7b1iam">
                  <div className="MuiBox-root css-oph32v">
                    <label className="MuiTypography-root MuiTypography-caption css-hs15up">
                      Last Name
                    </label>
                  </div>
                  <div className="MuiInputBase-root MuiInputBase-colorPrimary css-14o4eg7">
                    <input
                      name="lastName"
                      type="text"
                      className="MuiInputBase-input css-1bqqmdo"
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                  </div>
                  <div className="MuiBox-root css-8uc9uo">
                    <div className="MuiTypography-root MuiTypography-caption css-hg6xoh"></div>
                  </div>
                </div>
                <div className="MuiBox-root css-7b1iam">
                  <div className="MuiBox-root css-oph32v">
                    <label className="MuiTypography-root MuiTypography-caption css-hs15up">
                      Email
                    </label>
                  </div>
                  <div className="MuiInputBase-root MuiInputBase-colorPrimary css-14o4eg7">
                    <input
                      name="email"
                      type="email"
                      className="MuiInputBase-input css-1bqqmdo"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="MuiBox-root css-8uc9uo">
                    <div className="MuiTypography-root MuiTypography-caption css-hg6xoh"></div>
                  </div>
                </div>
                <div className="MuiBox-root css-7b1iam">
                  <div className="MuiBox-root css-oph32v">
                    <label className="MuiTypography-root MuiTypography-caption css-hs15up">
                      Phone
                    </label>
                  </div>
                  <div className="MuiInputBase-root MuiInputBase-colorPrimary css-14o4eg7">
                    <input
                      name="phone"
                      type="text"
                      className="MuiInputBase-input css-1bqqmdo"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                  <div className="MuiBox-root css-8uc9uo">
                    <div className="MuiTypography-root MuiTypography-caption css-hg6xoh"></div>
                  </div>
                </div>
                <div
                  className="error"
                  style={{ color: "yellow", fontSize: "10px" }}
                >
                  Note : Kindly use your direct email to receive order
                  confirmations. Private Relays and other redirection emails are
                  not advisable.
                </div>
                <div className="MuiBox-root css-7b1iam">
                  <div className="MuiBox-root css-oph32v">
                    <label className="MuiTypography-root MuiTypography-caption css-hs15up">
                      Referral Code
                    </label>
                  </div>
                  <div className="MuiInputBase-root MuiInputBase-colorPrimary css-14o4eg7">
                    <input
                      name="referalcode"
                      type="referalcode"
                      className="MuiInputBase-input css-1bqqmdo"
                      value={referalCode}
                      onChange={handleReferalCodeChange}
                    />
                  </div>
                  <div className="MuiBox-root css-8uc9uo">
                    <div className="MuiTypography-root MuiTypography-caption css-hg6xoh"></div>
                  </div>
                </div>
                <div style={{ display: "flex", marginLeft: "10px" }}>
                  <label
                    className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-eo582l"
                    style={{ display: "flex", marginBottom: "12px" }}
                  >
                    <span
                      className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium css-17zeh19"
                      style={{ color: "rgb(245, 54, 123)" }}
                    >
                      <input
                        className="PrivateSwitchBase-input css-1m9pwf3"
                        type="checkbox"
                        data-indeterminate="false"
                      />
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="CheckBoxOutlineBlankIcon"
                      >
                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                      </svg>
                    </span>
                    <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-vb56h">
                      <span style={{ fontSize: "12px" }}>
                        I accept the{" "}
                        <a
                          href="/static/media/Together Terms and Conditions (User).aa07201c.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "rgb(245, 54, 123)",
                            textDecoration: "underline",
                            marginRight: "4px",
                          }}
                        >
                          Terms &amp; Conditions
                        </a>
                        and{" "}
                        <a
                          href="/static/media/Together_Privacy Policy (User)_2024.f133670a.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "rgb(245, 54, 123)",
                            textDecoration: "underline",
                            marginLeft: "4px",
                          }}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </span>
                  </label>
                </div>
                <div
                  className="error"
                  style={{ color: "red", fontSize: "10px" }}
                >
                  You must accept the Terms &amp; Conditions and Privacy Policy
                </div>
                <div className="MuiBox-root css-1p5pdz0">
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedWhite MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedWhite MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-101vgsi"
                    tabIndex="0"
                    type="submit"
                    style={{ background: "rgb(245, 54, 123)" }}
                  >
                    SIGN UP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {errorMessage && (
          <p
            className="MuiTypography-root MuiTypography-body1 css-qetbwd"
            style={{ color: "red", fontSize: "16px" }}
          >
            {errorMessage}
          </p>
        )}
        <p
          className="MuiTypography-root MuiTypography-body1 css-qetbwd"
          style={{
            marginTop: "50px",
            color: "rgb(189, 201, 226)",
            fontSize: "10px",
          }}
        >
          Powered by{" "}
          <a
            href="https://tgt.wtf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgb(245, 54, 123)",
              textDecoration: "underline",
              marginLeft: "4px",
            }}
          >
            together
          </a>{" "}
          A visionary product of{" "}
          <a
            href="http://www.fireworks.digital/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgb(245, 54, 123)",
              textDecoration: "underline",
              marginLeft: "4px",
            }}
          >
            {" "}
            Fireworks Digital{" "}
          </a>{" "}
          <br /> © 2024 Mobility Asia Sdn. Bhd. (Registration No: 1257623-M)
        </p>
      </div>
    </div>
  );
}
