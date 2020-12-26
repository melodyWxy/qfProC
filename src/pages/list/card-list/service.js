import request from 'umi-request';

export async function queryFakeList(params) {
  return request('http://localhost:7001/project/getAllProjects', {
    params,
  });
}
