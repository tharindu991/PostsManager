/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * List view with component
 */
import React from 'react';
import {View, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';

const ListView = ({renderItem, data = [], onRefresh, refreshing}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => `${item.id}`}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

ListView.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default ListView;
