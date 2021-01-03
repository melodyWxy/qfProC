import request from 'umi-request';

export async function queryAdvancedProfile(params) {
  return request('/api/project/getProDetail', {
    params,
  });
}
