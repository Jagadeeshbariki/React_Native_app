import React from 'react';
import { RefreshControl } from 'react-native';

const Refresh = () => {

    const [refresh, setRefresh] = React.useState(false)

    const onRefresh =React.useCallback(()=>{
        setRefresh(true)
        setTimeout(() => {
            setRefresh(false);
          }, 2000);
    },[])
  return (
    <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
  );
}

export default Refresh;
