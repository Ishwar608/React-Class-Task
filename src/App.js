import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './All_Task_Of_class/ReduxData/Store/store'
import UserLogin from './All_Task_Of_class/ex.13_Thank_Regir_Login/UserLogin';


function App() {
  return (
    // <Ex_1_usestate/> 
    // <ClearAndShowData/>
    // <Readmore_Delete/>
    // <Next_Pre_Button/>
    // <SearchData/>
    // <DataDeleteEdit/>
    // <Registration/>
    // <AxiosAPI/>
    // <Registration/>
    // <DynamicNoramal/>
    // <RegistrationFormik />
    // <DynamicFormMaterial/>
    // <ExaFormikMatrial/>
    // <LanTheme/>
    // <MainHeadr/>
    // <DynamicFormUseFormik/>
    // <Employee/>
    // <Home/>
    <Provider store={store}>
      <UserLogin />
    </Provider>
  );
}

export default App;
