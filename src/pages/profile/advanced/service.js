import request from 'umi-request';

export async function queryAdvancedProfile(params) {
  return request('http://127.0.0.1:7001project/getProDetail', {
    params,
  });
}
