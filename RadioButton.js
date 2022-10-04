import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './Styles.js'; // Styles are defined as a separate file

export default class RadioButton extends Component {
	state = {
		value: "male",
	}

	render() {
		const { props } = this.props
        const { returnValue } = this.props
		const { value } = this.state

		return (
			<View style={styles.radioBtnOuterContainer}>
				{props.map(res => {
					return (
						<View key={res.value} style={styles.radioBtnInnerContainer}>
							<Text style={styles.radioText}>{res.label}</Text>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.value,
									}, returnValue(res.value))
								}}>
                                  {value === res.value && <View style={styles.selectedRadioButton} />}
							</TouchableOpacity>
						</View>
					)
				})}
			</View>
		);
	}
}