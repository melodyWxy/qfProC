import { queryFakeList } from './service';

const Model = {
  namespace: 'listAndcardList',
  state: {
    list: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'queryList',
        payload: response?.success? response.data || [] : [],
      });
    },
  },
  reducers: {
    queryList(state, action) {
      return { ...state, list: action.payload };
    },
  },
};
export default Model;
