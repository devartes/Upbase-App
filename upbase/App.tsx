import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Header from './components/Header';

import {Warning, User, Star, Arrow, Parceiros, Capacitacoes} from './assets';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const ITEM_WIDTH_PERCENTAGE = 0.475;
const SLIDER_ITEM_WIDTH = SCREEN_WIDTH * ITEM_WIDTH_PERCENTAGE;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#006557',
  };

  const backgroundApp = {
    height: '100%',
    backgroundColor: '#ffffff',
  };

  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = event => {
    setScrollOffset(event.nativeEvent.contentOffset.x);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundApp}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.firstSection}>
            <View style={styles.warningContainer}>
              <View style={styles.warningStyle}>
                <Warning width={25} height={25} />
              </View>
              <View>
                <Text style={styles.highlightWarning}>
                  Completar perfil:
                  <Text style={styles.textWarning}>
                    {' '}
                    Preencha suas informações para encontrar pacientes.
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.containerTextProfile}>
              <Text style={styles.highlightTitle}>Seu perfil</Text>
            </View>
            <View style={styles.containerUserProfile}>
              <View style={styles.userIconWrapper}>
                <User width={30} height={30} />
              </View>
              <View>
                <Text style={styles.highlightProfileName}>
                  Carolina Magalhães
                </Text>
                <Text>São Paulo - SP</Text>
                <View style={styles.groupStars}>
                  {[...Array(5)].map((_, index) => (
                    <View key={index}>
                      <Star width={30} height={30} />
                    </View>
                  ))}
                  <Text> (0)</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.secondSection}>
            <TouchableOpacity
              onPress={() => console.log('Clicado Completar Perfil')}>
              <View style={styles.touchableContainer}>
                <Text style={styles.linkText}>Completar Perfil</Text>
                <Arrow width={25} height={25} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.secondSectionCarrosel}>
            <View style={styles.secondSectionText}>
              <Text style={styles.highlightTitle}>
                Capacitações Profissionais
              </Text>
              <TouchableOpacity onPress={() => console.log('Clicado Ver mais')}>
                <View style={styles.touchableContainer}>
                  <Text style={styles.linkText}>Ver mais</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <View style={styles.sliderContainer}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentOffset={{x: scrollOffset, y: 0}}
                  onScroll={handleScroll}
                  pagingEnabled
                  decelerationRate={0}>
                  <View style={styles.sliderItem}>
                    <View>
                      <Parceiros style={styles.sliderImg} />
                    </View>
                    <View style={styles.sliderTextContainer}>
                      <Text style={styles.sliderTextParceiros}>Parceiros</Text>
                      <Text style={styles.sliderText}>
                        Diabetes: alimentos para evitar
                      </Text>
                    </View>
                  </View>
                  <View style={styles.sliderItem}>
                    <View>
                      <Capacitacoes style={styles.sliderImg} />
                    </View>
                    <View style={styles.sliderTextContainer}>
                      <Text style={styles.sliderTextCapacitacoes}>
                        Capacitações
                      </Text>
                      <Text style={styles.sliderText}>
                        Como ministrar doses
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'column',
    borderBottomWidth: 2,
    borderBottomColor: '#e1e1e1',
    paddingBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
  },
  containerTextProfile: {
    marginTop: 30,
  },
  containerUserProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  highlight: {
    fontSize: 17,
    fontWeight: '700',
  },
  highlightWarning: {
    fontWeight: '700',
    color: '#a38445',
    fontSize: 17,
  },
  highlightTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#717a79',
  },
  highlightProfileName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  textWarning: {
    color: '#a38445',
    fontWeight: '400',
  },
  firstSection: {
    backgroundColor: '#f8f4c4',
    marginTop: 20,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    borderColor: '#a38445',
    borderWidth: 1,
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  warningStyle: {
    paddingRight: 15,
  },
  userIconWrapper: {
    backgroundColor: '#ccc',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  groupStars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  secondSection: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#07689F',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginRight: 10,
    textAlignVertical: 'center',
  },
  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  secondSectionCarrosel: {
    marginLeft: 20,
  },
  secondSectionText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  sliderContainer: {
    width: '100%',
    height: 130,
  },
  sliderItem: {
    width: SLIDER_ITEM_WIDTH,
    height: 130,
    marginRight: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
    flex: 1,
    position: 'relative',
  },
  sliderTextContainer: {
    position: 'absolute',
    top: 0,
    marginLeft: 20,
  },

  sliderTextParceiros: {
    fontSize: 14,
    color: '#ffffff',
    backgroundColor: '#D48A04',
    alignSelf: 'flex-start',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    fontWeight: '600',
  },
  sliderTextCapacitacoes: {
    fontSize: 14,
    color: '#ffffff',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#3B2D72',
    alignSelf: 'flex-start',
    marginTop: 10,
    fontWeight: '600',
  },
  sliderText: {
    fontSize: 14,
    color: '#ffffff',
    position: 'relative',
    top: 40,
    fontWeight: '600',
  },
  sliderImg: {
    flex: 1,
  },
});

export default App;
