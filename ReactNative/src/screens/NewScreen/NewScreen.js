import React, {useState} from "react"
import {View, Text, StyleSheet, ScrollView, FlatList, Animated, Image, Dimensions} from 'react-native'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import {useNavigation} from '@react-navigation/native'
import Logo from '../../../assets/images/SquareLogo.png'
import fete from '../../../assets/images/fete.png'
import alcool from '../../../assets/images/alcool.png'
import stop from '../../../assets/images/stop.png'
import { StatusBar } from "expo-status-bar"

const {width, height} = Dimensions.get('window');
const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
    {
      "key": "3571572",
      "title": "Aimez-vous aller en soirée ?",
      "description": "De nombreuses soirées sont organisées chaque semaines pour que les étudiants profitent un peu ! ",
      "image": fete
    },
    {
      "key": "3571747",
      "title": "Soirées riment avec alcool...",
      "description": "Il vous est peut-être déjà arrivé d'être importuné.e.s par des personnes ayant un peu trop bu, qui deviendraient peut-être trop insistantes... ",
      "image": alcool
    },
    {
      "key": "3571680",
      "title": "Dire non ne suffit pas ?",
      "description": "Vous aimeriez pouvoir dire non sans avoir à vous justifier ? Vous vous sentez seul.e.s ou démuni.e.s ?",
      "image": stop
    },
    {
      "key": "3571603",
      "title": "Découvrez Balance ton bip! ",
      "description": "Grâce à notre application et à son bipeur, vous n'êtes plus seul.e.s !",
      "image": Logo
    }
  ]

const Indicator = ({scrollX}) => {
    
    return <View style={{flexDirection: 'row', marginTop:25}}>
        {DATA.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

            const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.8, 1.4, 0.8],
                extrapolate: 'clamp',
            });
            return <Animated.View 
                key={'indicator-${i}'}
            style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: '#fff',
                margin: 10,
                transform: [{scale}],
            }}
            />
        })}
    </View>
}

const Backdrop = ({scrollX}) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i * width),
        outputRange: bgs.map((bg) => bg),
    });
    return (<Animated.View style={[
        StyleSheet.absoluteFillObject, 
        {
        backgroundColor,
        },
    ]}
    />
);
};

const NewScreen = () => {



    const [currentIndex, setCurrentIndex] = useState(0);

    const onMomentumScrollEnd = (event) => {
      // Calculate the current index based on the scroll position
      const scrollIndex = Math.round(
        event.nativeEvent.contentOffset.x / width
      );
      setCurrentIndex(scrollIndex);
    };

    const navigation = useNavigation();
   
    const onPress = async () => {
        navigation.navigate('SignIn');
        
    }

const Square = ({scrollX}) => {
    return <Animated.View
        style={{ width: height, 
            height: height, 
            backgroundColor: '#fff', 
            borderRadius: 86, 
            position: 'absolute',
            top: -height * 0.6, 
            left: -height * 0.3, 
            transform: [{rotate: '35deg'}], 
            zIndex: -100}}
            />
}

    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <ScrollView>
        <View style={styles.root}>
            <StatusBar hidden/>
            <Backdrop scrollX={scrollX}/>
            <Square scrollX={scrollX}/>
            <Animated.FlatList 
                snapToInterval={width}
                decelerationRate="fast"
                data={DATA}
                keyExtractor={item => item.key}
                horizontal
                scrollEventThrottle={32}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false}
                )}
                contentContainerStyle={{paddingBottom:100}}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={({item}) => {
                    return (
                    <View style={{width, alignItems: 'center'}}>
                        <View style= {{flex: 0.7, marginTop:'25%'}}>
                        <Image source={item.image} style={{
                            width: 250, 
                            height: 250, 
                            resizeMode: 'contain',
                            }}
                        />
                        </View>
                        <View style={{flex: 0.3}}>
                            <Text style={{
                                color: '#fff',
                                marginTop: '30%',
                                fontWeight:'800', 
                                fontSize: 24, 
                                marginBottom: 10, 
                            }}>{item.title}</Text>
                            <Text style={{
                                color: '#fff',
                                fontWeight:'300', 
                                fontSize: 18, 
                                marginBottom: 0, 
                            }}>{item.description}</Text>
                            </View>
                    </View>
                    );
                }}
                onMomentumScrollEnd={onMomentumScrollEnd}
            />
            <CustomButton 
            text="Découvrir l'application" 
            onPress={onPress}
            type ="PRIMARY"
            style={{marginBottom: 20,}}
            />
            <Indicator scrollX={scrollX}></Indicator>
            
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root:{
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,

    },
});

export default NewScreen;