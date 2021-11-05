import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql-experimental';
import { ApolloGraphQLAdapter } from '../../lib/adapters';
import { DirectionsModule } from './directions/directions.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    RecipesModule,
    DirectionsModule,
    GraphQLModule.forRoot({
      adapter: ApolloGraphQLAdapter,
      debug: false,
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
    }),
  ],
})
export class ApplicationModule {}
