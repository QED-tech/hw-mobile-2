import { View, FlatList, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import { useEffect, useState } from 'react';
import ListItem from '@/components/ListItem';
import type { ListItemProps } from '@/components/ListItem';

type ListItemPropsKey = ListItemProps & {
  key: string,
};

const data: ListItemPropsKey[] = [
  {
    key: '0',
    langName: 'Golang',
    desc: 'Программирую на этом языке около 2-ух лет. Нравится и не нравится одновременно.',
    imageUrl: 'https://cdn.vectorstock.com/i/1000v/77/94/golang-emblem-blue-gopher-vector-27827794.jpg'
  },
  {
    key: '1',
    langName: 'PHP',
    desc: 'Что тут сказать. Кто бы что не говорил, но 80% сайтов написано на php. И это база веб программирования.',
    imageUrl: 'https://cdn.freebiesupply.com/logos/large/2x/php-1-logo-png-transparent.png'
  },
  {
    key: '2',
    langName: 'Java',
    desc: 'Небольшой опыт обучения, но язык с очень обширной стандартной библиотекой, что нравится.',
    imageUrl: 'https://cdn2.vectorstock.com/i/1000x1000/36/56/java-programming-language-icon-vector-48893656.jpg'
  },
];

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    setRefreshing(true);
    setTimeout(() => {
  
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={item => (
          <ListItem
            langName={item.item.langName}
            desc={item.item.desc}
            imageUrl={item.item.imageUrl}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadUserData} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  langName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  desc: {
    fontSize: 14,
    color: '#666',
  },
  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  refreshControl: {
    tintColor: '#007AFF', // Цвет индикатора обновления для iOS
  },
});
