import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Calculator from './components/calculator.js';
import Home from './components/Home.js';
import Quote from './components/Quote.js';
import NavBar from './components/NavBar.js';
import NavItem from './components/NavItem.js';
import Button from './components/Button.js';
import Input from './components/Input.js';

it('snapshot test for Calculator', () => {
  const component = renderer.create(<Calculator />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('snapshot test for Home', () => {
  const component = renderer.create(<Home />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('snapshot test for Quote', () => {
  const component = renderer.create(<Quote />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('snapshot test for NavBar', () => {
  const component = renderer.create(
    <Router>
      <NavBar />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('snapshot test for NavItem', () => {
  const component = renderer.create(
    <Router>
      <NavItem />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('snapshot test for Button', () => {
  const component = renderer.create(
    <Button symbol="+" onClick={() => {}} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('snapshot test for Input', () => {
  const component = renderer.create(
    <Input result="Test Result" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
