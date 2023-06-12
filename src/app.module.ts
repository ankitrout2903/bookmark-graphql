import { Module } from '@nestjs/common';
import { GraphQLModule, ApolloDriver } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
  ],
})
export class AppModule {}
