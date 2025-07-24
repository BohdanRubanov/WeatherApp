import { SafeAreaView, View } from 'react-native';
import { MainPage } from '../modules/main-page/main-page';
import { ChoosingPage } from '../modules/choosing-page/choosing-page';

export default function Index() {
  return (
    <SafeAreaView style = {{flex:1}}>
      <MainPage></MainPage>
    </SafeAreaView>
  );
}


