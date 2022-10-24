import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/HomePage';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col  
  `}
`;


function App() {
  return <AppContainer>
    <HomePage />
  </AppContainer>;
}

export default App;


//26:20 / 8:15:43
//Create Responsive Navbar componen
//https://www.youtube.com/watch?v=4ELH8CT4J0A&t=865s&ab_channel=CoderOne
//https://github.com/ipenywis/react-nestjs-full-web-app/tree/master/react-cars-app/src
