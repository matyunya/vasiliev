import React, { Component } from 'react'
import { IndexLink } from 'react-router'

class About extends Component {
    render () {
      return (
        <div class="container">
          <h3>Список литературы</h3>
          <ul>
            <li>1. Анатолий Васильев, Зара Абдуллаева. «Параутопия», с. 279-297.</li>
            <li>2. П.Б. Богданова. «Анатолий Васильев: на пути к методу».</li>
            <li>3. Э.Е. Платонова. Культурология, с.662.</li>
            <li>4. М.Н. Эпштейн. «Постмодерн в русской литературе», с.85</li>
          </ul>

          <a href="https://www.youtube.com/watch?v=JJTQeahfbOY">Спектакль целиком</a>
          <br/>
         <IndexLink activeClassName='route--active' to='/'>
              В начало
         </IndexLink>

        </div>
  )
    }
}

export default About