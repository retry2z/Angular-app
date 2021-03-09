import { environment } from 'src/environments/environment';
import { MenuItem } from 'src/app/shared/models/MenuItem';
export class ContextService {
  userService = {
    isLogged: false,
  };

  constructor() { }

  navigationRoutes: MenuItem[] =
    this.userService.isLogged
      ? environment.menu.user
      : environment.menu.guest;
}
