import request from 'umi-request';

export async function queryFakeList(params) {
  return request('http://121.196.150.29:7001/project/getAllProjects', {
    params,
  });
}
