import { createNestroApplication } from '@duongtrungnguyen/nestro';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await createNestroApplication(AppModule, {
    server: {
      host: 'localhost',
    },
    client: {
      name: 'course',
      host: 'localhost',
      port: 3003,
    },
    security: {
      publicKeyPath: '~/keys/public.pem',
      privateKeyPath: '~/keys/private.pem',
    },
  });
  await app.listen();
}
bootstrap();
