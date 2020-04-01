export class ApiEndpoints {
  private static readonly BASE_URL = 'https://medihelper-api.herokuapp.com';
  static readonly REGISTER_PARENT = ApiEndpoints.BASE_URL + '/parents/register';
  static readonly GET_DATA_PARENT = ApiEndpoints.BASE_URL + '/parents/byAuthToken';
  static readonly CHILDRENS = ApiEndpoints.BASE_URL + '/children';
  static readonly MEDICINES = ApiEndpoints.BASE_URL + '/medicines';
  static readonly LOGIN_PARENT = ApiEndpoints.BASE_URL + '/parents/login';
  static readonly LOGIN_CHILD = ApiEndpoints.BASE_URL + '/children/login';
  static readonly USER_ROLE = ApiEndpoints.BASE_URL + '/user/role';
}
