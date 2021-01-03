import PATH_MAP from './PATH_MAP';


export default () => {
    let haveKey = false;
    let typeId = '0001';
    new URLSearchParams(location.search).forEach((v, key)=> {
      if(key === 'typeId'){
        haveKey = true;
        typeId = v;
      }
    })
    if(haveKey){
        const path = PATH_MAP.find(item => item.typeId === typeId )?.path || '/list';
        return path + location.search;
    }else{
      return `/list?typeId=0001`
    }
  }