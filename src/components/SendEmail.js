import * as emailjs from "emailjs-com";

function SendEmail(data) {
  const SERVICE_ID = "service_7gffrhm";
  const TEMPLATE_ID = "template_yf4rnjj";
  const USER_ID = "WKee2J2CL71QWxXAt";
  emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
    function (response) {
      console.log(response.status, response.text);
    },
    function (err) {
      console.log(err);
    }
  );
}

export default SendEmail;
