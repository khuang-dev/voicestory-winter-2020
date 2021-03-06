import React, {Component} from 'react';
import {View} from 'react-native';
import CustomText from '../../components/CustomText';
import {FavesContext} from '../../context/FavesContext';
import Faves from './Faves';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
export default class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FavesContext.Consumer>
        {value =>
          value.faveIds.length > 0 ? (
            <Faves
              navigation={this.props.navigation}
              route={this.props.route}
              faveIds={value.faveIds}
            />
          ) : (
            <View style={styles.noFaves}>
              <CustomText>You haven't faved any videos yet.</CustomText>
            </View>
          )
        }
      </FavesContext.Consumer>
    );
  }
}
