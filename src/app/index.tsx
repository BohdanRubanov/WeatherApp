import { SafeAreaView, View } from 'react-native';
import { MainPage } from '../modules/main-page/main-page';
import { CityPage } from '../modules/choosing-page/choosing-page';

export default function App() {
  return (
    <SafeAreaView style = {{flex:1}}>
      <MainPage></MainPage>
    </SafeAreaView>
  );
}


