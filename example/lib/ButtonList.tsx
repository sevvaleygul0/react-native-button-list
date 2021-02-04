import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './ButtonList';

interface ButtonListProps {}
interface IState {}

export default class ButtonList extends React.PureComponent<
  ButtonListProps,
  IState
> {
  render() {
    return (
      <View>
        <Text>ButtonList</Text>
      </View>
    );
  }
}
