import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';


@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async signup(@Args('input') input: AuthDto): Promise<string> {
    const { access_token } = await this.authService.signup(input);
    return access_token;
  }

  @Mutation(() => String)
  async signin(@Args('input') input: AuthDto): Promise<string> {
    const { access_token } = await this.authService.signin(input);
    return access_token;
  }

  // Add more resolver functions for other authentication-related operations

}
