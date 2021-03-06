import sgMail from "@sendgrid/mail";
import IMsg from "../interfaces/i-msg";
import verifTemplate from "../template/verif-template";

const defaultTo = "momoexcalibur.ynov@gmail.com";
const defaultFrom = "momoexcalibur.ynov@gmail.com";
const defaultSubject = "Confirmation de création de compte :)";
const defaultText = "Bonjour, ceci est un message de test par défaut.";
const defaultHtml = verifTemplate(defaultText, defaultTo);

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

class EmailManagment {
  writeEmail(mailBody: any) {
    const {
      to = defaultTo,
      from = defaultFrom,
      subject = defaultSubject,
      text = defaultText,
      html = defaultHtml,
    } = mailBody;

    return {
      to,
      from,
      subject,
      text,
      html: verifTemplate(text, to),
    };
  }

  async sendEmail(msg: IMsg): Promise<boolean> {
    return sgMail
      .send(msg)
      .then(() => {
        console.log("send");
        return true;
      })
      .catch((error: any) => {
        console.error(error);
        return false;
      });
  }
}

export default EmailManagment;
