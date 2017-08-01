/**
 * Created by jaeyoung on 7/19/17.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

// CSS
import './css/style.css';

// Component
class IntroComponent extends Component {

  render() {
    return (
      <div className="container">
        <img className="intro-image" src="https://github.com/Jibcon/web_react/blob/rebase/src/assets/170801-Landing-Page2.png?raw=true" />
        {/*<header>*/}
          {/*<ul>*/}
            {/*<li>*/}
              {/*<a href="#jibcon">*/}
                {/*<span>*/}
                  {/*jibcon*/}
                  {/*</span>*/}
              {/*</a>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<a href="#Recruit">*/}
                {/*<span>*/}
                  {/*Recruit*/}
                {/*</span>*/}
              {/*</a>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<a href="#People">*/}
                {/*<span>*/}
                  {/*People*/}
                {/*</span>*/}
              {/*</a>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<a href="#Contact">*/}
                {/*<span>*/}
                  {/*Contact*/}
                {/*</span>*/}
              {/*</a>*/}
            {/*</li>*/}
          {/*</ul>*/}
        {/*</header>*/}
        {/*<div>*/}
          {/*<section>*/}
            {/*<div id="jibcon">*/}
              {/*jibcon*/}
            {/*</div>*/}
            {/*<div id="Recruit">*/}
              {/*채용*/}
            {/*</div>*/}
            {/*<div id="People">*/}
              {/*사람들*/}
            {/*</div>*/}
            {/*<div id="Contact">*/}
              {/*연락*/}
            {/*</div>*/}
          {/*</section>*/}
        {/*</div>*/}
      </div>
    );
  }
}

render(
  <IntroComponent />,
  document.getElementById('root')
);
