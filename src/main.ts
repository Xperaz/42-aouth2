import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
app.enableCors()
  const config = new DocumentBuilder()
        .setTitle('Nest API')
        .setDescription('Learn nestjs')
        .setVersion('1.0')
        .build();
        
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });
  app.setGlobalPrefix('api');
  app.use(
    session({
      cookie: {
        maxAge: 86400000,
      },
      secret: 'kdjsjsdhfjahsdjkhfdsjkhfdsjdh',
      resave: false,
      saveUninitialized: false,
    }),
  )
  
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
