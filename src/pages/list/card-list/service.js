import request from 'umi-request';

export async function queryFakeList(params) {
  return request('http://127.0.0.1:7001/project/getAllProjects', {
    params,
  });
}
