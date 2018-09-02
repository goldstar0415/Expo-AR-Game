// @flow
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Image, Text, View } from 'react-native';

import Assets from '../Assets';

export default class ScoreBadge extends PureComponent {
  static propTypes = {
    style: View.propTypes.style,
    children: View.propTypes.children,
    color: PropTypes.string.isRequired,
  };

  static defaultProps = {
    style: {},
    children: null,
  };

  render() {
    const { style, children, color } = this.props;
    return (
      <View
        style={[
          {
            borderRadius: 20,
            backgroundColor: '#4630eb',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 8,
            paddingVertical: 6,
          },
          style,
        ]}
      >
        <Image
          source={Assets.images['expoBadge.png']}
          style={{
            marginRight: 12,
            resizeMode: 'contain',
            tintColor: color,
            width: 20,
            height: 20,

            aspectRatio: 1,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            marginRight: 6,
            color,
          }}
        >
          {children}
        </Text>
      </View>
    );
  }
}
