export class ApiEndpoints {
  // private static readonly BASE_URL = 'http://localhost:8080';
  private static readonly BASE_URL = 'https://medihelper-api.herokuapp.com';
  static readonly GET_DATA_PARENT = ApiEndpoints.BASE_URL + '/parents/byAuthToken';
  static readonly CHILDREN = ApiEndpoints.BASE_URL + '/children';
  static readonly MEDICINES = ApiEndpoints.BASE_URL + '/medicines';
  static readonly REGISTER_PARENT = ApiEndpoints.BASE_URL + '/users/register-parent';
  static readonly LOGIN_PARENT = ApiEndpoints.BASE_URL + '/users/login-parent';
  static readonly LOGIN_CHILD = ApiEndpoints.BASE_URL + '/users/login-child';
  static readonly USER_ROLE = ApiEndpoints.BASE_URL + '/users/role';
  static readonly GET_LOGGED_CHILDREN = ApiEndpoints.BASE_URL + '/children/byAuthToken';
  static readonly GET_CHILD_MEDICINES = ApiEndpoints.BASE_URL + '/childMedicines';
}
