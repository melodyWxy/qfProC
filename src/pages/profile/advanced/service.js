import request from 'umi-request';

export async function queryAdvancedProfile(params) {
  return request('http://localhost:7001/project/getProDetail', {
    params,
  });
}
