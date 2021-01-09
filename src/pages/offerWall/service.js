import request from 'umi-request';

export async function queryCurrent() {
  return request('/api/currentUser');
}
export async function queryFakeList(params) {
  return request('http://121.196.150.29:7002/offer/getList', {
    params,
  });
}
