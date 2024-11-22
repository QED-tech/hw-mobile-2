import { StyleSheet, View, Text, Image } from 'react-native';

export type ListItemProps = {
  imageUrl: string,
  desc: string,
  langName: string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  langName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  desc: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});

const ListItem = ({ imageUrl, desc, langName }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.langName}>{langName}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

export default ListItem;
