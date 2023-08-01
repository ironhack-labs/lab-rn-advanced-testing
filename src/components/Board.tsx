import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import {Chart} from './Chart';

export const Board = () => {
  const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(9)).map((v, i) => {
      return {id: i, src: 'http://placehold.it/200x200?text=' + (i + 1)};
    });
    setDataSource(items);
  }, []);
  return (
    <View>
      <FlatList
        data={dataSource}
        renderItem={({symbol}) => <Chart symbol={symbol} />}
        numColumns={3}
      />
    </View>
  );
};
