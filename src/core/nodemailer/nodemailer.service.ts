import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

import { EnvService } from '../../helpers/env/env.service';

type SendEmailRequest = {
  name: string;
  email: string;
  status: string;
};

@Injectable()
export class NodeMailerService {
  constructor(private readonly env: EnvService) {}

  async execute({ name, email, status }: SendEmailRequest): Promise<boolean> {
    try {
      const transporter = this.credentials();
      await transporter.sendMail({
        from: 'contato@textenv.com',
        to: email,
        subject: 'Cadastro de Autor',
        text: `Sr(a) ${name}, muitissímo obrigado por contratar nosso serviço, sua encomenda está com status de ${status}!`,
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
