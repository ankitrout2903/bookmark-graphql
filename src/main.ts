import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { GraphQLSchema } from 'graphql';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  // Create the GraphQL schema
  const gqlSchema = await createGraphQLSchema();

  // Set up the GraphQL endpoint
  app.use('/graphql', (req, res, next) => {
    // Optionally, you can perform authentication or other middleware logic here
    next();
  });

  // Start the app
  await app.listen(3001);
}

async function createGraphQLSchema(): Promise<GraphQLSchema> {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  const schemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await schemaFactory.create([AppModule]);
  await app.close();

  return schema;
}

bootstrap();
