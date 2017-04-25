import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

const _Reddit=(props)=>(
      <View>
        {this.props.posts.map(posts => <Text>{posts.name}</Text> )}
      </View>
  )

const mapStateToProps= (state) => ({
  posts: state.reddit
})

export const Reddit = connect(mapStateToProps, null)(_Reddit)