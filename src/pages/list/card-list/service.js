import request from 'umi-request';

export async function queryFakeList(params) {
  return request('/api/project/getAllProjects', {
    params,
  });
}
