import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';
import { REQUEST_EMAIL_PAYLOAD } from '~/schemas';

export async function POST(req: NextRequest) {
    const body = (await req.json()) as REQUEST_EMAIL_PAYLOAD;

    const message = {
        from: body.email,
        to: process.env.GMAIL_EMAIL_ADDRESS,
        subject: body.subject,
        text: body.message,
        html: `<p>${body.message}</p>`,
    };

    console.log(body)

    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL_ADDRESS,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    if (req.method === 'POST') {    
        transporter.sendMail(message, (err, info) => {
            console.log(message)
            console.log(err)
            if (err) {  
                NextResponse.json({ error: `Connection refused at ${err.cause}` }, { status: 404 });
            } else {
                NextResponse.json({ success: `Message delivered to ${info.accepted}` }, { status: 200 });
            }
        });
    }


    return NextResponse.json({ success: true }, { status: 200 });
}