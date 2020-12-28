import { queryAdvancedProfile } from './service';

const Model = {
  namespace: 'profileAndadvanced',
  state: {
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
  },
  effects: {
    *fetchAdvanced(_, { call, put }) {
      const searchParams = new URLSearchParams(location.search);
      const params = {};
      searchParams.forEach((v, key)=>{
        if(key === 'typeId'){
          params['typeId'] = v;
        }
        if(key === 'proId'){
          params['proId'] = v;
        }
      })
      const response = yield call(queryAdvancedProfile, params);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },
  reducers: {
    show(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default Model;
