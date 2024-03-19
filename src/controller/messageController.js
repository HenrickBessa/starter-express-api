import Client from '../connection/twilioClient.js';

const number = process.env.NUMBER_FIXED;

async function sendMessage(req, res) {
  const { body } = req.body;
  try {
    const message = await Client.messages.create({
      body: body,
      from: process.env.TWILIO_NUMBER,
      to: `+${number}`,
    });

    console.log(`Message SID: ${message.sid}`);
    res.status(200).json({
      success: true,
      message: 'Mensagem enviada com sucesso!',
      sid: message.sid
    });
  } catch (err) {
    console.error(`Sending Message Failed: ${err.message}`);
    res.status(500).json({
      success: false,
      error: 'Falha ao enviar mensagem',
      details: err.message
    });
  }
}

async function formClient(req, res) {
  const { name, email, phone } = req.body;
  let { message } = req.body;
  message = message.trim() ? message : '---';

  try {
    const sentMessage = await Client.messages.create({
      body: `Client Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService description: ${message}`,
      from: process.env.TWILIO_NUMBER,
      to: `+${number}`,
    });
    console.log(`Message SID: ${sentMessage.sid}`);
    res.status(200).json({
      success: true,
      message: 'Mensagem enviada com sucesso!',
      sid: sentMessage.sid
    });
  } catch (err) {
    console.error(`Sending Message Failed: ${err.message}`);
    res.status(500).json({
      success: false,
      error: 'Falha ao enviar mensagem',
      details: err.message
    });
  }
}

export { sendMessage, formClient };