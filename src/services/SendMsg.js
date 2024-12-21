/* eslint-disable no-unused-vars */
import emailjs from "@emailjs/browser";
export async function SendMessage({name, email, msg, tel , subject}) {
    
    try {
        if (String(name).length > 1 && String(msg).length > 1 && isValidPhoneNumber(tel) && String(subject).length > 1 && isValidEmail(email)) {
          //send email
           const response = await emailjs.send(
             "service_va8khgo",
             "template_yg94po8",
             {
               from_name: name,
               from_email: email,
               message: msg,
               subject: subject,
               email: email,
               from_tel: tel,
             },
             "-Q-rLM_OclMYemfOc"
           );
          
          if (response?.status === 200) {
            return true;
          } else {
            return false;
          }
        }else{
          return false
        }
    } catch (error) {
        return false
    }
    
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phoneNumber);
}

