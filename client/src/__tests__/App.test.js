import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import App from '../App';
import { Home } from '../containers';
import { NotFoundView } from '../views';

test('renders correctly', () => {
  const wrapper = shallow(
    <App />
  );
  expect(wrapper).toMatchSnapshot();
});

test('invalid path should redirect to 404', () => {
  const wrapper = shallow(<App/>);

  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap['*']).toBe(NotFoundView);
});

test('valid path should not redirect to 404', () => {
  const wrapper = shallow(<App/>);

  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap['/']).toBe(Home);
});