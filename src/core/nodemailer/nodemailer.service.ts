import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

import { EnvService } from '../../helpers/env/env.service';

type SendEmailRequest = {
  name: string;
  email: string;
};

@Injectable()
export class NodeMailerService {
  constructor(private readonly env: EnvService) {}

  async execute({ name, email }: SendEmailRequest): Promise<boolean> {
    try {
      const transporter = this.credentials();
      await transporter.sendMail({
        from: 'contato@textenv.com',
        to: email,
        subject: 'Cadastro de Autor',
        text: `Sr(a) ${name}, muitissímo obrigado por efetudar o seu cadastro conosco!`,
      });

      return true;
    } catch (error) {
      throw new Error(`Error no envio de email:  ${error}`);
    }
  }

  private credentials() {
    const transporter = createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: this.env.get('EMAIL_USER'),
        pass: this.env.get('EMAIL_PASS'),
      },
    });

    return transporter;
  }
}
