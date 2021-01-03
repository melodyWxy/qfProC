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
       return  PATH_MAP.find(item => item.typeId === typeId)?.title || PATH_MAP[0].title;
    } else {
       return  PATH_MAP[0].title;
    }
  }