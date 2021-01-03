import PATH_MAP from './PATH_MAP';


export default () => {
    let haveKey = false;
    let typeId = '0001';
    new URLSearchParams(location.search).forEach((v, key)=> {
      if(key === 'typeId'){
        haveKey = true;
        typeId = v
      }
    })
    if(haveKey) {
        return typeId;
    } else {
       return PATH_MAP.find(item => item.path === location.pathname)?.typeId || '0001';
    }
  }