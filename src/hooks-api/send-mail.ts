import axios from 'axios';
import { REQUEST_EMAIL_PAYLOAD } from '~/schemas';

export const sendEmail = async ({ email, subject, message }: REQUEST_EMAIL_PAYLOAD) => {
    const response = await axios({
        method: 'post',
        url: '/api/send-email',
        data: {
            email: email,
            subject: subject,
            message: message,
        },
    });

    console.log(email, subject, message);
    

    return response;
};
