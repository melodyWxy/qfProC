import PATH_MAP from './PATH_MAP';


export default () => {
    let haveKey = false;
    new URLSearchParams(location.search).forEach((v, key)=> {
      if(key === 'typeId'){
        haveKey = true;
      }
    })
    if(haveKey){
      return location.search;
    }else{
      const typeId = PATH_MAP.find(item => item.path === location.pathname)?.typeId || '0001';
      return `?typeId=${typeId}`;
    }
  }