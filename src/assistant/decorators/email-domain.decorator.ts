import { createParamDecorator, ExecutionContext, BadRequestException } from '@nestjs/common';

export const EmailDomain = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const email = request.headers['x-user-email'];

    if (!email) {
      throw new BadRequestException('Email header is missing');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domain = 'sucomunicacion.com';

    if (!emailRegex.test(email)) {
      throw new BadRequestException('Invalid email format');
    }

    const emailDomain = email.split('@')[1];
    if (emailDomain !== domain) {
      throw new BadRequestException(`Email must be from the domain ${domain}`);
    }

    return email;
  },
);