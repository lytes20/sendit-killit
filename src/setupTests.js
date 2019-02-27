import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './__mocks__/login';
// configuring the test adapter for enzymes
global.Login = Login;
Enzyme.configure({ adapter: new Adapter() });
