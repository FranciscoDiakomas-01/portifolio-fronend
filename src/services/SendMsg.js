/* eslint-disable no-unused-vars */
export async function SendMessage({name, email, msg, tel, subject}) {
    
    try {
        if (String(name).length > 1 && String(msg).length > 1 && String(subject).length > 1 && String(tel) && String(email).length > 5) {
            return true
        }
        return false

    } catch (error) {
        return false
    }
    
}