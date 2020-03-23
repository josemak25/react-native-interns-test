import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ImageSourcePropType, Dimensions } from 'react-native';
import {
  Container2,
  StartImage,
  BodyText,
  StartText,
  GetStartedContainer,
  GetStartedButton,
  LogInButton,
  GetStartedText,
  LogInText
} from '../get_started/styles';

type StartPageTypeProps = {
  startPage: {
    startText: string;
    img: string;
    bodyText: string;
  };
};

const { width } = Dimensions.get('window');
const height = width * 0.8;

const GetStartedScreen: React.FC = (): any => (
  <GetStartedContainer>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
    >
      {startPages.map((page, index) => {
        return <StartingPage key={index} startPage={page} />;
      })}
    </ScrollView>
    <TouchableOpacity onPress={() => {}} style={{ width: '100%' }}>
      <GetStartedButton>
        <GetStartedText>Get Started</GetStartedText>
      </GetStartedButton>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <LogInButton>
        <LogInText>Log In</LogInText>
      </LogInButton>
    </TouchableOpacity>
  </GetStartedContainer>
);

export default GetStartedScreen;

const StartingPage: React.FC<StartPageTypeProps> = ({
  startPage: { startText, img, bodyText }
}) => {
  return (
    <>
      <Container2>
        <StartText>{startText}</StartText>
        <StartImage
          source={img as ImageSourcePropType}
          style={{
            height: height * 0.7,
            width: width * 0.7,
            marginLeft: (width - width * 0.7) / 2,
            marginRight: (width - width * 0.7) / 2
          }}
        />
        <BodyText>{bodyText}</BodyText>
      </Container2>
    </>
  );
};

const startPages = [
  {
    startText: 'Get Answers',
    img: require('../../../assets/images/get_answers.png'),
    bodyText:
      'Become a part of Pregnancy and Parenting Tribe and have all your questions answered by Members and Experts'
  },
  {
    startText: 'Get Answers',
    img: require('../../../assets/images/news.png'),
    bodyText: 'Get All Insights on Everything Pregnancy and Motherhood'
  },
  {
    startText: 'Get Answers',
    img: require('../../../assets/images/shop.png'),
    bodyText: 'Easily Shop for Everything You Need For Your Baby'
  }
];
